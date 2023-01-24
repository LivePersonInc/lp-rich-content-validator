import { Channels, ITestJson, Types } from '../../../../src/types';
import socialMessagingFbNoUserName from './json/socialMessagingConvFbNoUserName.json';

export function missingUserName(): ITestJson {
  return {
    richContentType: Types.MTD,
    description: 'Should fail as userName is missing',
    channel: Channels.FB,
    channelCompatibility: {
      [Channels.FB]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingFbNoUserName,
  };
}
