import { Channels, ITestJson, Types } from '../../../../src/types';
import linkActionsJson from './json/linkActions.json';
import linkAndTextActionsJson from './json/linkAndTextActions.json';
import maxButtonsJson from './json/maxButtons.json';
import maxCharsJson from './json/maxChars.json';
import mixedActionsJson from './json/mixedActions.json';
import mixedActionsAndTextJson from './json/mixedActionsAndText.json';
import navigateActionsJson from './json/navigateActions.json';
import navigateAndTextActionsJson from './json/navigateAndTextActions.json';
import specialCharacterJson from './json/specialCharacters.json';

export function qrLinkActionsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: false,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.GBM]: true,
      [Channels.WEB]: true,
    },
    json: linkActionsJson,
  };
}

export function qrLinkAndTextActionsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: false,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.GBM]: true,
      [Channels.WEB]: true,
    },
    json: linkAndTextActionsJson,
  };
}

export function qrMaxButtonsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: false,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: maxButtonsJson,
  };
}

export function qrMaxCharsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: true,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: maxCharsJson,
  };
}

export function qrMixedActionsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: false,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.GBM]: true,
      [Channels.WEB]: true,
    },
    json: mixedActionsJson,
  };
}
export function qrMixedActionsAndTextGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: false,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.GBM]: true,
      [Channels.WEB]: true,
    },
    json: mixedActionsAndTextJson,
  };
}

export function qrNavigateActionsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: false,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.GBM]: true,
      [Channels.WEB]: true,
    },
    json: navigateActionsJson,
  };
}

export function qrNavigateAndTextActionsGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: false,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.GBM]: true,
      [Channels.WEB]: true,
    },
    json: navigateAndTextActionsJson,
  };
}

export function qrSpecialCharactersGbm(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: true,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: specialCharacterJson,
  };
}
