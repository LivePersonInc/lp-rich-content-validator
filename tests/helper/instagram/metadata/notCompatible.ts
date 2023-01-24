import { Channels, ITestJson, Types } from '../../../../src/types';
import socialMessagingEventInstagramNoSource from './json/socialMessagingEventInstagramNoSource.json';

export function missingSource(): ITestJson {
  return {
    richContentType: Types.MTD,
    description: 'Should fail as source is missing',
    channel: Channels.INSTAGRAM,
    channelCompatibility: {
      [Channels.INSTAGRAM]: false,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.WEB]: undefined,
      [Channels.GBM]: undefined,
    },
    json: socialMessagingEventInstagramNoSource,
  };
}
