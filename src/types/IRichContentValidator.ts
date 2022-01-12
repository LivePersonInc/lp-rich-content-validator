import { IValidationResult, Channel, IExportConfig, IRichContentValidatorConfig } from '.';

export interface IRichContentValidator {
  validateBody(body: object): IValidationResult;
  validateMetadata(metadata: object): IValidationResult;
  validateQuickReply(body: object): IValidationResult;
  setChannelTo(config: IRichContentValidatorConfig): void;
  getChannelName(): Channel;
  exportSchema(config: IExportConfig): object;
}
