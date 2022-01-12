import { Channel, Type } from '.';

export interface IExportConfig {
  type: Type;
  channel: Channel;
  declinePastDates?: boolean;
}
