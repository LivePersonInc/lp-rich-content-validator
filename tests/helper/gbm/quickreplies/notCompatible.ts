import { Channels, ITestJson, Types } from '../../../../src/types';
import tooManyButtonsJson from './json/tooManyButtons.json';
import tooManyCharsJson from './json/tooManyChars.json';
import noActionsJson from './json/noActions.json';

export function qrTooManyButtonsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: false,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: tooManyButtonsJson,
  };
}

export function qrNoActionsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: noActionsJson,
  };
}

export function qrTooManyCharsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: false,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: tooManyCharsJson,
  };
}
