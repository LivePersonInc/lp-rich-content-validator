import { Channels, ITestJson, Types } from '../../../../src/types';
import differentDisplayOptionsJson from './json/differentDisplayOptions.json';
import oneCardJson from './json/oneCard.json';
import onlyButtonsJson from './json/onlyButtons.json';
import tooManyCardsJson from './json/tooManyCards.json';

export function bdyCarouselDifferentDisplayOptions(): ITestJson {
  return {
    description: 'bdyCarouselDifferentDisplayOptions',
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
    json: differentDisplayOptionsJson,
  };
}

export function bdyCarouselOneCard(): ITestJson {
  return {
    description: 'bdyCarouselOneCard',
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
    json: oneCardJson,
  };
}

export function bdyCarouselOnlyButtons(): ITestJson {
  return {
    description: 'bdyCarouselOnlyButtons',
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

export function bdyCarouselTooManyCards(): ITestJson {
  return {
    description: 'bdyCarouselTooManyCards',
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
    json: tooManyCardsJson,
  };
}
