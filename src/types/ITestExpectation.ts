import { ITestJson, IValidationResult } from '.';

export interface ITestExpectation {
  testJsonName: string;
  testJson: ITestJson;
  validationResult: IValidationResult;
}
