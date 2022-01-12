import { Channels, ITestJson, Types } from '../../../../src/types';
import qrTwoQuickRepliesFbJson from './json/twoReplies.json';
import qrFourQuickRepliesFbJson from './json/fourReplies.json';
import qrElevenQuickRepliesFbJson from './json/elevenReplies.json';
import qrQuickReply127CharsFbJson from './json/maxChars.json';
import qrQuickReplyStyledFbJson from './json/styled.json';

export function qrTwoQuickRepliesFb(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: qrTwoQuickRepliesFbJson,
  };
}

export function qrFourQuickRepliesFb(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: qrFourQuickRepliesFbJson,
  };
}

export function qrElevenQuickRepliesFb(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: qrElevenQuickRepliesFbJson,
  };
}

export function qrQuickReply127CharsFb(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: qrQuickReply127CharsFbJson,
  };
}

export function qrQuickReplyStyledFb(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: qrQuickReplyStyledFbJson,
  };
}
