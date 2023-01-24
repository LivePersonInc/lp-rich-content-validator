import { Channels, ITestJson, Types } from '../../../../src/types';
import socialMessagingEventDataInstagram from './json/socialMessagingEventDataInstagram.json';

export function socialMessagingEventData(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.INSTAGRAM,
    channelCompatibility: {
      [Channels.INSTAGRAM]: true,
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingEventDataInstagram,
  };
}
