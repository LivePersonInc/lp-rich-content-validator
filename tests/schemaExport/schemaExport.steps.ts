import { defineFeature, loadFeature } from 'jest-cucumber';
import { Channels, Types } from '../../src/types';
import { RichContentValidator } from '../../src';
import { expectedSchemas } from '../helper';

const feature = loadFeature('tests/schemaExport/schemaExport.feature');

defineFeature(feature, (test) => {
  test('Exporting rich content-bodies and -metadata schemas for ABC', ({ given, when, then }) => {
    let validator: RichContentValidator;
    let bodySchema: object;
    let metadataSchema: object;
    given('I have a Rich Content validator for ABC', () => {
      validator = new RichContentValidator({ channel: Channels.ABC });
    });

    when('I try to export the schemas for rich content-bodies and -metadata', () => {
      bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.ABC });
      metadataSchema = validator.exportSchema({ type: Types.MTD, channel: Channels.ABC });
    });

    then('I receive one correct schema file for each of the rich content-types I requested', () => {
      const expectedBodySchema = expectedSchemas[Channels.ABC][Types.BDY];
      const expectedMetadataSchema = expectedSchemas[Channels.ABC][Types.MTD];

      expect(bodySchema).toEqual(expectedBodySchema);
      expect(metadataSchema).toEqual(expectedMetadataSchema);
    });
  });

  test('Trying to export quickreplies schemas for ABC', ({ given, when, then }) => {
    let validator: RichContentValidator;
    let error: Error;

    given('I have a Rich Content validator for ABC', () => {
      validator = new RichContentValidator({ channel: Channels.ABC });
    });

    when('I try to export the schemas for quickreplies', () => {
      try {
        validator.exportSchema({ type: Types.QUR, channel: Channels.ABC });
      } catch (e) {
        error = e;
      }
    });

    then('I receive an Error stating that ABC has no schemas for that rich content-type', () => {
      expect(error.message).toEqual("Channel 'appleBusinessChat' has no schemas for rich content type 'quickReplies'");
    });
  });

  test('Exporting All FB schemas', ({ given, when, then }) => {
    let validator: RichContentValidator;
    let bodySchema: object;
    let metadataSchema: object;
    let quickrepliesSchema: object;
    given('I have a Rich Content validator for FB', () => {
      validator = new RichContentValidator({ channel: Channels.FB });
    });

    when('I try to export the schemas for rich content-bodies, -metadata and -quickreplies', () => {
      bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.FB });
      metadataSchema = validator.exportSchema({ type: Types.MTD, channel: Channels.FB });
      quickrepliesSchema = validator.exportSchema({ type: Types.QUR, channel: Channels.FB });
    });

    then('I receive one correct schema file for each of the rich content-types I requested', () => {
      const expectedBodySchema = expectedSchemas[Channels.FB][Types.BDY];
      const expectedMetadataSchema = expectedSchemas[Channels.FB][Types.MTD];
      const expectedQuickrepliesSchema = expectedSchemas[Channels.FB][Types.QUR];

      expect(bodySchema).toEqual(expectedBodySchema);
      expect(metadataSchema).toEqual(expectedMetadataSchema);
      expect(quickrepliesSchema).toEqual(expectedQuickrepliesSchema);
    });
  });

  test('Exporting All Line schemas', ({ given, when, then }) => {
    let validator: RichContentValidator;
    let bodySchema: object;
    let metadataSchema: object;
    let quickrepliesSchema: object;
    given('I have a Rich Content validator for ABC', () => {
      validator = new RichContentValidator({ channel: Channels.LINE });
    });

    when('I try to export the schemas for rich content-bodies, -metadata and -quickreplies', () => {
      bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.LINE });
      metadataSchema = validator.exportSchema({ type: Types.MTD, channel: Channels.LINE });
      quickrepliesSchema = validator.exportSchema({ type: Types.QUR, channel: Channels.LINE });
    });

    then('I receive one correct schema file for each of the rich content-types I requested', () => {
      const expectedBodySchema = expectedSchemas[Channels.LINE][Types.BDY];
      const expectedMetadataSchema = expectedSchemas[Channels.LINE][Types.MTD];
      const expectedQuickrepliesSchema = expectedSchemas[Channels.LINE][Types.QUR];

      expect(bodySchema).toEqual(expectedBodySchema);
      expect(metadataSchema).toEqual(expectedMetadataSchema);
      expect(quickrepliesSchema).toEqual(expectedQuickrepliesSchema);
    });
  });

  test('Exporting All RBM schemas', ({ given, when, then }) => {
    let validator: RichContentValidator;
    let bodySchema: object;
    let metadataSchema: object;
    let quickrepliesSchema: object;
    given('I have a Rich Content validator for RBM', () => {
      validator = new RichContentValidator({ channel: Channels.RBM });
    });

    when('I try to export the schemas for rich content-bodies, -metadata and -quickreplies', () => {
      bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.RBM });
      metadataSchema = validator.exportSchema({ type: Types.MTD, channel: Channels.RBM });
      quickrepliesSchema = validator.exportSchema({ type: Types.QUR, channel: Channels.RBM });
    });

    then('I receive one correct schema file for each of the rich content-types I requested', () => {
      const expectedBodySchema = expectedSchemas[Channels.RBM][Types.BDY];
      const expectedMetadataSchema = expectedSchemas[Channels.RBM][Types.MTD];
      const expectedQuickrepliesSchema = expectedSchemas[Channels.RBM][Types.QUR];

      expect(bodySchema).toEqual(expectedBodySchema);
      expect(metadataSchema).toEqual(expectedMetadataSchema);
      expect(quickrepliesSchema).toEqual(expectedQuickrepliesSchema);
    });
  });

  test('Exporting All Web schemas', ({ given, when, then }) => {
    let validator: RichContentValidator;
    let bodySchema: object;
    let metadataSchema: object;
    let quickrepliesSchema: object;
    given('I have a Rich Content validator for Web', () => {
      validator = new RichContentValidator({ channel: Channels.WEB });
    });

    when('I try to export the schemas for rich content-bodies, -metadata and -quickreplies', () => {
      bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.WEB });
      metadataSchema = validator.exportSchema({ type: Types.MTD, channel: Channels.WEB });
      quickrepliesSchema = validator.exportSchema({ type: Types.QUR, channel: Channels.WEB });
    });

    then('I receive one correct schema file for each of the rich content-types I requested', () => {
      const expectedBodySchema = expectedSchemas[Channels.WEB][Types.BDY];
      const expectedMetadataSchema = expectedSchemas[Channels.WEB][Types.MTD];
      const expectedQuickrepliesSchema = expectedSchemas[Channels.WEB][Types.QUR];

      expect(bodySchema).toEqual(expectedBodySchema);
      expect(metadataSchema).toEqual(expectedMetadataSchema);
      expect(quickrepliesSchema).toEqual(expectedQuickrepliesSchema);
    });
  });

  test('Exporting All GBM schemas', ({ given, when, then }) => {
    let validator: RichContentValidator;
    let bodySchema: object;
    let metadataSchema: object;
    let quickrepliesSchema: object;

    given('I have a Rich Content validator for GBM', () => {
      validator = new RichContentValidator({ channel: Channels.GBM });
    });

    when('I try to export the schemas for rich content-bodies, -metadata and -quickreplies', () => {
      bodySchema = validator.exportSchema({ type: Types.BDY, channel: Channels.GBM });
      metadataSchema = validator.exportSchema({ type: Types.MTD, channel: Channels.GBM });
      quickrepliesSchema = validator.exportSchema({ type: Types.QUR, channel: Channels.GBM });
    });

    then('I receive one correct schema file for each of the rich content-types I requested', () => {
      const expectedBodySchema = expectedSchemas[Channels.GBM][Types.BDY];
      const expectedMetadataSchema = expectedSchemas[Channels.GBM][Types.MTD];
      const expectedQuickrepliesSchema = expectedSchemas[Channels.GBM][Types.QUR];

      expect(bodySchema).toEqual(expectedBodySchema);
      expect(metadataSchema).toEqual(expectedMetadataSchema);
      expect(quickrepliesSchema).toEqual(expectedQuickrepliesSchema);
    });
  });
});
