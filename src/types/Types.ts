export const Types = {
  BDY: 'body',
  MTD: 'metadata',
  QUR: 'quickReplies',
} as const;

type ITypes = typeof Types;
export type Type = ITypes[keyof ITypes];
