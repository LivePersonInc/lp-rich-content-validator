import { RichContentValidator, Channels } from '../../src';

describe('RichContentValidator Unit tests', () => {
  test('Instantiation for ABC without checking dates', () => {
    const validator = new RichContentValidator({ channel: Channels.ABC, declinePastDates: false });
    expect(validator).toBeTruthy();
  });

  test('calling getChannelName()', () => {
    const validator = new RichContentValidator({ channel: Channels.ABC, declinePastDates: false });
    const result = validator.getChannelName();
    const expectedResult = Channels.ABC;

    expect(result).toEqual(expectedResult);
  });

  test('calling setChannelTo() with unallowed parameter', () => {
    const validator = new RichContentValidator({ channel: Channels.ABC, declinePastDates: false });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const unallowedParameter = 'unallowedParameter' as any;

    const expectedResult = `Could not set the channel of the validator to '${unallowedParameter}'`;
    let result = 'Error was not thrown';
    try {
      validator.setChannelTo({ channel: unallowedParameter });
    } catch (error) {
      result = error.message;
    }

    expect(result).toEqual(expectedResult);
  });

  test('calling exportSchema() with unallowed parameter', () => {
    const validator = new RichContentValidator({ channel: Channels.ABC });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const unallowedParameter = 'unallowedParameter' as any;

    const expectedResult = `Could not export the schema for channel 'web' of type '${unallowedParameter}'`;
    let result = 'Error was not thrown';
    try {
      validator.exportSchema({ type: unallowedParameter, channel: Channels.WEB });
    } catch (error) {
      result = error.message;
    }

    expect(result).toEqual(expectedResult);
  });
});
