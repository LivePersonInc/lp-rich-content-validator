import { Channels, ITestJson, Types } from '../../src/types';

const bdyButtonWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    title: 'New Japan',
    tooltip: 'Click me!',
    type: 'button',
    click: {
      actions: [
        {
          type: 'link',
          uri: 'https://www.njpw1972.com',
          target: 'blank',
        },
      ],
    },
  },
});

const bdyImageWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'image',
    url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
    caption: 'I am a Caption',
    click: {},
  },
});

const bdyMapWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'map',
    lo: 139.751819,
    la: 35.704276,
    click: {},
  },
});

const bdyTextWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'text',
    text: 'This is the New Japan Lion',
    tooltip: 'Roar!',
  },
});

const bdyHorizontalCardWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  description: 'JSON is failing on FB/RBM because a map component is used',
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'horizontal',
    elements: [
      {
        type: 'map',
        lo: 139.751819,
        la: 35.704276,
        click: {},
      },
      {
        type: 'text',
        text: 'This is the New Japan Lion',
        tooltip: 'Roar!',
      },
      {
        title: 'New Japan',
        type: 'button',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
              target: 'blank',
            },
          ],
        },
        tooltip: 'Click me!',
      },
      {
        type: 'map',
        lo: 139.751819,
        la: 35.704276,
        click: {},
      },
      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
        caption: 'I am a Caption',
        click: {},
      },
    ],
  },
});

const bdyVerticalCardWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    elements: [
      {
        type: 'text',
        text: 'This is the New Japan Lion',
        tooltip: 'Roar!',
      },
      {
        type: 'map',
        lo: 139.751819,
        la: 35.704276,
        click: {},
      },
      {
        title: 'New Japan',
        type: 'button',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
              target: 'blank',
            },
          ],
        },
        tooltip: 'Click me!',
      },

      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
        caption: 'I am a Caption',
        click: {},
      },
    ],
  },
});

const bdyCarouselBasicWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    padding: 10,
    type: 'carousel',
    elements: [
      {
        type: 'text',
        text: 'This is the New Japan Lion',
        tooltip: 'Roar!',
      },
      {
        title: 'New Japan',
        type: 'button',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
              target: 'blank',
            },
          ],
        },
        tooltip: 'Click me!',
      },
      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
        caption: 'I am a Caption',
        click: {},
      },
      {
        type: 'map',
        lo: 139.751819,
        la: 35.704276,
        click: {},
      },
    ],
  },
});

const bdyCarouselComplexWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    padding: 10,
    type: 'carousel',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            text: 'This is the New Japan Lion',
            tooltip: 'Roar!',
          },
          {
            title: 'New Japan',
            type: 'button',
            click: {
              actions: [
                {
                  type: 'link',
                  uri: 'https://www.njpw1972.com',
                  target: 'blank',
                },
              ],
            },
            tooltip: 'Click me!',
          },
          {
            type: 'image',
            url:
              'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
            caption: 'I am a Caption',
            click: {},
          },
          {
            type: 'map',
            lo: 139.751819,
            la: 35.704276,
            click: {},
          },
        ],
      },
      {
        type: 'horizontal',
        elements: [
          {
            type: 'text',
            text: 'This is the New Japan Lion',
            tooltip: 'Roar!',
          },
          {
            title: 'New Japan',
            type: 'button',
            click: {
              actions: [
                {
                  type: 'link',
                  uri: 'https://www.njpw1972.com',
                  target: 'blank',
                },
              ],
            },
            tooltip: 'Click me!',
          },
          {
            type: 'image',
            url:
              'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
            caption: 'I am a Caption',
            click: {},
          },
          {
            type: 'map',
            lo: 139.751819,
            la: 35.704276,
            click: {},
          },
        ],
      },
    ],
  },
});

const bdyMultipleChecklistComponentWeb = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'list',
    elements: [
      {
        type: 'text',
        text: 'Which wrestling leagues are you interested in?',
      },
      {
        type: 'sectionList',
        elements: [
          {
            type: 'section',
            sectionID: 'leagues',
            elements: [
              {
                type: 'text',
                text: '&#x1F449; choose all that apply',
              },
              {
                type: 'checklist',
                elements: [
                  {
                    type: 'checkbox',
                    text: 'NJPW',
                    borderLine: true,
                    borderColor: '#d4d4d5',
                    click: {
                      metadata: [
                        {
                          type: 'ExternalId',
                          id: 'ANOTHER_ONE_35',
                        },
                      ],
                      actions: [
                        {
                          type: 'checked',
                          publishText: 'NJPW',
                        },
                      ],
                    },
                  },
                  {
                    type: 'checkbox',
                    text: 'WWE',
                    borderLine: true,
                    borderColor: '#d4d4d5',
                    click: {
                      metadata: [
                        {
                          type: 'ExternalId',
                          id: 'ANOTHER_ONE_32',
                        },
                      ],
                      actions: [
                        {
                          type: 'checked',
                          publishText: 'WWE',
                        },
                      ],
                    },
                  },
                  {
                    type: 'checkbox',
                    text: 'ROH',
                    borderLine: true,
                    borderColor: '#d4d4d5',
                    click: {
                      metadata: [
                        {
                          type: 'ExternalId',
                          id: 'ANOTHER_ONE_36',
                        },
                      ],
                      actions: [
                        {
                          type: 'checked',
                          publishText: 'ROH',
                        },
                      ],
                    },
                  },
                  {
                    type: 'checkbox',
                    text: 'CMLL',
                    borderLine: true,
                    borderColor: '#d4d4d5',
                    click: {
                      metadata: [
                        {
                          type: 'ExternalId',
                          id: 'ANOTHER_ONE_36',
                        },
                      ],
                      actions: [
                        {
                          type: 'checked',
                          publishText: 'CMLL',
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'buttonList',
        elements: [
          {
            type: 'submitButton',
            title: 'Confirm Selection',
            disabled: false,
            click: {
              metadata: [
                {
                  type: 'ExternalId',
                  id: 'submissionID',
                },
              ],
              actions: [
                {
                  type: 'submitAsText',
                  submit: true,
                },
              ],
            },
          },
          {
            type: 'button',
            title: 'Back',
            click: {
              metadata: [
                {
                  type: 'ExternalId',
                  id: 'ANOTHER_ONE_20',
                },
              ],
              actions: [
                {
                  type: 'publishText',
                  text: 'User canceled selection',
                },
              ],
            },
          },
        ],
      },
    ],
  },
});

const qrQuickReplyStyledWeb = (): ITestJson => ({
  richContentType: Types.QUR,
  channel: Channels.WEB,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: false,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'quickReplies',
    itemsPerRow: 4,
    replies: [
      {
        title: 'I am a Quick Reply',
        tooltip: 'I am a Quick Reply Tooltip',
        type: 'button',
        click: {
          actions: [
            {
              type: 'publishText',
              text: 'I just sent a quickreply.',
            },
          ],
        },
        style: {
          bold: true,
          italic: true,
          color: '#ffffff',
          'background-color': '#e53232',
          'border-color': '#e53232',
          'border-radius': 10,
        },
      },
    ],
  },
});

const expectedSchemaBodyWeb = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      oneOf: [
        {
          oneOf: [
            {
              oneOf: [
                {
                  type: 'object',
                  additionalProperties: false,
                  title: 'text',
                  properties: {
                    type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                    text: { type: 'string', maxLength: 5000 },
                    rtl: { type: 'boolean' },
                    tooltip: { type: 'string', maxLength: 256 },
                    tag: { type: 'string', maxLength: 64 },
                    tagVersion: { type: 'string', maxLength: 64 },
                    style: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        'background-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-radius': { type: 'number' },
                        bold: { type: 'boolean' },
                        italic: { type: 'boolean' },
                        color: { type: 'string', format: 'color', maxLength: 256 },
                        size: { type: 'string', enum: ['small', 'medium', 'large'] },
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                    click: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        actions: {
                          type: 'array',
                          maxItems: 4,
                          items: {
                            oneOf: [
                              {
                                title: 'Publish Text',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                  text: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'text'],
                              },
                              {
                                title: 'navigate',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                  la: { type: 'number' },
                                  lo: { type: 'number' },
                                  name: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'la', 'lo'],
                              },
                              {
                                title: 'link',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                  uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                  name: { type: 'string', maxLength: 256 },
                                  ios: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  android: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  web: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                },
                                required: ['type', 'uri'],
                              },
                              {
                                title: 'Custom Action',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                  data: {
                                    type: 'array',
                                    maxItems: 10,
                                    items: {
                                      type: 'object',
                                      title: 'Key Value Pair',
                                      additionalProperties: false,
                                      properties: { key: { type: 'string', maxLength: 128 }, value: { type: 'string', maxLength: 2048 } },
                                      required: ['key'],
                                    },
                                  },
                                },
                                required: ['type'],
                              },
                            ],
                          },
                        },
                        metadata: { type: 'array' },
                      },
                    },
                  },
                  required: ['text'],
                },
                {
                  type: 'object',
                  title: 'image',
                  additionalProperties: false,
                  properties: {
                    type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                    caption: { type: 'string', maxLength: 128 },
                    url: { type: 'string', maxLength: 2048 },
                    rtl: { type: 'boolean' },
                    tooltip: { type: 'string', maxLength: 256 },
                    tag: { type: 'string', maxLength: 64 },
                    tagVersion: { type: 'string', maxLength: 64 },
                    style: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        'background-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-radius': { type: 'number' },
                        bold: { type: 'boolean' },
                        italic: { type: 'boolean' },
                        color: { type: 'string', format: 'color', maxLength: 256 },
                        size: { type: 'string', enum: ['small', 'medium', 'large'] },
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                    click: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        actions: {
                          type: 'array',
                          maxItems: 4,
                          items: {
                            oneOf: [
                              {
                                title: 'Publish Text',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                  text: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'text'],
                              },
                              {
                                title: 'navigate',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                  la: { type: 'number' },
                                  lo: { type: 'number' },
                                  name: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'la', 'lo'],
                              },
                              {
                                title: 'link',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                  uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                  name: { type: 'string', maxLength: 256 },
                                  ios: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  android: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  web: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                },
                                required: ['type', 'uri'],
                              },
                              {
                                title: 'Custom Action',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                  data: {
                                    type: 'array',
                                    maxItems: 10,
                                    items: {
                                      type: 'object',
                                      title: 'Key Value Pair',
                                      additionalProperties: false,
                                      properties: { key: { type: 'string', maxLength: 128 }, value: { type: 'string', maxLength: 2048 } },
                                      required: ['key'],
                                    },
                                  },
                                },
                                required: ['type'],
                              },
                            ],
                          },
                        },
                        metadata: { type: 'array' },
                      },
                    },
                  },
                  required: ['url'],
                },
                {
                  type: 'object',
                  additionalProperties: false,
                  title: 'button',
                  properties: {
                    type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                    title: { type: 'string', maxLength: 128 },
                    rtl: { type: 'boolean' },
                    tooltip: { type: 'string', maxLength: 256 },
                    tag: { type: 'string', maxLength: 64 },
                    tagVersion: { type: 'string', maxLength: 64 },
                    style: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        'background-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-radius': { type: 'number' },
                        bold: { type: 'boolean' },
                        italic: { type: 'boolean' },
                        color: { type: 'string', format: 'color', maxLength: 256 },
                        size: { type: 'string', enum: ['small', 'medium', 'large'] },
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                    click: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        actions: {
                          type: 'array',
                          maxItems: 4,
                          items: {
                            oneOf: [
                              {
                                title: 'Publish Text',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                  text: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'text'],
                              },
                              {
                                title: 'navigate',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                  la: { type: 'number' },
                                  lo: { type: 'number' },
                                  name: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'la', 'lo'],
                              },
                              {
                                title: 'link',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                  uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                  name: { type: 'string', maxLength: 256 },
                                  ios: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  android: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  web: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                },
                                required: ['type', 'uri'],
                              },
                              {
                                title: 'Custom Action',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                  data: {
                                    type: 'array',
                                    maxItems: 10,
                                    items: {
                                      type: 'object',
                                      title: 'Key Value Pair',
                                      additionalProperties: false,
                                      properties: { key: { type: 'string', maxLength: 128 }, value: { type: 'string', maxLength: 2048 } },
                                      required: ['key'],
                                    },
                                  },
                                },
                                required: ['type'],
                              },
                            ],
                          },
                        },
                        metadata: { type: 'array' },
                      },
                    },
                  },
                  required: ['title'],
                },
                {
                  type: 'object',
                  title: 'map',
                  additionalProperties: false,
                  properties: {
                    type: { type: 'string', enum: ['map'], default: 'map', readonly: true },
                    lo: { type: 'number' },
                    la: { type: 'number' },
                    rtl: { type: 'boolean' },
                    tooltip: { type: 'string', maxLength: 256 },
                    tag: { type: 'string', maxLength: 64 },
                    tagVersion: { type: 'string', maxLength: 64 },
                    style: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        'background-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-radius': { type: 'number' },
                        bold: { type: 'boolean' },
                        italic: { type: 'boolean' },
                        color: { type: 'string', format: 'color', maxLength: 256 },
                        size: { type: 'string', enum: ['small', 'medium', 'large'] },
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                    click: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        actions: {
                          type: 'array',
                          maxItems: 4,
                          items: {
                            oneOf: [
                              {
                                title: 'Publish Text',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                  text: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'text'],
                              },
                              {
                                title: 'navigate',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                  la: { type: 'number' },
                                  lo: { type: 'number' },
                                  name: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'la', 'lo'],
                              },
                              {
                                title: 'link',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                  uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                  name: { type: 'string', maxLength: 256 },
                                  ios: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  android: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  web: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                },
                                required: ['type', 'uri'],
                              },
                              {
                                title: 'Custom Action',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                  data: {
                                    type: 'array',
                                    maxItems: 10,
                                    items: {
                                      type: 'object',
                                      title: 'Key Value Pair',
                                      additionalProperties: false,
                                      properties: { key: { type: 'string', maxLength: 128 }, value: { type: 'string', maxLength: 2048 } },
                                      required: ['key'],
                                    },
                                  },
                                },
                                required: ['type'],
                              },
                            ],
                          },
                        },
                        metadata: { type: 'array' },
                      },
                    },
                  },
                  required: ['lo', 'la'],
                },
                {
                  type: 'object',
                  title: 'linkPreview',
                  additionalProperties: false,
                  properties: {
                    type: { type: 'string', enum: ['linkPreview'], default: 'linkPreview', readonly: true },
                    url: { type: 'string', maxLength: 2048 },
                    title: { type: 'string', maxLength: 128 },
                    rtl: { type: 'boolean' },
                    tooltip: { type: 'string', maxLength: 256 },
                    tag: { type: 'string', maxLength: 64 },
                    tagVersion: { type: 'string', maxLength: 64 },
                    style: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        'background-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-radius': { type: 'number' },
                        bold: { type: 'boolean' },
                        italic: { type: 'boolean' },
                        color: { type: 'string', format: 'color', maxLength: 256 },
                        size: { type: 'string', enum: ['small', 'medium', 'large'] },
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                    click: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        actions: {
                          type: 'array',
                          maxItems: 4,
                          items: {
                            oneOf: [
                              {
                                title: 'Publish Text',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                  text: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'text'],
                              },
                              {
                                title: 'navigate',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                  la: { type: 'number' },
                                  lo: { type: 'number' },
                                  name: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'la', 'lo'],
                              },
                              {
                                title: 'link',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                  uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                  name: { type: 'string', maxLength: 256 },
                                  ios: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  android: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  web: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                },
                                required: ['type', 'uri'],
                              },
                              {
                                title: 'Custom Action',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                  data: {
                                    type: 'array',
                                    maxItems: 10,
                                    items: {
                                      type: 'object',
                                      title: 'Key Value Pair',
                                      additionalProperties: false,
                                      properties: { key: { type: 'string', maxLength: 128 }, value: { type: 'string', maxLength: 2048 } },
                                      required: ['key'],
                                    },
                                  },
                                },
                                required: ['type'],
                              },
                            ],
                          },
                        },
                        metadata: { type: 'array' },
                      },
                    },
                  },
                  required: ['url'],
                },
                {
                  type: 'object',
                  title: 'template',
                  additionalProperties: false,
                  properties: {
                    type: { type: 'string', enum: ['template'], default: 'template', readonly: true },
                    templateType: { type: 'string', enum: ['quickReply'], default: 'quickReply', readonly: true },
                    title: { type: 'string', maxLength: 5000 },
                    resp: { type: 'array', maxItems: 32, minItems: 1, items: { type: 'string', maxLength: 128 } },
                    rtl: { type: 'boolean' },
                    tooltip: { type: 'string', maxLength: 256 },
                    tag: { type: 'string', maxLength: 64 },
                    tagVersion: { type: 'string', maxLength: 64 },
                    style: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        'background-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-radius': { type: 'number' },
                        bold: { type: 'boolean' },
                        italic: { type: 'boolean' },
                        color: { type: 'string', format: 'color', maxLength: 256 },
                        size: { type: 'string', enum: ['small', 'medium', 'large'] },
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                    click: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        actions: {
                          type: 'array',
                          maxItems: 4,
                          items: {
                            oneOf: [
                              {
                                title: 'Publish Text',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                  text: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'text'],
                              },
                              {
                                title: 'navigate',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                  la: { type: 'number' },
                                  lo: { type: 'number' },
                                  name: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'la', 'lo'],
                              },
                              {
                                title: 'link',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                  uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                  name: { type: 'string', maxLength: 256 },
                                  ios: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  android: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  web: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                },
                                required: ['type', 'uri'],
                              },
                              {
                                title: 'Custom Action',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                  data: {
                                    type: 'array',
                                    maxItems: 10,
                                    items: {
                                      type: 'object',
                                      title: 'Key Value Pair',
                                      additionalProperties: false,
                                      properties: { key: { type: 'string', maxLength: 128 }, value: { type: 'string', maxLength: 2048 } },
                                      required: ['key'],
                                    },
                                  },
                                },
                                required: ['type'],
                              },
                            ],
                          },
                        },
                        metadata: { type: 'array' },
                      },
                    },
                  },
                  required: ['templateType', 'title', 'resp'],
                },
              ],
            },
            {
              type: 'object',
              additionalProperties: false,
              title: 'horizontal',
              properties: {
                type: { type: 'string', enum: ['horizontal'], default: 'horizontal', readonly: true },
                tag: { type: 'string', maxLength: 64 },
                tagVersion: { type: 'string', maxLength: 64 },
                elements: { type: 'array', maxItems: 256, items: { $ref: '#/definitions/root' } },
                alt: { type: 'string', maxLength: 2000 },
              },
              required: ['type', 'elements'],
            },
            {
              type: 'object',
              additionalProperties: false,
              title: 'vertical',
              properties: {
                type: { type: 'string', enum: ['vertical'], default: 'vertical', readonly: true },
                tag: { type: 'string', maxLength: 64 },
                tagVersion: { type: 'string', maxLength: 64 },
                elements: { type: 'array', maxItems: 256, items: { $ref: '#/definitions/root' } },
                alt: { type: 'string', maxLength: 2000 },
                display: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    aspectRatio: { type: 'string', enum: ['rectangle', 'square', 'horizontal'] },
                    size: { type: 'string', enum: ['cover', 'contain', 'large', 'compact', 'tall', 'full'] },
                  },
                },
              },
              required: ['type', 'elements'],
            },
          ],
        },
        {
          type: 'object',
          additionalProperties: false,
          title: 'carousel',
          properties: {
            type: { type: 'string', enum: ['carousel'], default: 'carousel', readonly: true },
            tooltip: { type: 'string', maxLength: 256 },
            padding: { type: 'number', default: 0, minimum: 0, maximum: 10 },
            elements: {
              type: 'array',
              minItems: 2,
              maxItems: 10,
              items: {
                oneOf: [
                  {
                    oneOf: [
                      {
                        type: 'object',
                        additionalProperties: false,
                        title: 'text',
                        properties: {
                          type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                          text: { type: 'string', maxLength: 5000 },
                          rtl: { type: 'boolean' },
                          tooltip: { type: 'string', maxLength: 256 },
                          tag: { type: 'string', maxLength: 64 },
                          tagVersion: { type: 'string', maxLength: 64 },
                          style: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              'background-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-radius': { type: 'number' },
                              bold: { type: 'boolean' },
                              italic: { type: 'boolean' },
                              color: { type: 'string', format: 'color', maxLength: 256 },
                              size: { type: 'string', enum: ['small', 'medium', 'large'] },
                            },
                          },
                          alt: { type: 'string', maxLength: 2000 },
                          click: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              actions: {
                                type: 'array',
                                maxItems: 4,
                                items: {
                                  oneOf: [
                                    {
                                      title: 'Publish Text',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                        text: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'text'],
                                    },
                                    {
                                      title: 'navigate',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                        la: { type: 'number' },
                                        lo: { type: 'number' },
                                        name: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'la', 'lo'],
                                    },
                                    {
                                      title: 'link',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                        uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                        name: { type: 'string', maxLength: 256 },
                                        ios: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        android: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        web: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                      },
                                      required: ['type', 'uri'],
                                    },
                                    {
                                      title: 'Custom Action',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                        data: {
                                          type: 'array',
                                          maxItems: 10,
                                          items: {
                                            type: 'object',
                                            title: 'Key Value Pair',
                                            additionalProperties: false,
                                            properties: {
                                              key: { type: 'string', maxLength: 128 },
                                              value: { type: 'string', maxLength: 2048 },
                                            },
                                            required: ['key'],
                                          },
                                        },
                                      },
                                      required: ['type'],
                                    },
                                  ],
                                },
                              },
                              metadata: { type: 'array' },
                            },
                          },
                        },
                        required: ['text'],
                      },
                      {
                        type: 'object',
                        title: 'image',
                        additionalProperties: false,
                        properties: {
                          type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                          caption: { type: 'string', maxLength: 128 },
                          url: { type: 'string', maxLength: 2048 },
                          rtl: { type: 'boolean' },
                          tooltip: { type: 'string', maxLength: 256 },
                          tag: { type: 'string', maxLength: 64 },
                          tagVersion: { type: 'string', maxLength: 64 },
                          style: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              'background-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-radius': { type: 'number' },
                              bold: { type: 'boolean' },
                              italic: { type: 'boolean' },
                              color: { type: 'string', format: 'color', maxLength: 256 },
                              size: { type: 'string', enum: ['small', 'medium', 'large'] },
                            },
                          },
                          alt: { type: 'string', maxLength: 2000 },
                          click: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              actions: {
                                type: 'array',
                                maxItems: 4,
                                items: {
                                  oneOf: [
                                    {
                                      title: 'Publish Text',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                        text: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'text'],
                                    },
                                    {
                                      title: 'navigate',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                        la: { type: 'number' },
                                        lo: { type: 'number' },
                                        name: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'la', 'lo'],
                                    },
                                    {
                                      title: 'link',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                        uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                        name: { type: 'string', maxLength: 256 },
                                        ios: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        android: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        web: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                      },
                                      required: ['type', 'uri'],
                                    },
                                    {
                                      title: 'Custom Action',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                        data: {
                                          type: 'array',
                                          maxItems: 10,
                                          items: {
                                            type: 'object',
                                            title: 'Key Value Pair',
                                            additionalProperties: false,
                                            properties: {
                                              key: { type: 'string', maxLength: 128 },
                                              value: { type: 'string', maxLength: 2048 },
                                            },
                                            required: ['key'],
                                          },
                                        },
                                      },
                                      required: ['type'],
                                    },
                                  ],
                                },
                              },
                              metadata: { type: 'array' },
                            },
                          },
                        },
                        required: ['url'],
                      },
                      {
                        type: 'object',
                        additionalProperties: false,
                        title: 'button',
                        properties: {
                          type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                          title: { type: 'string', maxLength: 128 },
                          rtl: { type: 'boolean' },
                          tooltip: { type: 'string', maxLength: 256 },
                          tag: { type: 'string', maxLength: 64 },
                          tagVersion: { type: 'string', maxLength: 64 },
                          style: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              'background-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-radius': { type: 'number' },
                              bold: { type: 'boolean' },
                              italic: { type: 'boolean' },
                              color: { type: 'string', format: 'color', maxLength: 256 },
                              size: { type: 'string', enum: ['small', 'medium', 'large'] },
                            },
                          },
                          alt: { type: 'string', maxLength: 2000 },
                          click: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              actions: {
                                type: 'array',
                                maxItems: 4,
                                items: {
                                  oneOf: [
                                    {
                                      title: 'Publish Text',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                        text: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'text'],
                                    },
                                    {
                                      title: 'navigate',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                        la: { type: 'number' },
                                        lo: { type: 'number' },
                                        name: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'la', 'lo'],
                                    },
                                    {
                                      title: 'link',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                        uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                        name: { type: 'string', maxLength: 256 },
                                        ios: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        android: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        web: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                      },
                                      required: ['type', 'uri'],
                                    },
                                    {
                                      title: 'Custom Action',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                        data: {
                                          type: 'array',
                                          maxItems: 10,
                                          items: {
                                            type: 'object',
                                            title: 'Key Value Pair',
                                            additionalProperties: false,
                                            properties: {
                                              key: { type: 'string', maxLength: 128 },
                                              value: { type: 'string', maxLength: 2048 },
                                            },
                                            required: ['key'],
                                          },
                                        },
                                      },
                                      required: ['type'],
                                    },
                                  ],
                                },
                              },
                              metadata: { type: 'array' },
                            },
                          },
                        },
                        required: ['title'],
                      },
                      {
                        type: 'object',
                        title: 'map',
                        additionalProperties: false,
                        properties: {
                          type: { type: 'string', enum: ['map'], default: 'map', readonly: true },
                          lo: { type: 'number' },
                          la: { type: 'number' },
                          rtl: { type: 'boolean' },
                          tooltip: { type: 'string', maxLength: 256 },
                          tag: { type: 'string', maxLength: 64 },
                          tagVersion: { type: 'string', maxLength: 64 },
                          style: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              'background-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-radius': { type: 'number' },
                              bold: { type: 'boolean' },
                              italic: { type: 'boolean' },
                              color: { type: 'string', format: 'color', maxLength: 256 },
                              size: { type: 'string', enum: ['small', 'medium', 'large'] },
                            },
                          },
                          alt: { type: 'string', maxLength: 2000 },
                          click: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              actions: {
                                type: 'array',
                                maxItems: 4,
                                items: {
                                  oneOf: [
                                    {
                                      title: 'Publish Text',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                        text: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'text'],
                                    },
                                    {
                                      title: 'navigate',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                        la: { type: 'number' },
                                        lo: { type: 'number' },
                                        name: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'la', 'lo'],
                                    },
                                    {
                                      title: 'link',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                        uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                        name: { type: 'string', maxLength: 256 },
                                        ios: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        android: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        web: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                      },
                                      required: ['type', 'uri'],
                                    },
                                    {
                                      title: 'Custom Action',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                        data: {
                                          type: 'array',
                                          maxItems: 10,
                                          items: {
                                            type: 'object',
                                            title: 'Key Value Pair',
                                            additionalProperties: false,
                                            properties: {
                                              key: { type: 'string', maxLength: 128 },
                                              value: { type: 'string', maxLength: 2048 },
                                            },
                                            required: ['key'],
                                          },
                                        },
                                      },
                                      required: ['type'],
                                    },
                                  ],
                                },
                              },
                              metadata: { type: 'array' },
                            },
                          },
                        },
                        required: ['lo', 'la'],
                      },
                      {
                        type: 'object',
                        title: 'linkPreview',
                        additionalProperties: false,
                        properties: {
                          type: { type: 'string', enum: ['linkPreview'], default: 'linkPreview', readonly: true },
                          url: { type: 'string', maxLength: 2048 },
                          title: { type: 'string', maxLength: 128 },
                          rtl: { type: 'boolean' },
                          tooltip: { type: 'string', maxLength: 256 },
                          tag: { type: 'string', maxLength: 64 },
                          tagVersion: { type: 'string', maxLength: 64 },
                          style: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              'background-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-radius': { type: 'number' },
                              bold: { type: 'boolean' },
                              italic: { type: 'boolean' },
                              color: { type: 'string', format: 'color', maxLength: 256 },
                              size: { type: 'string', enum: ['small', 'medium', 'large'] },
                            },
                          },
                          alt: { type: 'string', maxLength: 2000 },
                          click: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              actions: {
                                type: 'array',
                                maxItems: 4,
                                items: {
                                  oneOf: [
                                    {
                                      title: 'Publish Text',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                        text: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'text'],
                                    },
                                    {
                                      title: 'navigate',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                        la: { type: 'number' },
                                        lo: { type: 'number' },
                                        name: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'la', 'lo'],
                                    },
                                    {
                                      title: 'link',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                        uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                        name: { type: 'string', maxLength: 256 },
                                        ios: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        android: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        web: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                      },
                                      required: ['type', 'uri'],
                                    },
                                    {
                                      title: 'Custom Action',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                        data: {
                                          type: 'array',
                                          maxItems: 10,
                                          items: {
                                            type: 'object',
                                            title: 'Key Value Pair',
                                            additionalProperties: false,
                                            properties: {
                                              key: { type: 'string', maxLength: 128 },
                                              value: { type: 'string', maxLength: 2048 },
                                            },
                                            required: ['key'],
                                          },
                                        },
                                      },
                                      required: ['type'],
                                    },
                                  ],
                                },
                              },
                              metadata: { type: 'array' },
                            },
                          },
                        },
                        required: ['url'],
                      },
                      {
                        type: 'object',
                        title: 'template',
                        additionalProperties: false,
                        properties: {
                          type: { type: 'string', enum: ['template'], default: 'template', readonly: true },
                          templateType: { type: 'string', enum: ['quickReply'], default: 'quickReply', readonly: true },
                          title: { type: 'string', maxLength: 5000 },
                          resp: { type: 'array', maxItems: 32, minItems: 1, items: { type: 'string', maxLength: 128 } },
                          rtl: { type: 'boolean' },
                          tooltip: { type: 'string', maxLength: 256 },
                          tag: { type: 'string', maxLength: 64 },
                          tagVersion: { type: 'string', maxLength: 64 },
                          style: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              'background-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-color': { type: 'string', format: 'color', maxLength: 256 },
                              'border-radius': { type: 'number' },
                              bold: { type: 'boolean' },
                              italic: { type: 'boolean' },
                              color: { type: 'string', format: 'color', maxLength: 256 },
                              size: { type: 'string', enum: ['small', 'medium', 'large'] },
                            },
                          },
                          alt: { type: 'string', maxLength: 2000 },
                          click: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              actions: {
                                type: 'array',
                                maxItems: 4,
                                items: {
                                  oneOf: [
                                    {
                                      title: 'Publish Text',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                        text: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'text'],
                                    },
                                    {
                                      title: 'navigate',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                        la: { type: 'number' },
                                        lo: { type: 'number' },
                                        name: { type: 'string', maxLength: 256 },
                                      },
                                      required: ['type', 'la', 'lo'],
                                    },
                                    {
                                      title: 'link',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                        uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                        name: { type: 'string', maxLength: 256 },
                                        ios: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        android: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        web: {
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                        },
                                        target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                      },
                                      required: ['type', 'uri'],
                                    },
                                    {
                                      title: 'Custom Action',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                        data: {
                                          type: 'array',
                                          maxItems: 10,
                                          items: {
                                            type: 'object',
                                            title: 'Key Value Pair',
                                            additionalProperties: false,
                                            properties: {
                                              key: { type: 'string', maxLength: 128 },
                                              value: { type: 'string', maxLength: 2048 },
                                            },
                                            required: ['key'],
                                          },
                                        },
                                      },
                                      required: ['type'],
                                    },
                                  ],
                                },
                              },
                              metadata: { type: 'array' },
                            },
                          },
                        },
                        required: ['templateType', 'title', 'resp'],
                      },
                    ],
                  },
                  {
                    type: 'object',
                    additionalProperties: false,
                    title: 'horizontal',
                    properties: {
                      type: { type: 'string', enum: ['horizontal'], default: 'horizontal', readonly: true },
                      tag: { type: 'string', maxLength: 64 },
                      tagVersion: { type: 'string', maxLength: 64 },
                      elements: { type: 'array', maxItems: 256, items: { $ref: '#/definitions/root' } },
                      alt: { type: 'string', maxLength: 2000 },
                    },
                    required: ['type', 'elements'],
                  },
                  {
                    type: 'object',
                    additionalProperties: false,
                    title: 'vertical',
                    properties: {
                      type: { type: 'string', enum: ['vertical'], default: 'vertical', readonly: true },
                      tag: { type: 'string', maxLength: 64 },
                      tagVersion: { type: 'string', maxLength: 64 },
                      elements: { type: 'array', maxItems: 256, items: { $ref: '#/definitions/root' } },
                      alt: { type: 'string', maxLength: 2000 },
                      display: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                          aspectRatio: { type: 'string', enum: ['rectangle', 'square', 'horizontal'] },
                          size: { type: 'string', enum: ['cover', 'contain', 'large', 'compact', 'tall', 'full'] },
                        },
                      },
                    },
                    required: ['type', 'elements'],
                  },
                ],
              },
            },
            alt: { type: 'string', maxLength: 2000 },
            display: {
              type: 'object',
              additionalProperties: false,
              properties: {
                aspectRatio: { type: 'string', enum: ['rectangle', 'square', 'horizontal'] },
                size: { type: 'string', enum: ['cover', 'contain', 'large', 'compact', 'tall', 'full'] },
              },
            },
          },
          required: ['type', 'elements'],
        },
        {
          type: 'object',
          additionalProperties: false,
          title: 'list',
          properties: {
            type: { type: 'string', enum: ['list'], default: 'list', readonly: true },
            tooltip: { type: 'string', maxLength: 256 },
            elements: {
              type: 'array',
              maxItems: 3,
              minItems: 3,
              items: [
                {
                  type: 'object',
                  additionalProperties: false,
                  title: 'text',
                  properties: {
                    type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                    text: { type: 'string', maxLength: 5000 },
                    rtl: { type: 'boolean' },
                    tooltip: { type: 'string', maxLength: 256 },
                    tag: { type: 'string', maxLength: 64 },
                    tagVersion: { type: 'string', maxLength: 64 },
                    style: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        'background-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-color': { type: 'string', format: 'color', maxLength: 256 },
                        'border-radius': { type: 'number' },
                        bold: { type: 'boolean' },
                        italic: { type: 'boolean' },
                        color: { type: 'string', format: 'color', maxLength: 256 },
                        size: { type: 'string', enum: ['small', 'medium', 'large'] },
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                    click: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        actions: {
                          type: 'array',
                          maxItems: 4,
                          items: {
                            oneOf: [
                              {
                                title: 'Publish Text',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                  text: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'text'],
                              },
                              {
                                title: 'navigate',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                  la: { type: 'number' },
                                  lo: { type: 'number' },
                                  name: { type: 'string', maxLength: 256 },
                                },
                                required: ['type', 'la', 'lo'],
                              },
                              {
                                title: 'link',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                  uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                  name: { type: 'string', maxLength: 256 },
                                  ios: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  android: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  web: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                  },
                                  target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                },
                                required: ['type', 'uri'],
                              },
                              {
                                title: 'Custom Action',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                  data: {
                                    type: 'array',
                                    maxItems: 10,
                                    items: {
                                      type: 'object',
                                      title: 'Key Value Pair',
                                      additionalProperties: false,
                                      properties: { key: { type: 'string', maxLength: 128 }, value: { type: 'string', maxLength: 2048 } },
                                      required: ['key'],
                                    },
                                  },
                                },
                                required: ['type'],
                              },
                            ],
                          },
                        },
                        metadata: { type: 'array' },
                      },
                    },
                  },
                  required: ['text'],
                },
                {
                  type: 'object',
                  additionalProperties: false,
                  title: 'sectionList',
                  properties: {
                    type: { type: 'string', enum: ['sectionList'], default: 'sectionList', readonly: true },
                    tooltip: { type: 'string', maxLength: 256 },
                    elements: {
                      type: 'array',
                      minItems: 1,
                      maxItems: 256,
                      items: {
                        type: 'object',
                        additionalProperties: false,
                        title: 'section',
                        properties: {
                          type: { type: 'string', enum: ['section'], default: 'section', readonly: true },
                          tooltip: { type: 'string', maxLength: 256 },
                          padding: { type: 'number', default: 0, minimum: 0, maximum: 10 },
                          sectionID: { type: 'string', maxLength: 256 },
                          elements: {
                            oneOf: [
                              {
                                type: 'array',
                                minItems: 1,
                                maxItems: 1,
                                items: [
                                  {
                                    type: 'object',
                                    additionalProperties: false,
                                    title: 'checklist',
                                    properties: {
                                      type: { type: 'string', enum: ['checklist'], default: 'checklist', readonly: true },
                                      tooltip: { type: 'string', maxLength: 256 },
                                      padding: { type: 'number', default: 0, minimum: 0, maximum: 10 },
                                      elements: {
                                        type: 'array',
                                        minItems: 2,
                                        maxItems: 256,
                                        items: {
                                          type: 'object',
                                          title: 'checkbox',
                                          additionalProperties: false,
                                          properties: {
                                            type: { type: 'string', enum: ['checkbox'], default: 'checkbox', readonly: true },
                                            text: { type: 'string', maxLength: 5000 },
                                            rtl: { type: 'boolean' },
                                            tooltip: { type: 'string', maxLength: 256 },
                                            tag: { type: 'string', maxLength: 64 },
                                            tagVersion: { type: 'string', maxLength: 64 },
                                            style: {
                                              type: 'object',
                                              additionalProperties: false,
                                              properties: {
                                                'background-color': { type: 'string', format: 'color', maxLength: 256 },
                                                'border-color': { type: 'string', format: 'color', maxLength: 256 },
                                                'border-radius': { type: 'number' },
                                                bold: { type: 'boolean' },
                                                italic: { type: 'boolean' },
                                                color: { type: 'string', format: 'color', maxLength: 256 },
                                                size: { type: 'string', enum: ['small', 'medium', 'large'] },
                                              },
                                            },
                                            borderLine: { type: 'boolean', default: true },
                                            borderColor: { type: 'string', format: 'color', maxLength: 256 },
                                            click: {
                                              type: 'object',
                                              additionalProperties: false,
                                              properties: {
                                                actions: {
                                                  type: 'array',
                                                  maxItems: 4,
                                                  items: {
                                                    title: 'checked',
                                                    type: 'object',
                                                    additionalProperties: false,
                                                    properties: {
                                                      type: { type: 'string', enum: ['checked'], default: 'checked', readonly: true },
                                                      publishText: { type: 'string', maxLength: 250 },
                                                    },
                                                    required: ['type', 'publishText'],
                                                  },
                                                },
                                                metadata: { type: 'array' },
                                              },
                                            },
                                          },
                                          required: ['type', 'text', 'click'],
                                        },
                                      },
                                      alt: { type: 'string', maxLength: 2000 },
                                    },
                                    required: ['type', 'elements'],
                                  },
                                ],
                              },
                              {
                                type: 'array',
                                minItems: 2,
                                maxItems: 2,
                                items: [
                                  {
                                    type: 'object',
                                    additionalProperties: false,
                                    title: 'text',
                                    properties: {
                                      type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                      text: { type: 'string', maxLength: 5000 },
                                      rtl: { type: 'boolean' },
                                      tooltip: { type: 'string', maxLength: 256 },
                                      tag: { type: 'string', maxLength: 64 },
                                      tagVersion: { type: 'string', maxLength: 64 },
                                      style: {
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                          'background-color': { type: 'string', format: 'color', maxLength: 256 },
                                          'border-color': { type: 'string', format: 'color', maxLength: 256 },
                                          'border-radius': { type: 'number' },
                                          bold: { type: 'boolean' },
                                          italic: { type: 'boolean' },
                                          color: { type: 'string', format: 'color', maxLength: 256 },
                                          size: { type: 'string', enum: ['small', 'medium', 'large'] },
                                        },
                                      },
                                      alt: { type: 'string', maxLength: 2000 },
                                      click: {
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                          actions: {
                                            type: 'array',
                                            maxItems: 4,
                                            items: {
                                              oneOf: [
                                                {
                                                  title: 'Publish Text',
                                                  type: 'object',
                                                  additionalProperties: false,
                                                  properties: {
                                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                                    text: { type: 'string', maxLength: 256 },
                                                  },
                                                  required: ['type', 'text'],
                                                },
                                                {
                                                  title: 'navigate',
                                                  type: 'object',
                                                  additionalProperties: false,
                                                  properties: {
                                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                                    la: { type: 'number' },
                                                    lo: { type: 'number' },
                                                    name: { type: 'string', maxLength: 256 },
                                                  },
                                                  required: ['type', 'la', 'lo'],
                                                },
                                                {
                                                  title: 'link',
                                                  type: 'object',
                                                  additionalProperties: false,
                                                  properties: {
                                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                                    uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                                    name: { type: 'string', maxLength: 256 },
                                                    ios: {
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                                    },
                                                    android: {
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                                    },
                                                    web: {
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                                    },
                                                    target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                                  },
                                                  required: ['type', 'uri'],
                                                },
                                                {
                                                  title: 'Custom Action',
                                                  type: 'object',
                                                  additionalProperties: false,
                                                  properties: {
                                                    type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                                    data: {
                                                      type: 'array',
                                                      maxItems: 10,
                                                      items: {
                                                        type: 'object',
                                                        title: 'Key Value Pair',
                                                        additionalProperties: false,
                                                        properties: {
                                                          key: { type: 'string', maxLength: 128 },
                                                          value: { type: 'string', maxLength: 2048 },
                                                        },
                                                        required: ['key'],
                                                      },
                                                    },
                                                  },
                                                  required: ['type'],
                                                },
                                              ],
                                            },
                                          },
                                          metadata: { type: 'array' },
                                        },
                                      },
                                    },
                                    required: ['text'],
                                  },
                                  {
                                    type: 'object',
                                    additionalProperties: false,
                                    title: 'checklist',
                                    properties: {
                                      type: { type: 'string', enum: ['checklist'], default: 'checklist', readonly: true },
                                      tooltip: { type: 'string', maxLength: 256 },
                                      padding: { type: 'number', default: 0, minimum: 0, maximum: 10 },
                                      elements: {
                                        type: 'array',
                                        minItems: 2,
                                        maxItems: 256,
                                        items: {
                                          type: 'object',
                                          title: 'checkbox',
                                          additionalProperties: false,
                                          properties: {
                                            type: { type: 'string', enum: ['checkbox'], default: 'checkbox', readonly: true },
                                            text: { type: 'string', maxLength: 5000 },
                                            rtl: { type: 'boolean' },
                                            tooltip: { type: 'string', maxLength: 256 },
                                            tag: { type: 'string', maxLength: 64 },
                                            tagVersion: { type: 'string', maxLength: 64 },
                                            style: {
                                              type: 'object',
                                              additionalProperties: false,
                                              properties: {
                                                'background-color': { type: 'string', format: 'color', maxLength: 256 },
                                                'border-color': { type: 'string', format: 'color', maxLength: 256 },
                                                'border-radius': { type: 'number' },
                                                bold: { type: 'boolean' },
                                                italic: { type: 'boolean' },
                                                color: { type: 'string', format: 'color', maxLength: 256 },
                                                size: { type: 'string', enum: ['small', 'medium', 'large'] },
                                              },
                                            },
                                            borderLine: { type: 'boolean', default: true },
                                            borderColor: { type: 'string', format: 'color', maxLength: 256 },
                                            click: {
                                              type: 'object',
                                              additionalProperties: false,
                                              properties: {
                                                actions: {
                                                  type: 'array',
                                                  maxItems: 4,
                                                  items: {
                                                    title: 'checked',
                                                    type: 'object',
                                                    additionalProperties: false,
                                                    properties: {
                                                      type: { type: 'string', enum: ['checked'], default: 'checked', readonly: true },
                                                      publishText: { type: 'string', maxLength: 250 },
                                                    },
                                                    required: ['type', 'publishText'],
                                                  },
                                                },
                                                metadata: { type: 'array' },
                                              },
                                            },
                                          },
                                          required: ['type', 'text', 'click'],
                                        },
                                      },
                                      alt: { type: 'string', maxLength: 2000 },
                                    },
                                    required: ['type', 'elements'],
                                  },
                                ],
                              },
                            ],
                          },
                          alt: { type: 'string', maxLength: 2000 },
                        },
                        required: ['type', 'elements', 'sectionID'],
                      },
                    },
                    alt: { type: 'string', maxLength: 2000 },
                  },
                  required: ['type', 'elements'],
                },
                {
                  type: 'object',
                  additionalProperties: false,
                  title: 'buttonList',
                  properties: {
                    type: { type: 'string', enum: ['buttonList'], default: 'buttonList', readonly: true },
                    tooltip: { type: 'string', maxLength: 256 },
                    padding: { type: 'number', default: 0, minimum: 0, maximum: 10 },
                    elements: {
                      type: 'array',
                      minItems: 1,
                      maxItems: 2,
                      items: [
                        {
                          type: 'object',
                          additionalProperties: false,
                          title: 'submitButton',
                          properties: {
                            type: { type: 'string', enum: ['submitButton'], default: 'submitButton', readonly: true },
                            title: { type: 'string', maxLength: 128 },
                            rtl: { type: 'boolean' },
                            tooltip: { type: 'string', maxLength: 256 },
                            tag: { type: 'string', maxLength: 64 },
                            tagVersion: { type: 'string', maxLength: 64 },
                            style: {
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                'background-color': { type: 'string', format: 'color', maxLength: 256 },
                                'border-color': { type: 'string', format: 'color', maxLength: 256 },
                                'border-radius': { type: 'number' },
                                bold: { type: 'boolean' },
                                italic: { type: 'boolean' },
                                color: { type: 'string', format: 'color', maxLength: 256 },
                                size: { type: 'string', enum: ['small', 'medium', 'large'] },
                              },
                            },
                            alt: { type: 'string', maxLength: 2000 },
                            disabled: { type: 'boolean', default: false },
                            click: {
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                actions: {
                                  type: 'array',
                                  maxItems: 4,
                                  items: {
                                    title: 'Submit As Text',
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                      type: { type: 'string', enum: ['submitAsText'], default: 'submitAsText', readonly: true },
                                      submit: { type: 'boolean', default: false },
                                    },
                                    required: ['type', 'submit'],
                                  },
                                },
                                metadata: { type: 'array' },
                              },
                            },
                          },
                          required: ['type', 'title', 'click'],
                        },
                        {
                          anyOf: [
                            {
                              type: 'object',
                              additionalProperties: false,
                              title: 'button',
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                title: { type: 'string', maxLength: 128 },
                                rtl: { type: 'boolean' },
                                tooltip: { type: 'string', maxLength: 256 },
                                tag: { type: 'string', maxLength: 64 },
                                tagVersion: { type: 'string', maxLength: 64 },
                                style: {
                                  type: 'object',
                                  additionalProperties: false,
                                  properties: {
                                    'background-color': { type: 'string', format: 'color', maxLength: 256 },
                                    'border-color': { type: 'string', format: 'color', maxLength: 256 },
                                    'border-radius': { type: 'number' },
                                    bold: { type: 'boolean' },
                                    italic: { type: 'boolean' },
                                    color: { type: 'string', format: 'color', maxLength: 256 },
                                    size: { type: 'string', enum: ['small', 'medium', 'large'] },
                                  },
                                },
                                alt: { type: 'string', maxLength: 2000 },
                                click: {
                                  type: 'object',
                                  additionalProperties: false,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      maxItems: 4,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'Publish Text',
                                            type: 'object',
                                            additionalProperties: false,
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                            required: ['type', 'text'],
                                          },
                                          {
                                            title: 'navigate',
                                            type: 'object',
                                            additionalProperties: false,
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                              name: { type: 'string', maxLength: 256 },
                                            },
                                            required: ['type', 'la', 'lo'],
                                          },
                                          {
                                            title: 'link',
                                            type: 'object',
                                            additionalProperties: false,
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', format: 'uri', maxLength: 1024 },
                                              name: { type: 'string', maxLength: 256 },
                                              ios: {
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                              },
                                              android: {
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                              },
                                              web: {
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: { uri: { type: 'string', format: 'uri', maxLength: 1024 } },
                                              },
                                              target: { type: 'string', enum: ['self', 'blank', 'slideout'], default: 'self' },
                                            },
                                            required: ['type', 'uri'],
                                          },
                                          {
                                            title: 'Custom Action',
                                            type: 'object',
                                            additionalProperties: false,
                                            properties: {
                                              type: { type: 'string', enum: ['custom'], default: 'custom', readonly: true },
                                              data: {
                                                type: 'array',
                                                maxItems: 10,
                                                items: {
                                                  type: 'object',
                                                  title: 'Key Value Pair',
                                                  additionalProperties: false,
                                                  properties: {
                                                    key: { type: 'string', maxLength: 128 },
                                                    value: { type: 'string', maxLength: 2048 },
                                                  },
                                                  required: ['key'],
                                                },
                                              },
                                            },
                                            required: ['type'],
                                          },
                                        ],
                                      },
                                    },
                                    metadata: { type: 'array' },
                                  },
                                },
                              },
                              required: ['title'],
                            },
                          ],
                        },
                      ],
                    },
                    alt: { type: 'string', maxLength: 2000 },
                  },
                  required: ['type', 'elements'],
                },
              ],
            },
            alt: { type: 'string', maxLength: 2000 },
          },
          required: ['type', 'elements'],
        },
      ],
    },
  },
};

const expectedSchemaMetadataWeb = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {},
  },
};

const expectedSchemaQuickrepliesWeb = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      type: 'object',
      title: 'quickReplies',
      additionalProperties: false,
      properties: {
        type: {
          type: 'string',
          enum: ['quickReplies'],
          default: 'quickReplies',
          readonly: true,
        },
        itemsPerRow: {
          type: 'number',
          min: 1,
          max: 8,
        },
        replies: {
          type: 'array',
          minItems: 1,
          maxItems: 24,
          items: {
            type: 'object',
            additionalProperties: false,
            title: 'button',
            properties: {
              type: {
                type: 'string',
                enum: ['button'],
                default: 'button',
                readonly: true,
              },
              title: {
                type: 'string',
                maxLength: 128,
              },
              rtl: {
                type: 'boolean',
              },
              tooltip: {
                type: 'string',
                maxLength: 256,
              },
              tag: {
                type: 'string',
                maxLength: 64,
              },
              tagVersion: {
                type: 'string',
                maxLength: 64,
              },
              style: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  'background-color': {
                    type: 'string',
                    format: 'color',
                    maxLength: 256,
                  },
                  'border-color': {
                    type: 'string',
                    format: 'color',
                    maxLength: 256,
                  },
                  'border-radius': {
                    type: 'number',
                  },
                  bold: {
                    type: 'boolean',
                  },
                  italic: {
                    type: 'boolean',
                  },
                  color: {
                    type: 'string',
                    format: 'color',
                    maxLength: 256,
                  },
                  size: {
                    type: 'string',
                    enum: ['small', 'medium', 'large'],
                  },
                },
              },
              alt: {
                type: 'string',
                maxLength: 2000,
              },
              click: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  actions: {
                    type: 'array',
                    maxItems: 4,
                    items: {
                      oneOf: [
                        {
                          title: 'Publish Text',
                          type: 'object',
                          additionalProperties: false,
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
                          required: ['type', 'text'],
                        },
                        {
                          title: 'navigate',
                          type: 'object',
                          additionalProperties: false,
                          properties: {
                            type: {
                              type: 'string',
                              enum: ['navigate'],
                              default: 'navigate',
                              readonly: true,
                            },
                            la: {
                              type: 'number',
                            },
                            lo: {
                              type: 'number',
                            },
                            name: {
                              type: 'string',
                              maxLength: 256,
                            },
                          },
                          required: ['type', 'la', 'lo'],
                        },
                        {
                          title: 'link',
                          type: 'object',
                          additionalProperties: false,
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
                            ios: {
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                uri: {
                                  type: 'string',
                                  format: 'uri',
                                  maxLength: 1024,
                                },
                              },
                            },
                            android: {
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                uri: {
                                  type: 'string',
                                  format: 'uri',
                                  maxLength: 1024,
                                },
                              },
                            },
                            web: {
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                uri: {
                                  type: 'string',
                                  format: 'uri',
                                  maxLength: 1024,
                                },
                              },
                            },
                            target: {
                              type: 'string',
                              enum: ['self', 'blank', 'slideout'],
                              default: 'self',
                            },
                          },
                          required: ['type', 'uri'],
                        },
                        {
                          title: 'Custom Action',
                          type: 'object',
                          additionalProperties: false,
                          properties: {
                            type: {
                              type: 'string',
                              enum: ['custom'],
                              default: 'custom',
                              readonly: true,
                            },
                            data: {
                              type: 'array',
                              maxItems: 10,
                              items: {
                                type: 'object',
                                title: 'Key Value Pair',
                                additionalProperties: false,
                                properties: {
                                  key: {
                                    type: 'string',
                                    maxLength: 128,
                                  },
                                  value: {
                                    type: 'string',
                                    maxLength: 2048,
                                  },
                                },
                                required: ['key'],
                              },
                            },
                          },
                          required: ['type'],
                        },
                      ],
                    },
                  },
                  metadata: {
                    type: 'array',
                  },
                },
              },
            },
            required: ['title'],
          },
        },
      },
      required: ['type', 'itemsPerRow', 'replies'],
    },
  },
};

export {
  qrQuickReplyStyledWeb,
  bdyMultipleChecklistComponentWeb,
  bdyCarouselComplexWeb,
  bdyCarouselBasicWeb,
  bdyVerticalCardWeb,
  bdyButtonWeb,
  bdyImageWeb,
  bdyMapWeb,
  bdyTextWeb,
  bdyHorizontalCardWeb,
  expectedSchemaBodyWeb,
  expectedSchemaMetadataWeb,
  expectedSchemaQuickrepliesWeb,
};
