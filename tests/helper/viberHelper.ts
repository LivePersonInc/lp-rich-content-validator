import { Channels, ITestJson, Types } from '../../src/types';

const bdyVerticalCardViber = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This is a vertical card, valid for Viber containing all the usable elements of the channel.',
  channel: Channels.VIBER,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: true,
  },
  json: {
    type: 'vertical',
    tag: 'button',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
        ],
      },
    ],
  },
});

const bdyVerticalCardViberWithButtonStyling = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This is a vertical card, valid for Viber containing all the usable elements of the channel with custom button style',
  channel: Channels.VIBER,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: true,
  },
  json: {
    type: 'vertical',
    tag: 'button',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            style: {
              type: 'object',
              'background-color': '#000000',
              color: '#FFFFFF',
            },
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
        ],
      },
    ],
  },
});

const bdyVerticalCardViberOver7Elements = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This card contains over 7 elements hitting Vibers MAX Element count. Will FAIL',
  channel: Channels.VIBER,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: false,
  },
  json: {
    type: 'vertical',
    tag: 'button',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
          {
            type: 'button',
            tooltip: 'button one',
            title: 'button one',
            click: {
              actions: [{ type: 'publishText', text: 'iPhone X Added' }],
              metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
            },
          },
        ],
      },
    ],
  },
});

const bdyVerticalCarouselViber = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This is a carousel for Viber with 4 cards',
  channel: Channels.VIBER,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: true,
  },
  json: {
    type: 'carousel',
    padding: 10,
    elements: [
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyVerticalCarouselViberNoCards = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This is a carousel for Viber with 0 cards and should FAIL',
  channel: Channels.VIBER,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: false,
  },
  json: {
    type: 'carousel',
    padding: 10,
    elements: [],
  },
});

const bdyVerticalCarouselViber11Cards = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This is a carousel for Viber with 11 cards and should FAIL.',
  channel: Channels.VIBER,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
    [Channels.VIBER]: false,
  },
  json: {
    type: 'carousel',
    padding: 10,
    elements: [
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'button',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                tag: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000',
                tooltip: 'image',
              },
              { type: 'text', tag: 'title', text: 'Button example', tooltip: 'Button example' },
              {
                type: 'button',
                tooltip: 'button one',
                title: 'button one',
                click: { actions: [{ type: 'publishText', text: 'iPhone X Added' }] },
              },
              {
                type: 'button',
                tooltip: 'button two',
                title: 'button two',
                click: { actions: [{ type: 'publishText', text: 'button two pressed' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const expectedSchemaBodyViber = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'viberBodyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      oneOf: [
        {
          title: 'viberCard',
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          additionalProperties: false,
          required: ['type', 'elements'],
          properties: {
            type: {
              type: 'string',
              enum: ['vertical'],
              default: 'vertical',
              readonly: true,
            },
            tag: {
              type: 'string',
              default: 'generic',
              readonly: true,
            },
            alt: {
              type: 'string',
              description: 'This property has no effect in Viber, but is included in the schema to ensure the compatibility of Line Cards.',
            },
            elements: {
              type: 'array',
              items: {
                type: 'object',
                required: ['type', 'elements'],
                properties: {
                  type: {
                    type: 'string',
                    enum: ['vertical'],
                    default: 'vertical',
                    readonly: true,
                  },
                  elements: {
                    type: 'array',
                    maxItems: 7,
                    items: {
                      anyOf: [
                        {
                          title: 'viberImage',
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
                              maxLength: 2048,
                            },
                            tooltip: {
                              type: 'string',
                              maxLength: 256,
                            },
                          },
                        },
                        {
                          title: 'viberTitle',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          required: ['type', 'text'],
                          properties: {
                            type: {
                              type: 'string',
                              enum: ['text'],
                              default: 'text',
                              readonly: true,
                            },
                            tag: {
                              type: 'string',
                              default: 'title',
                              readonly: true,
                            },
                            text: {
                              type: 'string',
                              maxLength: 640,
                            },
                            tooltip: {
                              type: 'string',
                              maxLength: 256,
                            },
                            style: {
                              title: 'viberElementStyle',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              required: ['type'],
                              properties: {
                                'background-color': {
                                  type: 'string',
                                },
                                color: {
                                  type: 'string',
                                },
                              },
                            },
                          },
                        },
                        {
                          title: 'viberSubtitle',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          required: ['type', 'text'],
                          properties: {
                            type: {
                              type: 'string',
                              enum: ['text'],
                              default: 'text',
                              readonly: true,
                            },
                            tag: {
                              type: 'string',
                              default: 'subtitle',
                              readonly: true,
                            },
                            text: {
                              type: 'string',
                              maxLength: 640,
                            },
                            tooltip: {
                              type: 'string',
                              maxLength: 256,
                            },
                            style: {
                              title: 'viberElementStyle',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              required: ['type'],
                              properties: {
                                'background-color': {
                                  type: 'string',
                                },
                                color: {
                                  type: 'string',
                                },
                              },
                            },
                          },
                        },
                        {
                          title: 'viberButton',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          required: ['click', 'title', 'type'],
                          properties: {
                            type: {
                              type: 'string',
                              enum: ['button'],
                              default: 'button',
                              readonly: true,
                            },
                            tooltip: {
                              type: 'string',
                              maxLength: 256,
                            },
                            title: {
                              type: 'string',
                              maxLength: 25,
                            },
                            style: {
                              title: 'viberElementStyle',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              required: ['type'],
                              properties: {
                                'background-color': {
                                  type: 'string',
                                },
                                color: {
                                  type: 'string',
                                },
                              },
                            },
                            click: {
                              title: 'viberClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'viberClickMetadata',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  type: 'array',
                                  maxItems: 32,
                                  items: {},
                                },
                                actions: {
                                  maxItems: 1,
                                  type: 'array',
                                  items: {
                                    oneOf: [
                                      {
                                        title: 'viberClickActionPublishText',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
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
                                            maxLength: 256,
                                          },
                                        },
                                      },
                                      {
                                        title: 'viberClickActionLink',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'uri'],
                                        properties: {
                                          type: {
                                            type: 'string',
                                            enum: ['link'],
                                            default: 'link',
                                            readonly: true,
                                          },
                                          uri: {
                                            type: 'string',
                                            format: 'uri',
                                            maxLength: 1024,
                                          },
                                          name: {
                                            type: 'string',
                                            maxLength: 256,
                                          },
                                          target: {
                                            type: 'string',
                                            enum: ['self', 'blank', 'slideout'],
                                            default: 'self',
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
                      ],
                    },
                  },
                },
              },
            },
          },
        },
        {
          title: 'viberCarousel',
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          additionalProperties: false,
          properties: {
            type: {
              type: 'string',
              enum: ['carousel'],
              default: 'carousel',
              readonly: true,
            },
            tag: {
              type: 'string',
              default: 'generic',
              readonly: true,
            },
            padding: {
              type: 'number',
              default: 0,
              minimum: 0,
              maximum: 10,
            },
            alt: {
              type: 'string',
              maxLength: 2000,
              description:
                'This property has no effect in Viber, but is included in the schema to ensure the compatibility of Line Carousels.',
            },
            elements: {
              type: 'array',
              minItems: 2,
              maxItems: 10,
              items: {
                title: 'viberCard',
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                required: ['type', 'elements'],
                properties: {
                  type: {
                    type: 'string',
                    enum: ['vertical'],
                    default: 'vertical',
                    readonly: true,
                  },
                  tag: {
                    type: 'string',
                    default: 'generic',
                    readonly: true,
                  },
                  alt: {
                    type: 'string',
                    description:
                      'This property has no effect in Viber, but is included in the schema to ensure the compatibility of Line Cards.',
                  },
                  elements: {
                    type: 'array',
                    items: {
                      type: 'object',
                      required: ['type', 'elements'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['vertical'],
                          default: 'vertical',
                          readonly: true,
                        },
                        elements: {
                          type: 'array',
                          maxItems: 7,
                          items: {
                            anyOf: [
                              {
                                title: 'viberImage',
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
                                    maxLength: 2048,
                                  },
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                },
                              },
                              {
                                title: 'viberTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: ['text'],
                                    default: 'text',
                                    readonly: true,
                                  },
                                  tag: {
                                    type: 'string',
                                    default: 'title',
                                    readonly: true,
                                  },
                                  text: {
                                    type: 'string',
                                    maxLength: 640,
                                  },
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                  style: {
                                    title: 'viberElementStyle',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    type: 'object',
                                    required: ['type'],
                                    properties: {
                                      'background-color': {
                                        type: 'string',
                                      },
                                      color: {
                                        type: 'string',
                                      },
                                    },
                                  },
                                },
                              },
                              {
                                title: 'viberSubtitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: ['text'],
                                    default: 'text',
                                    readonly: true,
                                  },
                                  tag: {
                                    type: 'string',
                                    default: 'subtitle',
                                    readonly: true,
                                  },
                                  text: {
                                    type: 'string',
                                    maxLength: 640,
                                  },
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                  style: {
                                    title: 'viberElementStyle',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    type: 'object',
                                    required: ['type'],
                                    properties: {
                                      'background-color': {
                                        type: 'string',
                                      },
                                      color: {
                                        type: 'string',
                                      },
                                    },
                                  },
                                },
                              },
                              {
                                title: 'viberButton',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['click', 'title', 'type'],
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: ['button'],
                                    default: 'button',
                                    readonly: true,
                                  },
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                  title: {
                                    type: 'string',
                                    maxLength: 25,
                                  },
                                  style: {
                                    title: 'viberElementStyle',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    type: 'object',
                                    required: ['type'],
                                    properties: {
                                      'background-color': {
                                        type: 'string',
                                      },
                                      color: {
                                        type: 'string',
                                      },
                                    },
                                  },
                                  click: {
                                    title: 'viberClickOperations',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                      metadata: {
                                        title: 'viberClickMetadata',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'array',
                                        maxItems: 32,
                                        items: {},
                                      },
                                      actions: {
                                        maxItems: 1,
                                        type: 'array',
                                        items: {
                                          oneOf: [
                                            {
                                              title: 'viberClickActionPublishText',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              type: 'object',
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
                                                  maxLength: 256,
                                                },
                                              },
                                            },
                                            {
                                              title: 'viberClickActionLink',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              type: 'object',
                                              required: ['type', 'uri'],
                                              properties: {
                                                type: {
                                                  type: 'string',
                                                  enum: ['link'],
                                                  default: 'link',
                                                  readonly: true,
                                                },
                                                uri: {
                                                  type: 'string',
                                                  format: 'uri',
                                                  maxLength: 1024,
                                                },
                                                name: {
                                                  type: 'string',
                                                  maxLength: 256,
                                                },
                                                target: {
                                                  type: 'string',
                                                  enum: ['self', 'blank', 'slideout'],
                                                  default: 'self',
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
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          required: ['type', 'elements'],
        },
      ],
    },
  },
};

const expectedSchemaMetadataViber = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {},
  },
};

const expectedSchemaQuickrepliesViber = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'viberQuickReplyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      required: ['type', 'replies', 'itemsPerRow'],
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
          minItems: 1,
          maxItems: 11,
          items: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'viberQuickReplyButton',
            required: ['type', 'title', 'click'],
            properties: {
              type: {
                type: 'string',
                enum: ['button'],
                default: 'button',
                readonly: true,
              },
              tooltip: {
                type: 'string',
                maxLength: 256,
              },
              title: {
                type: 'string',
                maxLength: 25,
              },
              click: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                title: 'viberQuickReplyActions',
                type: 'object',
                required: ['actions'],
                properties: {
                  actions: {
                    type: 'array',
                    minItems: 1,
                    maxItems: 1,
                    items: {
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
                          maxLength: 256,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      additionalProperties: false,
    },
  },
};

export {
  bdyVerticalCardViber,
  bdyVerticalCardViberOver7Elements,
  bdyVerticalCarouselViber,
  bdyVerticalCarouselViberNoCards,
  bdyVerticalCarouselViber11Cards,
  bdyVerticalCardViberWithButtonStyling,
  expectedSchemaBodyViber,
  expectedSchemaMetadataViber,
  expectedSchemaQuickrepliesViber,
};
