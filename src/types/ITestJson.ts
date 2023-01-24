import { Type, Channel } from '.';

export interface ITestJson {
  richContentType: Type;
  /**
   * Property can be used for explanations if the JSON represents a special use case.
   * Might be useful for debugging purposes
   *
   * @type {string}
   * @memberof ITestJson
   */
  description?: string;

  /**
   * Property can be used for easier test debugging.
   *
   * @type {boolean}
   * @memberof ITestJson
   */
  debug?: boolean;
  channel: Channel;
  /**
   * Compatibility of the channels can have the following values:
   * true = should work on channel,
   * false = should not work on channel,
   * undefined = behavior on channel is not known,
   *
   * @memberof ITestJson
   */

  channelCompatibility: {
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known,
     */
    web?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    facebook?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    appleBusinessChat?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    line?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    rcsBusinessMessaging?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    gbm?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    viber?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    twitter?: boolean;
    /**
     * true = should work on channel,
     * false = should not work on channel,
     * undefined = behavior on channel is not known
     */
    instagram?: boolean;
  };
  json: object;
}
