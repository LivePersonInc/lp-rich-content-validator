export const Channels = {
  FB: 'facebook',
  RBM: 'rcsBusinessMessaging',
  LINE: 'line',
  ABC: 'appleBusinessChat',
  WEB: 'web',
  GBM: 'gbm',
  WA: 'whatsapp',
} as const;

type IChannels = typeof Channels;
export type Channel = IChannels[keyof IChannels];
