import Ajv, { ValidateFunction } from 'ajv';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { Channels, ITestJson, Types, ITestExpectation, IValidationResult } from '../../../src/types';
import { RichContentValidator } from '../../../src';
import { testJsonContainers } from '../../helper';
import { RichContentSorter } from '../../../src/helperClasses';

const feature = loadFeature('tests/channel/appleBusinessChat/appleBusinessChat.feature');

defineFeature(feature, (test) => {
  test('Validation works for all eligible test-JSONs (High Lvl)', ({ given, when, then }) => {
    const eligibleTestJsonContainers = testJsonContainers.filter(
      (testJsonContainer) => testJsonContainer().channelCompatibility[Channels.ABC] !== undefined,
    );
    const testExpectations: ITestExpectation[] = [];
    let validator: RichContentValidator;
    given('I have a Rich Content validator for ABC that refuses past dates in date pickers', () => {
      validator = new RichContentValidator({ channel: Channels.ABC, declinePastDates: true });
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
          case Types.MTD:
            testExpectations.push({
              testJsonName: testJsonContainer.name,
              testJson,
              validationResult: validator.validateMetadata(testJson.json),
            });
            break;
          default:
            break;
        }
      });
    });

    then('The validator either validates or returns errors for them as expected on the ABC channel', () => {
      testExpectations.forEach((testExpectation) => {
        if (testExpectation.testJson.debug) {
          // Set a breakpoint here if you have set the 'debug' property on a ITestJson to 'true'
          expect(true).toBeTruthy();
        }
        const {
          testJson: {
            channelCompatibility: { [Channels.ABC]: abcCompatibility },
          },
        } = testExpectation;
        const result = testExpectation.validationResult;
        if (abcCompatibility) {
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
      (testJsonContainer) => testJsonContainer().channelCompatibility[Channels.ABC] !== undefined,
    );
    const testExpectations: ITestExpectation[] = [];
    let bodyValidator: ValidateFunction;
    let metadataValidator: ValidateFunction;

    given('I exported the ABC Schemas from a Rich Content validator that refuses past dates in date pickers', () => {
      const validator = new RichContentValidator({ channel: Channels.ABC, declinePastDates: true });
      const bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.ABC, declinePastDates: true });
      const metadataSchema = validator.exportSchema({ type: Types.MTD, channel: Channels.ABC });

      const ajv = new Ajv({ format: 'full', unknownFormats: 'ignore', verbose: true, logger: false });
      metadataValidator = ajv.compile(metadataSchema);
      bodyValidator = ajv.compile(bodySchema);
    });

    when(
      'I sort eligible test-JSONs if they are rich content-bodies and try to validate all of them against the schemas using an ajv-validator',
      () => {
        function validatingJson(json: object, isBody: boolean, validator: ValidateFunction): IValidationResult {
          try {
            if (isBody) {
              const sorter = new RichContentSorter({ channel: Channels.ABC });
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
            case Types.MTD:
              testExpectations.push({
                testJsonName: testJsonContainer.name,
                testJson,
                validationResult: validatingJson(testJson.json, false, metadataValidator),
              });
              break;
            default:
              break;
          }
        });
      },
    );

    then('The validator either validates or returns errors for them as expected on the ABC channel', () => {
      testExpectations.forEach((testExpectation) => {
        if (testExpectation.testJson.debug) {
          // Set a breakpoint here if you have set the 'debug' property on a ITestJson to 'true'
          expect(true).toBeTruthy();
        }
        const {
          testJson: {
            channelCompatibility: { [Channels.ABC]: abcCompatibility },
          },
        } = testExpectation;
        const result = testExpectation.validationResult;
        if (abcCompatibility) {
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
