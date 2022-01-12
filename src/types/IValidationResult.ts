import { ErrorObject } from 'ajv';

export interface IValidationResult {
  valid: boolean;
  errors: ErrorObject[] | string | null | undefined;
}
