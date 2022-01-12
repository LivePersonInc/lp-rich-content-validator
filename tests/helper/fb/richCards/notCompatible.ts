import { Channels, ITestJson, Types } from '../../../../src/types';

import bdyMapCardFbJson from './json/map.json';
import bdyButtonCardTooLongTextFbJson from './json/buttonTooLong.json';
import bdyButtonCardTooLongTitleFbJson from './json/titleTooLong.json';
import bdyGenericCardTooLongTitleFbJson from './json/buttonTitleTooLong.json';
import bdyGenericCardTooLongSubtitleFbJson from './json/subtitleTooLong.json';
import bdyGenericCardTooLongButtonTitleFbJson from './json/genericButtonTitleTooLong.json';
import bdyGenericCardTooManyButtonsFbJson from './json/genericTooManyButtons.json';
import bdyButtonCardTooManyButtonsFbJson from './json/tooManyButtons.json';
import bdyGenericCardMissingTitleSubtitleFbJson from './json/genericNoTitleSubtitle.json';
import bdyGenericCardMissingButtonFbJson from './json/genericNoButton.json';
import bdyButtonCardMissingButtonFbJson from './json/noButtonContent.json';
import bdyTitleOnlyFbJson from './json/titleOnly.json';

export function bdyMapCardFb(): ITestJson {
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
    json: bdyMapCardFbJson,
  };
}

export function bdyButtonCardTooLongTextFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    description: 'This JSON fails because the card has a "button"-tag and a button TEXT has more than 640 chars',
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyButtonCardTooLongTextFbJson,
  };
}

export function bdyButtonCardTooLongTitleFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "button"-tag and a button TITLE has more than 20 chars',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyButtonCardTooLongTitleFbJson,
  };
}

export function bdyGenericCardTooLongTitleFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "generic"-tag and a TITLE text has more than 80 chars',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyGenericCardTooLongTitleFbJson,
  };
}

export function bdyGenericCardTooLongSubtitleFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "generic"-tag and a SUBTITLE text has more than 80 chars',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyGenericCardTooLongSubtitleFbJson,
  };
}

export function bdyGenericCardTooLongButtonTitleFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "generic"-tag and a a button TITLE has more than 20 chars',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyGenericCardTooLongButtonTitleFbJson,
  };
}

export function bdyGenericCardTooManyButtonsFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "generic"-tag and 4 buttons (one too many)',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyGenericCardTooManyButtonsFbJson,
  };
}

export function bdyButtonCardTooManyButtonsFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "button"-tag and 4 buttons (one too many)',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyButtonCardTooManyButtonsFbJson,
  };
}

export function bdyGenericCardMissingTitleSubtitleFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "generic"-tag while containing an image and button, but no title/subtitle',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyGenericCardMissingTitleSubtitleFbJson,
  };
}

export function bdyGenericCardMissingButtonFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "generic"-tag but is missing a button',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyGenericCardMissingButtonFbJson,
  };
}

export function bdyButtonCardMissingButtonFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    description: 'This JSON fails because the card has a "button"-tag but is missing a button',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: bdyButtonCardMissingButtonFbJson,
  };
}

export function bdyTitleOnlyFb(): ITestJson {
  return {
    richContentType: Types.BDY,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: true,
      [Channels.LINE]: false,
      [Channels.RBM]: true,
      [Channels.WEB]: true,
      [Channels.GBM]: undefined,
    },
    json: bdyTitleOnlyFbJson,
  };
}
