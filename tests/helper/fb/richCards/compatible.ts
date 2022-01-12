import { Channels, ITestJson, Types } from '../../../../src/types';
import bdyButtonFbJson from './json/button.json';
import bdyImageFbJson from './json/image.json';
import bdyTitleAndSubtitleFbJson from './json/titleAndSubtitle.json';
import bdyVerticalCardWithTwoButtonsFbJson from './json/twoButtons.json';
import bdyVerticalCardWithThreeButtonsFbJson from './json/threeButtons.json';
import bdyVerticalCardGenericTwoButtonsFbJson from './json/genericTwoButtons.json';
import bdyVerticalCardGenericThreeButtonsFbJson from './json/genericThreeButtons.json';
import bdyVerticalCardWithNavigateFbJson from './json/verticalWithNavigate.json';
import bdyGenericCardWithoutImageFbJson from './json/noImage.json';

export function bdyButtonFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: true,
      [Channels.LINE]: false,
      [Channels.RBM]: false,
      [Channels.WEB]: true,
      [Channels.GBM]: undefined,
    },
    json: bdyButtonFbJson,
  };
}

export function bdyImageFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: true,
      [Channels.LINE]: false,
      [Channels.RBM]: true,
      [Channels.WEB]: true,
      [Channels.GBM]: undefined,
    },
    json: bdyImageFbJson,
  };
}

export function bdyTitleAndSubtitleFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: true,
      [Channels.LINE]: false,
      [Channels.RBM]: true,
      [Channels.WEB]: true,
      [Channels.GBM]: undefined,
    },
    json: bdyTitleAndSubtitleFbJson,
  };
}

export function bdyVerticalCardWithTwoButtonsFb(): ITestJson {
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
    json: bdyVerticalCardWithTwoButtonsFbJson,
  };
}

export function bdyVerticalCardWithThreeButtonsFb(): ITestJson {
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
    json: bdyVerticalCardWithThreeButtonsFbJson,
  };
}

export function bdyVerticalCardGenericTwoButtonsFb(): ITestJson {
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
    json: bdyVerticalCardGenericTwoButtonsFbJson,
  };
}

export function bdyVerticalCardGenericThreeButtonsFb(): ITestJson {
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
    json: bdyVerticalCardGenericThreeButtonsFbJson,
  };
}

export function bdyVerticalCardWithNavigateFb(): ITestJson {
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
    json: bdyVerticalCardWithNavigateFbJson,
  };
}

export function bdyGenericCardWithoutImageFb(): ITestJson {
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
    json: bdyGenericCardWithoutImageFbJson,
  };
}
