import { Channels, ITestJson, Types } from '../../../../src/types';
import socialMessagingFb from './json/socialMessagingConvFb.json';
import allBasicPropertiesFb from './json/socialMessagingConvFbBasicProperties.json';
import SocialMessagingEventCCHide from './json/socialMessagingEventCCHide.json';
import SocialMessagingEventCommentToCommentDelete from './json/socialMessagingEventCommentToCommentDelete.json';
import SocialMessagingEventCommentToCommentHide from './json/socialMessagingEventCommentToCommentHide.json';
import SocialMessagingEventCommentToPost from './json/socialMessagingEventCommentToPost.json';
import SocialMessagingEventCommentToPostLike from './json/socialMessagingEventCommentToPostLike.json';
import SocialMessagingEventCommentToPostPublic from './json/socialMessagingEventCommentToPostPublic.json';
import SocialMessagingEventConsumerActionBlock from './json/socialMessagingEventConsumerActionBlock.json';
import SocialMessagingEventConsumerMention from './json/socialMessagingEventConsumerMention.json';
import SocialMessagingEventCP from './json/socialMessagingEventCP.json';
import SocialMessagingEventDirectMessage from './json/socialMessagingEventDirectMessage.json';
import SocialMessagingEventEnabledChannels from './json/socialMessagingEventEnabledChannels.json';
import SocialMessagingEventPrivateReplyToComment from './json/socialMessagingEventPrivateReplyToComment.json';
import SocialMessagingEventPrivateReplyToPost from './json/socialMessagingEventPrivateReplyToPost.json';

export function allRequiredProperties(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingFb,
  };
}

export function allBasicProperties(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: allBasicPropertiesFb,
  };
}

export function fbSocialMessagingEventCCHide(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventCCHide,
  };
}

export function fbSocialMessagingEventCommentToCommentDelete(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventCommentToCommentDelete,
  };
}

export function fbSocialMessagingEventCommentToCommentHide(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventCommentToCommentHide,
  };
}

export function fbSocialMessagingEventCommentToPost(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventCommentToPost,
  };
}

export function fbSocialMessagingEventCommentToPostLike(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventCommentToPostLike,
  };
}

export function fbSocialMessagingEventCommentToPostPublic(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventCommentToPostPublic,
  };
}

export function fbSocialMessagingEventConsumerActionBlock(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventConsumerActionBlock,
  };
}

export function fbSocialMessagingEventConsumerMention(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventConsumerMention,
  };
}

export function fbSocialMessagingEventCP(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventCP,
  };
}

export function fbSocialMessagingEventDirectMessage(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventDirectMessage,
  };
}

export function fbSocialMessagingEventEnabledChannels(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventEnabledChannels,
  };
}

export function fbSocialMessagingEventPrivateReplyToComment(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventPrivateReplyToComment,
  };
}

export function fbSocialMessagingEventPrivateReplyToPost(): ITestJson {
  return {
    richContentType: Types.MTD,
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: true,
      [Channels.TWITTER]: true,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: SocialMessagingEventPrivateReplyToPost,
  };
}
