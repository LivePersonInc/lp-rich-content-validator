import * as qr from './quickreplies';
import * as c from './carousels';
import * as rc from './richCards';

export * from './export';
export const gbmJsonContainers = [
  ...qr.compatible,
  ...qr.notCompatible,
  ...c.compatible,
  ...c.notCompatible,
  ...rc.compatible,
  ...rc.notCompatible,
];
