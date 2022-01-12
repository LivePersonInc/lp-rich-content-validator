import { Channels, ITestJson, Types } from '../../../../src/types';
import differentLayoutJson from './json/differentLayout.json';
import displayOptionsJson from './json/displayOptions.json';
import imageOnlyJson from './json/imageOnly.json';
import maxCardsJson from './json/maxCards.json';
import twoCardsJson from './json/twoCards.json';

export function bdyCarouselDifferentLayout(): ITestJson {
  return {
    description: 'bdyCarouselDifferentLayout',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: differentLayoutJson,
  };
}

export function bdyCarouselDisplayOptions(): ITestJson {
  return {
    description: 'bdyCarouselDisplayOptions',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: displayOptionsJson,
  };
}

export function bdyCarouselImageOnly(): ITestJson {
  return {
    description: 'bdyCarouselImageOnly',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: imageOnlyJson,
  };
}

export function bdyCarouselMaxCards(): ITestJson {
  return {
    description: 'bdyCarouselMaxCards',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: maxCardsJson,
  };
}

export function bdyCarouselTwoCards(): ITestJson {
  return {
    description: 'bdyCarouselTwoCards',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: twoCardsJson,
  };
}
