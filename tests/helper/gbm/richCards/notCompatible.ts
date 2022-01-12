import { Channels, ITestJson, Types } from '../../../../src/types';
import displayOtherJson from './json/displayOther.json';
import emptyActionsButtonJson from './json/emptyActionsButton.json';
import multipleImagesJson from './json/multipleImages.json';
import noActionButtonsJson from './json/noActionButtons.json';
import noGenericJson from './json/noGeneric.json';
import onlyButtonsJson from './json/onlyButtons.json';
import tooManyButtonsJson from './json/tooManyButtons.json';
import buttonsInListJson from './json/buttonsInList.json';
import unorderedJson from './json/unordered.json';

export function richContentCardButtonsInList(): ITestJson {
  return {
    description: 'richContentCardButtonsInList',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: buttonsInListJson,
  };
}

export function richContentCardDisplayOther(): ITestJson {
  return {
    description: 'richContentCardDisplayOther',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: displayOtherJson,
  };
}

export function richContentCardEmptyActionsButton(): ITestJson {
  return {
    description: 'richContentCardEmptyActionsButton',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: emptyActionsButtonJson,
  };
}

export function richContentCardMultipleImages(): ITestJson {
  return {
    description: 'richContentCardMultipleImages',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: multipleImagesJson,
  };
}

export function richContentCardNoActionButtons(): ITestJson {
  return {
    description: 'richContentCardNoActionButtons',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: noActionButtonsJson,
  };
}
export function richContentCardNoGeneric(): ITestJson {
  return {
    description: 'richContentCardNoGeneric',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: noGenericJson,
  };
}

export function richContentCardOnlyButtons(): ITestJson {
  return {
    description: 'richContentCardOnlyButtons',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: onlyButtonsJson,
  };
}

export function richContentCardTooManyButtons(): ITestJson {
  return {
    description: 'richContentCardTooManyButtons',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: tooManyButtonsJson,
  };
}

export function richContentCardUnordered(): ITestJson {
  return {
    description: 'richContentCardUnordered',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: false,
      [Channels.WEB]: undefined,
    },
    json: unorderedJson,
  };
}
