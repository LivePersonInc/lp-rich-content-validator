import * as qr from './quickreplies';
import * as c from './carousels';
import * as rc from './richCards';
import * as metaData from './metadata';

export * from './export';
export const fbJsonContainers = [
  ...qr.compatible,
  ...qr.notCompatible,
  ...c.compatible,
  ...c.notCompatible,
  ...rc.compatible,
  ...rc.notCompatible,
  ...metaData.compatible,
  ...metaData.notCompatible,
];
