import Ajv, { ValidateFunction } from 'ajv';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { Channels, ITestJson, Types, ITestExpectation, IValidationResult } from '../../../src/types';
import { RichContentValidator } from '../../../src';
import { testJsonContainers } from '../../helper';
import { RichContentSorter } from '../../../src/helperClasses';

const feature = loadFeature('tests/channel/gbm/googleBusinessMessages.feature');

defineFeature(feature, (test) => {
  test('Validation works for all eligible test-JSONs (High Lvl)', ({ given, when, then }) => {
    const eligibleTestJsonContainers = testJsonContainers.filter(
      (testJsonContainer) => testJsonContainer().channelCompatibility[Channels.GBM] !== undefined,
    );
    const testExpectations: ITestExpectation[] = [];
    let validator: RichContentValidator;

    given('I have a Rich Content validator for GBM', () => {
      validator = new RichContentValidator({ channel: Channels.GBM });
    });

    when('I try to validate each eligible test-JSON', () => {
      eligibleTestJsonContainers.forEach((testJsonContainer) => {
        const testJson: ITestJson = testJsonContainer();

        switch (testJson.richContentType) {
          case Types.BDY:
            testExpectations.push({
              testJsonName: testJsonContainer.name,
              testJson,
              validationResult: validator.validateBody(testJson.json),
            });
            break;
          case Types.QUR:
            testExpectations.push({
              testJsonName: testJsonContainer.name,
              testJson,
              validationResult: validator.validateQuickReply(testJson.json),
            });
            break;
          default:
            break;
        }
      });
    });

    then('The validator either validates or returns errors for them as expected on the GBM channel', () => {
      testExpectations.forEach((testExpectation) => {
        if (testExpectation.testJson.debug) {
          // Set a breakpoint here if you have set the 'debug' property on a ITestJson to 'true'
          expect(true).toBeTruthy();
        }
        const {
          testJson: {
            channelCompatibility: { [Channels.GBM]: gbmCompatibility },
          },
        } = testExpectation;
        const result = testExpectation.validationResult;
        if (gbmCompatibility) {
          expect(result.errors).toBeUndefined();
          expect(result.valid).toEqual(true);
        } else {
          expect(result.valid).toEqual(false);
          expect(result.errors && result.errors.length).toBeGreaterThan(0);
        }
      });
    });
  });

  test('Validation with exported Schemas works for all eligible test-JSONs (High Lvl)', ({ given, when, then }) => {
    const eligibleTestJsonContainers = testJsonContainers.filter(
      (testJsonContainer) => testJsonContainer().channelCompatibility[Channels.GBM] !== undefined,
    );
    const testExpectations: ITestExpectation[] = [];
    let bodyValidator: ValidateFunction;
    let quickrepliesValidator: ValidateFunction;

    given('I exported the GBM Schemas from a Rich Content validator', () => {
      const validator = new RichContentValidator({ channel: Channels.GBM });
      const bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.GBM });
      const quickrepliesSchema = validator.exportSchema({ type: Types.QUR, channel: Channels.GBM });

      const ajv = new Ajv({ format: 'full', unknownFormats: 'ignore', verbose: true, logger: false });
      bodyValidator = ajv.compile(bodySchema);
      quickrepliesValidator = ajv.compile(quickrepliesSchema);
    });

    when(
      'I sort eligible test-JSONs if they are rich content-bodies and try to validate all of them against the schemas using an ajv-validator',
      () => {
        function validatingJson(json: object, isBody: boolean, validator: ValidateFunction): IValidationResult {
          try {
            if (isBody) {
              const sorter = new RichContentSorter({ channel: Channels.GBM });
              json = sorter.sortBody(json);
            }
            const valid = validator(json) as boolean;
            return {
              valid,
              errors: !valid ? validator.errors : undefined,
            };
          } catch (e) {
            return { valid: false, errors: `Encountered the following errors during validation: ${e.message}` };
          }
        }

        eligibleTestJsonContainers.forEach((testJsonContainer) => {
          const testJson: ITestJson = testJsonContainer();

          switch (testJson.richContentType) {
            case Types.BDY:
              testExpectations.push({
                testJsonName: testJsonContainer.name,
                testJson,
                validationResult: validatingJson(testJson.json, true, bodyValidator),
              });
              break;
            case Types.QUR:
              testExpectations.push({
                testJsonName: testJsonContainer.name,
                testJson,
                validationResult: validatingJson(testJson.json, false, quickrepliesValidator),
              });
              break;
            default:
              break;
          }
        });
      },
    );

    then('The validator either validates or returns errors for them as expected on the GBM channel', () => {
      testExpectations.forEach((testExpectation) => {
        if (testExpectation.testJson.debug) {
          // Set a breakpoint here if you have set the 'debug' property on a ITestJson to 'true'
          expect(true).toBeTruthy();
        }
        const {
          testJson: {
            channelCompatibility: { [Channels.GBM]: gbmCompatibility },
          },
        } = testExpectation;
        const result = testExpectation.validationResult;
        if (gbmCompatibility) {
          expect(result.errors).toBeUndefined();
          expect(result.valid).toEqual(true);
        } else {
          expect(result.valid).toEqual(false);
          expect(result.errors && result.errors.length).toBeGreaterThan(0);
        }
      });
    });
  });
});
