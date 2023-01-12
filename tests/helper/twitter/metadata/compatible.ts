import { Channels, ITestJson, Types } from '../../../../src/types';
import socialMessagingTwitter from './json/socialMessagingConvTwitter.json';
import allBasicPropertiesTwitter from './json/socialMessagingConvTwitterBasicProperties.json';
import socialMessagingEventDataDirectMessage from './json/socialMessagingEventDataDirectMessage.json';
import socialMessagingEventDataReply from './json/socialMessagingEventDataReply.json';

export function allRequiredProperties(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.TWITTER,
    channelCompatibility: {
      [Channels.TWITTER]: true,
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingTwitter,
  };
}

export function allBasicProperties(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.TWITTER,
    channelCompatibility: {
      [Channels.TWITTER]: true,
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: allBasicPropertiesTwitter,
  };
}

export function twitterSocialMessagingEventDataReply(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.TWITTER,
    channelCompatibility: {
      [Channels.TWITTER]: true,
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingEventDataReply,
  };
}

export function twittersocialMessagingEventDataDirectMessage(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.TWITTER,
    channelCompatibility: {
      [Channels.TWITTER]: true,
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingEventDataDirectMessage,
  };
}
