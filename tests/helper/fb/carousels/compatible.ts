import { Channels, ITestJson, Types } from '../../../../src/types';
import bdyCarouselFbJson from './json/simple.json';
import bdyCarouselWithThreeButtonsFbJson from './json/threeButtons.json';
import bdyCarouselWithTwoButtonsFbJson from './json/twoButtons.json';
import bdyCarouselMixedFbJson from './json/mixed.json';
import bdyCarouselFiveCardsFbJson from './json/fiveCards.json';
import bdyCarouselCardsWithoutImagesFbJson from './json/cardsWithoutImages.json';

export function bdyCarouselFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselFbJson,
  };
}

export function bdyCarouselWithThreeButtonsFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselWithThreeButtonsFbJson,
  };
}

export function bdyCarouselWithTwoButtonsFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselWithTwoButtonsFbJson,
  };
}

export function bdyCarouselMixedFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselMixedFbJson,
  };
}

export function bdyCarouselFiveCardsFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselFiveCardsFbJson,
  };
}

export function bdyCarouselCardsWithoutImagesFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    description: 'This JSON fails in FB because cards in carousels need to have images.',
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselCardsWithoutImagesFbJson,
  };
}
