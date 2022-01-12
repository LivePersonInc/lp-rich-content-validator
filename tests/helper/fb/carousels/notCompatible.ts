import { Channels, ITestJson, Types } from '../../../../src/types';
import bdyCarouselComplexFbJson from './json/complex.json';
import bdyCarouselElevenCardsFbJson from './json/tooManyCards.json';

export function bdyCarouselComplexFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    description: 'JSON is failing on FB/RBM because inside of a card a map component is used',
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: true,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.WEB]: true,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselComplexFbJson,
  };
}

export function bdyCarouselElevenCardsFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    description: 'JSON fails because carousel contains 11 cards (1 too many)',
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyCarouselElevenCardsFbJson,
  };
}
