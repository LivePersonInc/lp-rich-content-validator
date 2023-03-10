import { Channels, ITestJson, Types } from '../../src/types';

const bdyWhatsAppSingleProductJson = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This is a single product json structure for WhatsApp',
  channel: Channels.WA,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: undefined,
    [Channels.WA]: true,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    elements: [
      {
        type: 'text',
        text: 'Check out this amazing shoe!',
        tag: 'body',
      },
      {
        type: 'text',
        text: 'Cool Shoes',
        tag: 'footer',
      },
    ],
  },
});

const mdWhatsAppSingleProductMetadata = (): ITestJson => ({
  richContentType: Types.MTD,
  description: 'This is a single product metadata structure for WhatsApp',
  channel: Channels.WA,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: undefined,
    [Channels.WA]: true,
  },
  json: [
    {
      type: 'WhatsAppSingleProduct',
      catalogId: '675212570217815',
      productRetailerId: 'g1spbicunn',
    },
  ],
});

const bdyWhatsAppMultiProductJson = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This is a multiple product json structure for WhatsApp',
  channel: Channels.WA,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: undefined,
    [Channels.WA]: true,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    elements: [
      {
        type: 'text',
        text: 'Check out all these products!',
        tag: 'header',
      },
      {
        type: 'text',
        text: 'Take a peek at all these wonderous shoes that we have on sale!!',
        tag: 'body',
      },
      {
        type: 'text',
        text: 'Joshss Amazing Shoes',
        tag: 'footer',
      },
    ],
  },
});

const mdWhatsAppMultiProductMetadata = (): ITestJson => ({
  richContentType: Types.MTD,
  description: 'This is a multiple product metadata structure for WhatsApp',
  channel: Channels.WA,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: undefined,
    [Channels.WA]: true,
  },
  json: [
    {
      type: 'WhatsAppMultipleProduct',
      catalogId: '675212570217815',
      sections: [
        {
          title: 'Shoes',
          productIds: ['udnczhnl99', '820q5fve8j'],
        },
      ],
    },
  ],
});

const expectedSchemaBodyWhatsApp = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'whatsappBodyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      oneOf: [
        {
          title: 'whatsappCard',
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          additionalProperties: false,
          required: ['type', 'elements', 'tag'],
          properties: {
            type: {
              type: 'string',
              enum: ['vertical'],
              default: 'vertical',
              readonly: true,
            },
            alt: {
              minLength: 1,
              maxLength: 2000,
              type: 'string',
            },
            tag: {
              type: 'string',
              enum: ['generic'],
              default: 'generic',
              readonly: true,
            },
            elements: {
              oneOf: [
                {
                  title: 'whatsappCardElementOrder1Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 4,
                  maxItems: 8,
                  items: [
                    {
                      title: 'whatsappImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['image'],
                          default: 'image',
                          readonly: true,
                        },
                        url: {
                          type: 'string',
                          maxLength: 1000,
                          pattern: 'https.*',
                        },
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                    {
                      title: 'whatsappTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['title'],
                          default: 'title',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 100,
                        },
                      },
                    },
                    {
                      title: 'whatsappSubtitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['subtitle'],
                          default: 'subtitle',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 924,
                        },
                      },
                    },
                    {
                      title: 'whatsappFooter',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['footer'],
                          default: 'footer',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 60,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder2Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 3,
                  maxItems: 7,
                  items: [
                    {
                      title: 'whatsappImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['image'],
                          default: 'image',
                          readonly: true,
                        },
                        url: {
                          type: 'string',
                          maxLength: 1000,
                          pattern: 'https.*',
                        },
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                    {
                      title: 'whatsappTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['title'],
                          default: 'title',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 100,
                        },
                      },
                    },
                    {
                      title: 'whatsappSubtitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['subtitle'],
                          default: 'subtitle',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 924,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder3Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 2,
                  maxItems: 6,
                  items: [
                    {
                      title: 'whatsappImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['image'],
                          default: 'image',
                          readonly: true,
                        },
                        url: {
                          type: 'string',
                          maxLength: 1000,
                          pattern: 'https.*',
                        },
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                    {
                      title: 'whatsappTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['title'],
                          default: 'title',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 100,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder4Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 1,
                  maxItems: 5,
                  items: [
                    {
                      title: 'whatsappTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['title'],
                          default: 'title',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 100,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder5Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 2,
                  maxItems: 6,
                  items: [
                    {
                      title: 'whatsappTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['title'],
                          default: 'title',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 100,
                        },
                      },
                    },
                    {
                      title: 'whatsappSubtitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['subtitle'],
                          default: 'subtitle',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 924,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder6Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 1,
                  maxItems: 5,
                  items: [
                    {
                      title: 'whatsappSubtitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['subtitle'],
                          default: 'subtitle',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 924,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder7Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 2,
                  maxItems: 6,
                  items: [
                    {
                      title: 'whatsappImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['image'],
                          default: 'image',
                          readonly: true,
                        },
                        url: {
                          type: 'string',
                          maxLength: 1000,
                          pattern: 'https.*',
                        },
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                    {
                      title: 'whatsappSubtitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['subtitle'],
                          default: 'subtitle',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 924,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder8Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 3,
                  maxItems: 7,
                  items: [
                    {
                      title: 'whatsappImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['image'],
                          default: 'image',
                          readonly: true,
                        },
                        url: {
                          type: 'string',
                          maxLength: 1000,
                          pattern: 'https.*',
                        },
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                    {
                      title: 'whatsappSubtitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['subtitle'],
                          default: 'subtitle',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 924,
                        },
                      },
                    },
                    {
                      title: 'whatsappFooter',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['footer'],
                          default: 'footer',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 60,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappCardElementOrder9Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 3,
                  maxItems: 7,
                  items: [
                    {
                      title: 'whatsappImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['image'],
                          default: 'image',
                          readonly: true,
                        },
                        url: {
                          type: 'string',
                          maxLength: 1000,
                          pattern: 'https.*',
                        },
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                    {
                      title: 'whatsappTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['title'],
                          default: 'title',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 100,
                        },
                      },
                    },
                    {
                      title: 'whatsappFooter',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        tag: {
                          type: 'string',
                          enum: ['footer'],
                          default: 'footer',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 60,
                        },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['button'],
                        default: 'button',
                        readonly: true,
                      },
                      title: {
                        type: 'string',
                        maxLength: 20,
                      },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'whatsappQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: false,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 1,
                            items: {
                              oneOf: [
                                {
                                  title: 'whatsappPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: {
                                      type: 'string',
                                      enum: ['publishText'],
                                      default: 'publishText',
                                      readonly: true,
                                    },
                                    text: {
                                      type: 'string',
                                      maxLength: 20,
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  title: 'whatsappProductElementOrder',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 0,
                  maxItems: 3,
                  items: {
                    anyOf: [
                      {
                        title: 'whatsappHeader',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'object',
                        required: ['type', 'tag', 'text'],
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['text'],
                            default: 'text',
                            readonly: true,
                          },
                          tag: {
                            type: 'string',
                            enum: ['header'],
                            default: 'header',
                            readonly: true,
                          },
                          text: {
                            type: 'string',
                            maxLength: 60,
                          },
                        },
                      },
                      {
                        title: 'whatsappBody',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'object',
                        required: ['type', 'tag', 'text'],
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['text'],
                            default: 'text',
                            readonly: true,
                          },
                          tag: {
                            type: 'string',
                            enum: ['body'],
                            default: 'body',
                            readonly: true,
                          },
                          text: {
                            type: 'string',
                            maxLength: 500,
                          },
                        },
                      },
                      {
                        title: 'whatsappFooter',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'object',
                        required: ['type', 'tag', 'text'],
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['text'],
                            default: 'text',
                            readonly: true,
                          },
                          tag: {
                            type: 'string',
                            enum: ['footer'],
                            default: 'footer',
                            readonly: true,
                          },
                          text: {
                            type: 'string',
                            maxLength: 60,
                          },
                        },
                      },
                    ],
                    additionalItems: false,
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
};

const expectedSchemaMetadataWhatsApp = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'whatsappMetadataRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: ['array', 'null'],
      maxItems: 1,
      items: {
        oneOf: [
          {
            title: 'whatsappSingleProduct',
            description: 'WhatsApp Single Product Message Metadata',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['WhatsAppSingleProduct'],
                default: 'WhatsAppSingleProduct',
                type: 'string',
              },
              catalogId: {
                type: 'string',
                maxLength: 25,
              },
              productRetailerId: {
                type: 'string',
                maxLength: 50,
              },
            },
            required: ['type', 'catalogId', 'productRetailerId'],
          },
          {
            title: 'whatsappMultiProduct',
            description: 'WhatsApp Multiple Product Message Metadata',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['WhatsAppMultipleProduct'],
                default: 'WhatsAppMultipleProduct',
                type: 'string',
              },
              catalogId: {
                type: 'string',
                maxLength: 25,
              },
              sections: {
                type: 'array',
                minItems: 1,
                maxItems: 10,
                items: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      maxLength: 24,
                    },
                    productIds: {
                      minItems: 1,
                      maxItems: 30,
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                  required: ['title', 'productIds'],
                },
              },
            },
            required: ['type', 'catalogId', 'sections'],
          },
        ],
      },
    },
  },
};

const expectedSchemaQuickrepliesWhatsApp = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'whatsappQuickReplyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      required: ['type', 'itemsPerRow', 'replies'],
      properties: {
        type: {
          type: 'string',
          enum: ['quickReplies'],
          default: 'quickReplies',
          readonly: true,
        },
        itemsPerRow: {
          type: 'integer',
          min: 1,
          max: 8,
        },
        replies: {
          oneOf: [
            {
              minItems: 1,
              maxItems: 13,
              items: {
                type: 'object',
                $schema: 'http://json-schema.org/draft-07/schema#',
                title: 'whatsappButton',
                required: ['type', 'title', 'click'],
                additionalProperties: false,
                properties: {
                  type: {
                    type: 'string',
                    enum: ['button'],
                    default: 'button',
                    readonly: true,
                  },
                  title: {
                    type: 'string',
                    maxLength: 20,
                  },
                  click: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'whatsappQuickReplyActions',
                    required: ['actions'],
                    additionalProperties: false,
                    properties: {
                      actions: {
                        type: 'array',
                        minItems: 1,
                        maxItems: 1,
                        items: {
                          oneOf: [
                            {
                              title: 'whatsappPublishText',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              required: ['type', 'text'],
                              properties: {
                                type: {
                                  type: 'string',
                                  enum: ['publishText'],
                                  default: 'publishText',
                                  readonly: true,
                                },
                                text: {
                                  type: 'string',
                                  maxLength: 20,
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      },
      additionalProperties: false,
    },
  },
};

export {
  expectedSchemaBodyWhatsApp,
  expectedSchemaMetadataWhatsApp,
  expectedSchemaQuickrepliesWhatsApp,
  bdyWhatsAppSingleProductJson,
  mdWhatsAppSingleProductMetadata,
  bdyWhatsAppMultiProductJson,
  mdWhatsAppMultiProductMetadata,
};
