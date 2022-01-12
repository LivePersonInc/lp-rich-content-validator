import { Channels, ITestJson, Types } from '../../../../src/types';
import qrFourteenQuickRepliesFbJson from './json/fourteenReplies.json';
import qrQuickReplyOver127CharsFbJson from './json/tooManyChars.json';

export function qrFourteenQuickRepliesFb(): ITestJson {
  return {
    richContentType: Types.QUR,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: qrFourteenQuickRepliesFbJson,
  };
}

export function qrQuickReplyOver127CharsFb(): ITestJson {
  return {
    richContentType: Types.QUR,
    description: 'Should fail on FB because a quick reply has more than 127chars',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: qrQuickReplyOver127CharsFbJson,
  };
}
