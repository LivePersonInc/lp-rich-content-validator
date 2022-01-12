/* eslint-disable radix */
import { IDateValidator } from '../types';

export class DateValidator implements IDateValidator {
  private grtrOrEqlRegexYear(year: number): string {
    const yearString = year.toString();
    const h1 = `([${yearString[0]}-9][${yearString[1]}-9][${yearString[2]}-9][${yearString[3]}-9])`;
    const h2 = `([${yearString[0]}-9][${yearString[1]}-9][${parseInt(yearString[2] === '9' ? '-1' : yearString[2]) + 1}-9][0-9])`;
    const h3 = `([${yearString[0]}-9][${parseInt(yearString[1] === '9' ? '-1' : yearString[1]) + 1}-9][0-9][0-9])`;
    const h4 = `([${parseInt(yearString[0] === '9' ? '-1' : yearString[0]) + 1}-9][0-9][0-9][0-9])`;

    return `(${h1}|${h2}|${h3}|${h4})`;
  }

  private grtrOrEqlRegexMonth(month: number): string {
    let monthString = month.toString();
    monthString = `0${monthString}`.slice(-2);
    const monthExpressions = [`([0][${monthString[1]}-9]|[1][0-2])`, `([1][${monthString[1]}-2])`];

    return `(${monthExpressions[parseInt(monthString[0])]})`;
  }

  private grtrOrEqlRegexDate(date: number): string {
    let dateString = date.toString();
    dateString = `0${dateString}`.slice(-2);
    const DateExpressions = [
      `(([0][${dateString[1]}-9])|([1-3][0-9]))`,
      `(([1][${dateString[1]}-9])|([2-3][0-9]))`,
      `(([2][${dateString[1]}-9])|([3][0-1]))`,
    ];

    return `(${DateExpressions[parseInt(dateString[0])]})`;
  }

  public createFutureRegex(date = new Date()): string {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDate = date.getDate();

    const noPastYearRegex = this.grtrOrEqlRegexYear(currentYear);

    const h1 = `(${this.grtrOrEqlRegexYear(currentYear + 1)})`;
    const h2 = `(${currentYear}-${this.grtrOrEqlRegexMonth(currentMonth)})`;
    const noPastMonthThisYearRegex = `(${h1}|${h2})`;

    const h3 = `(${this.grtrOrEqlRegexYear(currentYear + 1)})`;
    const h4 = `(${currentYear}-${this.grtrOrEqlRegexMonth(currentMonth + 1)})`;
    const h5 = `(${currentYear}-${currentMonth}-${this.grtrOrEqlRegexDate(currentDate)})`;
    const noPastDateThisMonthRegex = `(${h3}|${h4}|${h5})`;

    const notInPastPreCheckRegex = `(?=${noPastYearRegex})(?=${noPastMonthThisYearRegex})(?=${noPastDateThisMonthRegex})`;

    // Not created by myself (mschabel), see here for more information: https://www.debuggex.com/r/cvM9rkXW3ocsKMEq
    const iso8601DateRegex =
      '(?:[1-9]\\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:Z|[+-][01]\\d[0-5]\\d|[+-][01]\\d:[0-5]\\d)';

    return notInPastPreCheckRegex + iso8601DateRegex;
  }
}
