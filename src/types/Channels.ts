export const Channels = {
  FB: 'facebook',
  RBM: 'rcsBusinessMessaging',
  LINE: 'line',
  ABC: 'appleBusinessChat',
  WEB: 'web',
  GBM: 'gbm',
  WA: 'whatsapp',
  VIBER: 'viber',
} as const;

type IChannels = typeof Channels;
export type Channel = IChannels[keyof IChannels];
