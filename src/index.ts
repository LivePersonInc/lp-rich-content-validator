import Ajv, { ValidateFunction } from 'ajv';
import { DateValidator, RichContentSorter } from './helperClasses';
import {
  IRichContentValidatorConfig,
  IRichContentValidator,
  Channels,
  IValidationResult,
  Types,
  Channel,
  Type,
  IExportConfig,
} from './types';
import allSchemas from './schemas';

class RichContentValidator implements IRichContentValidator {
  private channel!: Channel;

  private bodyValidator!: ValidateFunction;

  private metadataValidator!: ValidateFunction;

  private quickReplyValidator?: ValidateFunction;

  private dateValidator?: DateValidator;

  private sorter: RichContentSorter;

  /**
   * Creates an instance of RichContentValidator.
   * @param {IRichContentValidatorConfig} config configuration object
   * @param {Channels} config.channel Defines the channel for which the validator should validate. Can either stand for Facebook, AppleBusinessChat, Line, RcsBusinessMessaging or Web.
   * @param {boolean} config.declinePastDates Defines whether the validator should reject dates that lie in the past for DatePickers. Currently this is only relevant for the AppleBusinessChat channel.
   * ATTENTION: this feature is experimental and its reliability is explicitly not guaranteed. Therefore it is disabled by default.
   * @memberof RichContentValidator
   */
  constructor({ channel, declinePastDates = false }: IRichContentValidatorConfig) {
    this.dateValidator = declinePastDates ? new DateValidator() : undefined;
    this.sorter = new RichContentSorter({ channel });
    this.setChannelTo({ channel, declinePastDates });
  }

  /**
   * Used to check if a JSON/object is valid rich content of the type 'body' on the channel the validator is set to.
   * @param {object} body the JSON/object that should be validated
   * @returns {IValidationResult} Object containing validation result and errors if a validation failed
   * @memberof RichContentValidator
   */
  public validateBody(body: object): IValidationResult {
    try {
      const sortedBody = this.sorter.sortBody(body);

      const valid = this.bodyValidator(sortedBody) as boolean;
      return {
        valid,
        errors: !valid ? this.bodyValidator.errors : undefined,
      };
    } catch (e) {
      return { valid: false, errors: `Encountered the following errors during validation: ${e.message}` };
    }
  }

  /**
   * Used to check if a JSON/object is valid rich content of the type 'metadata' on the channel the validator is set to.
   * @param {object} metadata the JSON/object that should be validated
   * @returns {IValidationResult} Object containing validation result and errors if a validation failed
   * @memberof RichContentValidator
   */
  public validateMetadata(metadata: object): IValidationResult {
    const valid = this.metadataValidator(metadata) as boolean;
    return {
      valid,
      errors: !valid ? this.metadataValidator.errors : undefined,
    };
  }

  /**
   * Used to check if a JSON/object is valid rich content of the type 'quickReply' on the channel the validator is set to.
   * @param {object} quickReply the JSON/object that should be validated
   * @returns {IValidationResult} Object containing validation result and errors if a validation failed
   * @memberof RichContentValidator
   */
  public validateQuickReply(quickReply: object): IValidationResult {
    if (!this.quickReplyValidator) {
      return { valid: false, errors: `The '${this.channel}' channel does not support LP-Quick Replies.` };
    }
    const valid = this.quickReplyValidator(quickReply) as boolean;
    return {
      valid,
      errors: !valid ? this.quickReplyValidator.errors : undefined,
    };
  }

  /**
   * Is used to adjust the channel for which a validator validates after instantiation.
   * @param {Channels} config.channel the channel the validator should be adjusted to
   * @param {boolean} config.declinePastDates Defines whether the validator should reject dates that
   * lie in the past for DatePickers. Currently this is only relevant for the AppleBusinessChat channel.
   * Defaults to false.
   * @memberof RichContentValidator
   */
  public setChannelTo({ channel, declinePastDates = false }: IRichContentValidatorConfig): void {
    if (!Object.values(Channels).includes(channel)) {
      throw new Error(`Could not set the channel of the validator to '${channel}'`);
    }

    this.channel = channel;
    this.bodyValidator = this.createValidator(Types.BDY, channel, declinePastDates);
    this.metadataValidator = this.createValidator(Types.MTD, channel);
    this.quickReplyValidator = channel === Channels.ABC ? undefined : this.createValidator(Types.QUR, channel);
  }

  /**
   * Creates and returns a JSON-schema object for a specific rich content type/channel
   * depending on the passed config object. Be aware that the exported schema will only provide
   * correct validation results if the rich content object that should be validated is sorted before.
   * If you are unsure whether this is the case, it is better to use the validation methods
   * 'validateBody', 'validateMetadata' or 'validateQuickReply' instead of exporting.
   * @param {Types} config.type the rich content type you want to export a schema for
   * @param {Channels} config.channel the rich content channel you want to export a schema for
   * @param {boolean} [config.declinePastDates=false] Defines whether the schema should reject dates
   * that lie in the past for DatePickers. Currently this is only relevant for the AppleBusinessChat
   * channel and makes only sense if the exported schema is used instantly. Defaults to false.
   * @returns {object} the schema object
   * @memberof RichContentValidator
   */
  public exportSchema({ type, channel, declinePastDates = false }: IExportConfig): object {
    if (channel === Channels.ABC && type === Types.QUR) {
      throw new Error(`Channel '${channel}' has no schemas for rich content type '${type}'`);
    } else if (!Object.values(Channels).includes(channel) || !Object.values(Types).includes(type)) {
      throw new Error(`Could not export the schema for channel '${channel}' of type '${type}'`);
    }

    const validator = this.createValidator(type, channel, declinePastDates);
    const rootSchema = validator.schema as Record<string, never>;
    const refDictionary = validator.refs as Record<string, never>;
    const refValues = validator.refVal as never[];

    let abcWebPlaceholder;
    if (type === Types.BDY && channel === Channels.ABC) {
      const webBodyValidator = this.createValidator(type, Channels.WEB);
      const webRootSchema = webBodyValidator.schema as Record<string, never>;
      const webRrefDictionary = webBodyValidator.refs as Record<string, never>;
      const webRefValues = webBodyValidator.refVal as never[];
      abcWebPlaceholder = this.resolveRefs(webRootSchema, webRrefDictionary, webRefValues, 'abcWebPlaceholder');
    }

    const result = {
      $schema: 'http://json-schema.org/draft-07/schema',
      $ref: `#/definitions/root`,
      definitions: {
        root: this.resolveRefs(rootSchema, refDictionary, refValues, 'root'),
        ...(abcWebPlaceholder && { abcWebPlaceholder }),
      },
    };

    return result;
  }

  /**
   * Returns the channel for which the validator is currently configured.
   * @returns {Channels} the channel for which the validator is currently configured
   * @memberof RichContentValidator
   */
  public getChannelName(): Channel {
    return this.channel;
  }

  /**
   * Takes a schema, recursively resolves all of its references to other schemas and returns it.
   * @private
   * @param schema the schema from which the references are to be resolved
   * @param {Record<string, number>} refDictionary dictionary with which the numerical reference values of a schema can be obtained using the Id
   * @param {any[]} refValues array containing the referenced schemas
   * @param {string} definitionId name of the definition used to replace 'rich_content.json' references
   * @returns {object} schema object with resolved references where 'rich_content.json'-references
   * have been adjusted to point to a definition, defined by the 'definitionId' parameter
   * @memberof RichContentValidator
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private resolveRefs(schema: any, refDictionary: Record<string, number>, refValues: any[], definitionId: string): object {
    if (schema instanceof Array) {
      return schema.map((element) => this.resolveRefs(element, refDictionary, refValues, definitionId));
    }
    if (schema instanceof Object && Object.prototype.hasOwnProperty.call(schema, '$ref')) {
      if (schema.$ref.startsWith('#/definitions/')) {
        return schema;
      }
      if (schema.$ref === 'abcWebPlaceholder.json') {
        return { $ref: `#/definitions/abcWebPlaceholder` };
      }
      if (schema.$ref === 'rich_content.json') {
        return { $ref: `#/definitions/${definitionId}` };
      }
      const refIndex = refDictionary[schema.$ref];
      const referencedSchema = refValues[refIndex];
      if (referencedSchema instanceof Function) {
        return this.resolveRefs(referencedSchema.schema, referencedSchema.refs, referencedSchema.refVal, definitionId);
      }
      return this.resolveRefs(referencedSchema, refDictionary, refValues, definitionId);
    }
    if (schema instanceof Object) {
      schema = schema as Record<string, never>;
      Object.keys(schema).forEach((key) => {
        schema[key] = this.resolveRefs(schema[key], refDictionary, refValues, definitionId);
      });
      return schema;
    }
    return schema;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private addDynamicSchemaAdjustments(schemas: any, channel?: Channel, declinePastDates = false): Record<string, object> {
    try {
      if (channel === Channels.ABC) {
        Object.keys(schemas).forEach((key: string) => {
          /* Only relevant for ABC-DatePickers and if activated: adds a regex to the schema that 
          declines past dates and ensures the ISO8601 format */
          if (declinePastDates && this.dateValidator) {
            if (schemas[key].title === 'abcFuturePatternIso8601') {
              schemas[key].pattern = this.dateValidator.createFutureRegex();
            }
          }
          /* Ensures that web Cards point to the WebPlaceholder instead of the 'real' web root
          during ABC validation. (yep this is confusing and requires a lvl of understanding the
          Lp-RichContent-Definition over 9000) */
          if (key === 'card') {
            schemas[key].oneOf[1].properties.elements.items.$ref = 'abcWebPlaceholder.json';
            schemas[key].oneOf[2].properties.elements.items.$ref = 'abcWebPlaceholder.json';
          }
        });
      }
      if (channel === Channels.WEB) {
        Object.keys(schemas).forEach((key: string) => {
          // ensures the right button schema is used during QR-validation on the Web channel
          if (schemas[key].title === 'quickReplies') {
            schemas[key].properties.replies.items.$ref = 'button.json';
          }
        });
      }
      return schemas;
    } catch (error) {
      throw new Error(`Error during dynamic schema adjustments. Please notify maintainer of the module. Error message: ${error.message}`);
    }
  }

  private createValidator(type: Type, channel: Channel, declinePastDates = false): ValidateFunction {
    const allSchemasCopy = JSON.parse(JSON.stringify(allSchemas));
    let schemasToAdd = allSchemasCopy[channel][type];
    if (type === Types.BDY || type === Types.QUR) {
      schemasToAdd = this.addDynamicSchemaAdjustments(allSchemasCopy[channel][type], channel, declinePastDates) as Record<string, object>;
    }

    const validator = new Ajv({ format: 'full', unknownFormats: 'ignore', verbose: true, logger: false });
    Object.keys(schemasToAdd).forEach((key: string) => {
      const adjustedSchema = schemasToAdd[key];
      if (key === 'BodyRoot' && channel === Channels.WEB) {
        validator.addSchema(adjustedSchema, `rich_content.json`);
      } else {
        validator.addSchema(adjustedSchema, `${key}.json`);
      }
    });

    switch (type) {
      case Types.BDY:
        return validator.compile(schemasToAdd.BodyRoot);
      case Types.MTD:
        return validator.compile(schemasToAdd.MetadataRoot);
      case Types.QUR:
        return validator.compile(schemasToAdd.QuickReplyRoot);
      default:
        throw new Error(`Validator Creation failed for rich content type: ${type}`);
    }
  }
}

export { RichContentValidator, Channels, Types };
