import { Channels, ITestJson, Types } from '../../../../src/types';
import socialMessagingTwitterNoProfileName from './json/socialMessagingConvTwitterNoProfileName.json';

export function missingProfileName(): ITestJson {
  return {
    richContentType: Types.MTD,
    description: 'Should fail as profileName is missing',
    channel: Channels.TWITTER,
    channelCompatibility: {
      [Channels.TWITTER]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingTwitterNoProfileName,
  };
}
