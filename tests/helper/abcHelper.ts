import { Channels, ITestJson, Types } from '../../src/types';

const bdyVerticalCardAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
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
    tag: 'richLink',
    elements: [
      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
      },
      {
        type: 'button',
        title: 'New Japans Homepage',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
            },
          ],
        },
      },
    ],
  },
});

const bdyVerticalCardOnlyImageAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: false,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'richLink',
    elements: [
      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
      },
    ],
  },
});

const bdyVerticalCardOnlyButtonAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
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
    tag: 'richLink',
    elements: [
      {
        type: 'button',
        title: 'New Japans Homepage',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
            },
          ],
        },
      },
    ],
  },
});

const bdyVerticalCardTwoButtonsAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: false,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'richLink',
    elements: [
      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
      },
      {
        type: 'button',
        title: 'New Japans Homepage',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
            },
          ],
        },
      },
      {
        type: 'button',
        title: 'New Japans Homepage',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
            },
          ],
        },
      },
    ],
  },
});

const bdyVerticalCardTwoImagesAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: false,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'richLink',
    elements: [
      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
      },
      {
        type: 'image',
        url:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
      },
      {
        type: 'button',
        title: 'New Japans Homepage',
        click: {
          actions: [
            {
              type: 'link',
              uri: 'https://www.njpw1972.com',
            },
          ],
        },
      },
    ],
  },
});

const bdyListPickerAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: false,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            text: 'Choose your Lion!',
            tag: 'title',
            tooltip: 'Choose your Lion',
            style: {
              bold: true,
              size: 'large',
            },
          },
          {
            type: 'text',
            text: 'Click to open',
            tag: 'subtitle',
            tooltip: 'SUBTITLE TOOLTIP',
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                tooltip: 'Roar Image',
              },
              {
                type: 'vertical',
                elements: [
                  {
                    type: 'text',
                    tag: 'title',
                    text: 'Lion 1',
                    tooltip: 'roar',
                    style: {
                      bold: true,
                      size: 'large',
                    },
                  },
                  {
                    type: 'text',
                    tag: 'subtitle',
                    text: 'I like to Roar',
                    tooltip: 'ROAR!',
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                tooltip: 'Roar Image',
              },
              {
                type: 'vertical',
                elements: [
                  {
                    type: 'text',
                    tag: 'title',
                    text: 'Lion 2',
                    tooltip: 'roar',
                    style: {
                      bold: true,
                      size: 'large',
                    },
                  },
                  {
                    type: 'text',
                    tag: 'subtitle',
                    text: 'I like to Roar too',
                    tooltip: 'ROAR!',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyDatePickerAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
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
    tag: 'datePicker',
    elements: [
      {
        type: 'horizontal',
        elements: [
          {
            type: 'button',
            title: 'DEPRECATED/Only relevant for agent View',
            click: {
              metadata: [
                {
                  type: 'ExternalId',
                  id: 'SlotIdentifier',
                },
                {
                  type: 'BusinessEvent',
                  timing: {
                    startTime: '2023-07-06T12:00:00Z',
                    duration: 60,
                  },
                },
              ],
              actions: [
                {
                  type: 'publishText',
                  text: 'DEPRECATED',
                },
              ],
            },
          },
          {
            type: 'button',
            title: 'DEPRECATED/Only relevant for agent View',
            click: {
              metadata: [
                {
                  type: 'ExternalId',
                  id: 'SlotIdentidier',
                },
                {
                  type: 'BusinessEvent',
                  timing: {
                    startTime: '2023-07-06T12:00:00Z',
                    duration: 60,
                  },
                },
              ],
              actions: [
                {
                  type: 'publishText',
                  text: 'DEPRECATED',
                },
              ],
            },
          },
        ],
      },
    ],
  },
});

const mdListPickerAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: true,
      receivedMessage: {
        style: 'icon',
        subtitle: 'Choose your lion!',
        title: 'Click to open the List',
        secondarySubtitle: 'secondary subtitle/ Deprecated?',
        tertiarySubtitle: 'tertiarySubtitle/ Deprecated?',
        imageURL:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
      },
      replyMessage: {
        style: 'small',
        subtitle: 'This is what has been selected',
        title: 'PROBABLY DEPRECATED seems to have no effect',
        secondarySubtitle: 'secondarySubtitle/ Deprecated?',
        tertiarySubtitle: 'tertiarySubtitle/ Deprecated?',
        imageURL:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
      },
    },
  ],
});

const mdDatePickerAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessEvent',
      timing: {
        presentedTimezoneOffset: 120,
      },
      location: {
        title: 'LivePerson ATC Mannheim',
        la: 49.4872955,
        lo: 8.4682869,
        radius: 10,
      },
      title: 'X Appointment',
    },
    {
      type: 'BusinessChatMessage',
      receivedMessage: {
        title: 'Date Picker',
        imageURL:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
        style: 'small',
        subtitle: 'Click to choose an appointment',
      },
      replyMessage: {
        title: 'DEPRECATED',
        style: 'large',
        imageURL:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
        subtitle: 'Appointment at X',
      },
    },
  ],
});

const bdyListPickerOneOptionAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPhones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg', tooltip: 'iPhone X' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerOneOptionAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: false,
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const mdFormAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessFormEvent',
      startPageIdentifier: '0',
      showSummary: true,
      title: 'abcForm Title',
      pages: [
        {
          pageIdentifier: '0',
          type: 'select',
          title: 'Type of Product',
          subtitle: 'Was the merchandise you received defective?',
          multipleSelection: true,
          nextPageIdentifier: '1',
          pageItems: [
            {
              title: 'Option 1',
              value: 'option1',
              identifier: '001',
              imageIdentifier: '1',
            },
            {
              title: 'Option 2',
              value: 'option2',
              identifier: '002',
              imageIdentifier: '1',
            },
          ],
        },
        {
          pageIdentifier: '1',
          type: 'select',
          title: 'Item Condition',
          subtitle: 'Was the merchandise you received defective?',
          multipleSelection: false,
          pageItems: [
            {
              title: 'Defective',
              value: 'defective',
              identifier: '101',
              nextPageIdentifier: '2',
              imageIdentifier: '1',
            },
            {
              title: 'Not as described',
              value: 'notAsDescribed',
              identifier: '102',
              nextPageIdentifier: '3',
              imageIdentifier: '1',
            },
          ],
        },
        {
          pageIdentifier: '2',
          type: 'select',
          title: 'Supporting Documents',
          subtitle: 'Do you have any supporting documents t?',
          multipleSelection: false,
          pageItems: [
            {
              title: 'Yes',
              value: 'yes',
              identifier: '201',
              nextPageIdentifier: '3',
            },
            {
              title: 'No',
              value: 'no',
              identifier: '202',
              nextPageIdentifier: '3',
            },
          ],
        },
        {
          pageIdentifier: '3',
          type: 'picker',
          pickerTitle: 'Select Your Region',
          nextPageIdentifier: '4',
          pageItems: [
            {
              title: 'APAC',
              value: 'apac',
              identifier: '301',
            },
            {
              title: 'EMEA',
              value: 'emea',
              identifier: '302',
            },
          ],
        },
        {
          pageIdentifier: '4',
          type: 'datePicker',
          title: 'Retrieval Date',
          subtitle: 'What date did you receive, or expect to receive the product?',
          nextPageIdentifier: '5',
          options: {
            startdate: '2020-02-12',
            maximumdate: '2020-02-13',
            minimumdate: '2020-01-01',
            dateFormat: 'MM/dd/yyyy',
          },
        },
        {
          pageIdentifier: '5',
          type: 'input',
          title: 'Remaining Issues',
          hintText: 'Please describe the issue',
          subtitle: 'Please provide details about remaining issue',
          nextPageIdentifier: '6',
          options: {
            required: true,
            inputType: 'multiline',
            maximumCharacterCount: 300,
            keyboardType: 'UIKeyboardTypeTwitter',
          },
        },
        {
          pageIdentifier: '6',
          type: 'input',
          title: 'Product name',
          subtitle: 'Please provide name of the product',
          options: {
            required: false,
            inputType: 'singleline',
            maximumCharacterCount: 25,
            keyboardType: 'UIKeyboardTypeTwitter',
          },
          submitForm: true,
        },
      ],
      images: [
        {
          imageUrl: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg',
          id: '1',
        },
        {
          imageUrl: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg',
          id: '2',
        },
      ],
    },
  ],
});

const mdCBBotResponseAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      botMsgId: '0f0d47ba-92a6-477f-9b00-92ab261fcb90',
      type: 'CbBotResponseMetaData',
    },
  ],
});

const mdBotResponseAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BotResponse',
      bot: {
        botId: '123-123-123-123',
        botProvider: 'test',
        botProviderType: '1P',
        botType: 'normal',
        botLanguage: 'eng',
        botLastUpdateTimestamp: 1234567890,
      },
      consumerUtteranceSequenceNumbers: [11, 22],
      consumerId: '1234567890',
      kBSourceId: '12345678990',
      botInteractionId: '1234567890',
      externalConversationId: 'EgTalaEmaAvlngznUHycP-us',
      businessCases: ['test', 'test'],
      intentMatched: true,
      intents: [
        {
          name: 'test',
          id: '1234567890',
          confidence: 'test',
          confidenceScore: 0,
          intentMatchType: 'test',
          intentMatchEventType: 'test',
        },
      ],
    },
  ],
});

const bdyListPickerMultipleOptionsAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPhones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg', tooltip: 'iPhone X' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2017?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1504041012369',
                tooltip: 'iPhone 8',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone 8', tooltip: 'iPhone 8', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Rose Gold', tooltip: 'Rose Gold' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone 8 Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone 8' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPads', tooltip: 'iPads', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg', tooltip: 'iPad Pro' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPad Pro', tooltip: 'iPad Pro', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Space Grey', tooltip: 'Space Grey' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPad Pro Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPad Pro' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerMultipleOptionsAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: false,
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const bdyListPickerWithoutImagesAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPhones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerWithoutImagesAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: false,
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const bdyListPickerWithImagesAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPhones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg', tooltip: 'iPhone X' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerWithImagesAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: false,
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const bdyListPickerWithoutButtonsAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPhones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerWithoutButtonsAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: false,
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const mdUndefinedReceivedReplyMessagesAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: false,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: false,
      receivedMessage: {},
      replyMessage: {},
    },
  ],
});

const mdNoReceivedReplyMessagesAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: false,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
    },
  ],
});

const bdyListPickerMultiSelectAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPhones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg', tooltip: 'iPhone X' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2017?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1504041012369',
                tooltip: 'iPhone 8',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone 8', tooltip: 'iPhone 8', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Rose Gold', tooltip: 'Rose Gold' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone 8 Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone 8' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPads', tooltip: 'iPads', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg', tooltip: 'iPad Pro' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPad Pro', tooltip: 'iPad Pro', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Space Grey', tooltip: 'Space Grey' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPad Pro Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPad Pro' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerMultiSelectAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: true,
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const bdyListPickerMultiSelectPerSectionAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'Phones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1550795428390',
                tooltip: 'iPhone Xx',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone Xs', tooltip: 'iPhone Xs', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone Xs Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone Xs' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1550795424612',
                tooltip: 'iPhone Xr',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone Xr', tooltip: 'iPhone Xr', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Rose Gold', tooltip: 'Rose Gold' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone Xr Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone Xr' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'Tablets', tooltip: 'Tablets', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-12-11-select-201810?wid=435&amp;hei=550&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1540576039631',
                tooltip: 'iPad Pro',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPad Pro', tooltip: 'iPad Pro', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Space Grey', tooltip: 'Space Grey' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPad Pro Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPad Pro' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/air/ipad-air-select-201903?wid=443&amp;hei=567&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1552167066151',
                tooltip: 'iPad Air',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPad Air', tooltip: 'iPad Air', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    title: 'Add to cart',
                    tooltip: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPad Air Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPad Air' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerMultiSelectPerSectionAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: [true, false],
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const bdyListPickerMultiOptionsPerSectionAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'Phones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg', tooltip: 'iPhone X' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2017?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1504041012369',
                tooltip: 'iPhone 8',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone 8', tooltip: 'iPhone 8', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Rose Gold', tooltip: 'Rose Gold' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone 8 Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone 8' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2017?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1504041012369',
                tooltip: 'iPhone 8',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone 8 2', tooltip: 'iPhone 8 2', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Rose Gold', tooltip: 'Rose Gold' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone 8 2 Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone 8 2' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'Tablets', tooltip: 'Tablets tool', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg', tooltip: 'iPad Pro' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPad Pro, 2017', tooltip: 'iPad Pro', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Space Grey', tooltip: 'Space Grey' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPad Pro Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPad Pro' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg', tooltip: 'iPad Pro' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'Pixel C', tooltip: 'Pixel C tooltip', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black tooltip' },
                  {
                    type: 'button',
                    title: 'Add to cart',
                    tooltip: 'Add to cart',
                    click: { actions: [{ type: 'publishText', text: 'Pixel C Added' }], metadata: [{ type: 'ExternalId', id: 'Pixel C' }] },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerMultiOptionsPerSectionAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: true,
      receivedMessage: {
        style: 'icon',
        title: 'Title of message to consumer',
        subtitle: 'Subtitle of message to consumer',
        secondarySubtitle: 'Secondary subtitle of message to consumer',
        tertiarySubtitle: 'Tertiary subtitle of message to consumer',
      },
      replyMessage: {
        style: 'icon',
        title: 'Title of reply to Agent',
        subtitle: 'Subtitle of reply to Agent',
        secondarySubtitle: 'Secondary subtitle of reply to Agent',
        tertiarySubtitle: 'Tertiary subtitle of reply to Agent',
      },
    },
  ],
});

const bdyListPickerButtonMissingTitleAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: false,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: false,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPhones', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg', tooltip: 'iPhone X' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone X', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Black', tooltip: 'Black' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url:
                  'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2017?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1504041012369',
                tooltip: 'iPhone 8',
              },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPhone 8', tooltip: 'iPhone 8', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Rose Gold', tooltip: 'Rose Gold' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone 8 Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone 8' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: 'iPads', tooltip: 'iPads', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg', tooltip: 'iPad Pro' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'iPad Pro', tooltip: 'iPad Pro', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: 'Space Grey', tooltip: 'Space Grey' },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPad Pro Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPad Pro' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyListPickerMissingEntryDefTitleAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            text: 'iPads',
            tooltip: 'iPads',
            style: {
              bold: true,
              size: 'large',
            },
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg',
                tooltip: 'iPad Pro',
              },
              {
                type: 'vertical',
                elements: [
                  {
                    type: 'text',
                    tag: 'subtitle',
                    text: 'Space Grey',
                    tooltip: 'Space Grey',
                  },
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [
                        {
                          type: 'publishText',
                          text: 'iPad Pro Added',
                        },
                      ],
                      metadata: [
                        {
                          type: 'ExternalId',
                          id: 'Metadata ID',
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
    ],
  },
});

const bdyListPickerMissingEntryDefButtonAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            text: 'iPads',
            tooltip: 'iPads',
            style: {
              bold: true,
              size: 'large',
            },
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg',
                tooltip: 'iPad Pro',
              },
              {
                type: 'vertical',
                elements: [
                  {
                    type: 'text',
                    tag: 'title',
                    text: 'iPad Pro',
                    tooltip: 'iPad Pro',
                    style: {
                      bold: true,
                      size: 'large',
                    },
                  },
                  {
                    type: 'text',
                    tag: 'subtitle',
                    text: 'Space Grey',
                    tooltip: 'Space Grey',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyListPickerMissingEntryDefSubtitleAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            text: 'iPads',
            tooltip: 'iPads',
            style: {
              bold: true,
              size: 'large',
            },
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'image',
                url: 'https://brain-images-ssl.cdn.dixons.com/0/4/10165840/u_10165840.jpg',
                tooltip: 'iPad Pro',
              },
              {
                type: 'vertical',
                elements: [
                  {
                    type: 'button',
                    tooltip: 'Add to cart',
                    title: 'Add to cart',
                    click: {
                      actions: [
                        {
                          type: 'publishText',
                          text: 'iPad Pro Added',
                        },
                      ],
                      metadata: [
                        {
                          type: 'ExternalId',
                          id: 'Metadata ID',
                        },
                      ],
                    },
                  },
                  {
                    type: 'text',
                    tag: 'title',
                    text: 'iPad Pro',
                    tooltip: 'iPad Pro',
                    style: {
                      bold: true,
                      size: 'large',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCustomMessag1eAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    elements: [],
  },
});

const mdCustomMessage1Abc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatCustomMessage',
      appId: 1340506831,
      appName: 'no-app',
      bid: 'com.apple.messages.MSMessageExtensionBalloonPlugin:WS7Q8E6V24:com.gabrieljaramillo.ABCExtensionB.MessagesExtension',
      sessionIdentifier: '',
      useLiveLayout: false,
      receivedMessage: {
        imageURL: 'https://cdn.macrumors.com/article-new/2017/09/iphonexfrontback-800x573.jpg',
        title: 'Please Authenticate',
        style: 'icon',
        subtitle: '',
        secondarySubtitle: '',
        tertiarySubtitle: '',
        imageTitle: '',
        imageSubtitle: '',
      },
      URL:
        'https://imessagetest.com/authentication?rewriteextjsonparser=true&SessionID=b2822365-3cef-483d-9959-d1f0aa9ab861&OpaqueUserId=95d334c071c4808184d2ff6d507efaa527f0c90e09374b39f9d2d442e048774f',
    },
  ],
});

const bdyCustomMessage2Abc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    elements: [
      { type: 'text', text: 'Please Authenticate', tooltip: 'text tooltip', style: { bold: true, size: 'large' } },
      { type: 'text', text: ' sent Auth Challenge', tooltip: 'text tooltip', style: { bold: false, size: 'small' } },
    ],
  },
});

const mdCustomMessage2Abc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatCustomMessage',
      appId: 1340506831,
      appName: 'no-app',
      bid: 'com.apple.messages.MSMessageExtensionBalloonPlugin:WS7Q8E6V24:com.gabrieljaramillo.ABCExtensionB.MessagesExtension',
      sessionIdentifier: '',
      useLiveLayout: false,
      receivedMessage: {
        imageURL: 'https://ss7.vzw.com/is/image/VerizonWireless/VerifyAccount_Img',
        title: 'Please Authenticate',
        style: 'icon',
        subtitle: '',
        secondarySubtitle: '',
        tertiarySubtitle: '',
        imageTitle: '',
        imageSubtitle: '',
      },
      URL:
        'https://imessagetest.com/authentication?rewriteextjsonparser=true&SessionID=b2822365-3cef-483d-9959-d1f0aa9ab861&OpaqueUserId=95d334c071c4808184d2ff6d507efaa527f0c90e09374b39f9d2d442e048774f',
    },
  ],
});

const bdyCustomMessage3Abc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    elements: [],
  },
});

const mdCustomMessage3Abc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatCustomMessage',
      appId: 1263174302,
      appName: 'AuthenticationPOC',
      bid:
        'com.apple.messages.MSMessageExtensionBalloonPlugin:7A76CR8BD8:com.liveperson.abcpoc.welcomMessagePOC.WelcomMessagePOC.welcomMessagePOCExtension',
      sessionIdentifier: '',
      useLiveLayout: false,
      receivedMessage: {
        imageURL: 'https://s3.amazonaws.com/lp-mobile-apps/WelcomeMessagePOC/Welcome-02-web-version.jpg',
        title: 'Please Authenticate',
        style: 'icon',
        subtitle: '',
        secondarySubtitle: '',
        tertiarySubtitle: '',
        imageTitle: '',
        imageSubtitle: '',
      },
      URL: '?LPABCData=%7B%0A%22userName%22%3A%22%22%2C%0A%22isAuth%22%3Afalse%2C%20%0A%22isDirty%22%3Afalse%0A%7D',
    },
  ],
});

const bdyListPickerLargeAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'list',
    elements: [
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: '', tooltip: '', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://lpwidgets.devscribble.com/images/fridge1_lp.png', tooltip: '' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'Frigidaire Item #852874', tooltip: 'Title', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: '$1,169.10 was $2,149.00', tooltip: '' },
                  {
                    type: 'button',
                    tooltip: '',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone X Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone X' }],
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://lpwidgets.devscribble.com/images/fridge2_lp.png', tooltip: '' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'Whirlpool Item #699469', tooltip: '', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: '$1,699.00 was $1,899.00', tooltip: '' },
                  {
                    type: 'button',
                    tooltip: '',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPhone 8 Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPhone 8' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        elements: [
          { type: 'text', text: '', tooltip: '', style: { bold: true, size: 'large' } },
          {
            type: 'horizontal',
            elements: [
              { type: 'image', url: 'https://lpwidgets.devscribble.com/images/fridge3_lp.png', tooltip: '' },
              {
                type: 'vertical',
                elements: [
                  { type: 'text', tag: 'title', text: 'KitchenAid Item #581526', tooltip: '', style: { bold: true, size: 'large' } },
                  { type: 'text', tag: 'subtitle', text: '$2,573.00 was $3,126.00', tooltip: '' },
                  {
                    type: 'button',
                    tooltip: '',
                    title: 'Add to cart',
                    click: {
                      actions: [{ type: 'publishText', text: 'iPad Pro Added' }],
                      metadata: [{ type: 'ExternalId', id: 'iPad Pro' }],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdListPickerLargeAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: false,
      receivedMessage: {
        style: 'icon',
        subtitle: 'this is the subtitle',
        title: 'this is the title',
        secondarySubtitle: 'secondary subtitle for some reason',
        tertiarySubtitle: 'tertiarySubtitle',
      },
      replyMessage: {
        style: 'style',
        subtitle: 'subtitle',
        title: 'title',
        secondarySubtitle: 'secondarySubtitle',
        tertiarySubtitle: 'tertiarySubtitle',
      },
    },
  ],
});

const bdyDatePickerOneOptionAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'datePicker',
    elements: [
      { type: 'text', text: 'Select Date', tag: 'Title', style: { bold: true, size: 'large' } },
      { type: 'text', text: 'Tuesday, August 9' },
      {
        type: 'horizontal',
        elements: [
          {
            type: 'button',
            title: '11:30',
            click: {
              metadata: [
                { type: 'ExternalId', id: 'Slotidentifier' },
                { type: 'BusinessEvent', timing: { startTime: '2100-11-09T11:30:22Z', duration: 3600 } },
              ],
              actions: [{ type: 'publishText', text: 'Technician visit: 11/9/2100 11:30 IST' }],
            },
          },
          {
            type: 'button',
            title: '12:00',
            click: {
              metadata: [
                { type: 'ExternalId', id: 'Slotidentifier' },
                { type: 'BusinessEvent', timing: { startTime: '2100-11-09T12:00:22Z', duration: 3600 } },
              ],
              actions: [{ type: 'publishText', text: 'Technician visit: 11/9/2100 12:00 IST' }],
            },
          },
        ],
      },
    ],
  },
});

const mdDatePickerOneOptionAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessEvent',
      timing: { presentedTimezoneOffset: 120 },
      location: { title: 'LivePerson ATC Mannheim', la: 49.4872955, lo: 8.4682869, radius: 10 },
      title: 'Technician Visit',
    },
    {
      type: 'BusinessChatMessage',
      receivedMessage: {
        title: 'Select time',
        imageURL: 'https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg',
        style: 'small',
        subtitle: 'Select the time that fits your schedule',
      },
      replyMessage: {
        title: 'Selected Produce',
        style: 'large',
        imageURL: 'https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg',
        subtitle: 'Time selected!',
      },
    },
  ],
});

const bdyDatePickerMoreOptionsAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'datePicker',
    elements: [
      { type: 'text', text: 'Select Date', tag: 'Title', style: { bold: true, size: 'large' } },
      { type: 'text', text: 'Tuesday, Sept 6' },
      {
        type: 'horizontal',
        elements: [
          {
            type: 'button',
            title: '11:30',
            click: {
              metadata: [{ type: 'BusinessEvent', timing: { startTime: '2099-09-09T11:30:00Z', duration: 3600 } }],
              actions: [{ type: 'publishText', text: 'Technician visit: 9/9/2099 11:30 IST' }],
            },
          },
          {
            type: 'button',
            title: '12:00',
            click: {
              metadata: [{ type: 'BusinessEvent', timing: { startTime: '2099-09-06T12:00:00Z', duration: 3600 } }],
              actions: [{ type: 'publishText', text: 'Technician visit: 9/9/2099 12:00 IST' }],
            },
          },
          {
            type: 'horizontal',
            elements: [
              {
                type: 'button',
                title: '11:30',
                click: {
                  metadata: [{ type: 'BusinessEvent', timing: { startTime: '2099-09-06T10:30:00Z', duration: 3600 } }],
                  actions: [{ type: 'publishText', text: 'Technician visit: 9/9/2099 11:30 IST' }],
                },
              },
              {
                type: 'button',
                title: '12:00',
                click: {
                  metadata: [{ type: 'BusinessEvent', timing: { startTime: '2099-09-09T10:00:00Z', duration: 3600 } }],
                  actions: [{ type: 'publishText', text: 'Technician visit: 9/9/2099 12:00 IST' }],
                },
              },
            ],
          },
        ],
      },
    ],
  },
});

const mdDatePickerMoreOptionsAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessEvent',
      timing: { presentedTimezoneOffset: 120 },
      location: { title: 'LivePerson ATC Mannheim', la: 49.4872955, lo: 8.4682869, radius: 10 },
      title: 'Technician Visit',
    },
    {
      type: 'BusinessChatMessage',
      receivedMessage: {
        title: 'Select time',
        imageURL: 'https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg',
        style: 'small',
        subtitle: 'Select the time that fits your schedule',
      },
      replyMessage: {
        title: 'Selected Produce',
        style: 'large',
        imageURL: 'https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg',
        subtitle: 'Time selected!',
      },
    },
  ],
});

const bdyDatePickerPastDateAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  description: 'This JSON gets declined, because it contains a date in the past.',
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: false,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'datePicker',
    elements: [
      { type: 'text', text: 'Select Date', tag: 'Title', style: { bold: true, size: 'large' } },
      { type: 'text', text: 'Tuesday, February 6' },
      {
        type: 'horizontal',
        elements: [
          {
            type: 'button',
            title: '11:30',
            click: {
              metadata: [{ type: 'BusinessEvent', timing: { startTime: '2019-08-06T11:30:00Z', duration: 3600 } }],
              actions: [{ type: 'publishText', text: 'Technician visit: 8/2/2019 11:30 IST' }],
            },
          },
          {
            type: 'button',
            title: '12:00',
            click: {
              metadata: [{ type: 'BusinessEvent', timing: { startTime: '2019-08-06T12:00:22Z', duration: 3600 } }],
              actions: [{ type: 'publishText', text: 'Technician visit: 8/2/201912:00 IST' }],
            },
          },
        ],
      },
    ],
  },
});

const bdyAuthenticationAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: { type: 'vertical', tag: 'authentication', elements: [] },
});

const mdAuthenticationAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      receivedMessage: {
        title: 'Sign In to LivePerson',
        subtitle: 'Thank you',
        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
        style: 'small',
      },
      replyMessage: {
        title: 'You Signed in',
        subtitle: 'Thank you',
        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
        style: 'small',
      },
    },
    { type: 'ConnectorAuthenticationRequest' },
  ],
});

const mdAuthenticationWithImageAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      receivedMessage: {
        title: 'Sign In to LivePerson',
        subtitle: 'Thank you',
        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
        style: 'small',
      },
      replyMessage: {
        title: 'You Signed in',
        subtitle: 'Thank you',
        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
        style: 'small',
      },
    },
    { type: 'ConnectorAuthenticationRequest' },
  ],
});

const mdAuthenticationWithResponseEncryptionKeyAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      receivedMessage: {
        title: 'Sign In to LivePerson',
        subtitle: 'Thank you',
        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
        style: 'small',
      },
      replyMessage: {
        title: 'You Signed in',
        subtitle: 'Thank you',
        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
        style: 'small',
      },
    },
    {
      type: 'ConnectorAuthenticationRequest',
      apple: {
        oauth2: {
          responseEncryptionKey:
            'BO1yHpzYDMss7ejNEGY1nXZNkQGsvDk9lGBcdh8VHNpwgOC908n0bWilphYmGNGvYCeoGt5lMYZFYri3WvDbKQssX2brnhPLs/T36SIZ1JH8aJVPb3nPUdqnWJZ/DJ4GBQ==',
        },
      },
    },
  ],
});

const bdyApplePayAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: { type: 'vertical', tag: 'payment', elements: [{ type: 'text', text: 'iPhone Deal!!' }] },
});

const mdApplePayAbc = (): ITestJson => ({
  richContentType: Types.MTD,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: [
    {
      type: 'BusinessChatMessage',
      multipleSelection: true,
      receivedMessage: {
        style: 'large',
        subtitle: 'Buy now for $1',
        title: 'iPhone XS Max',
      },
    },
    {
      type: 'ConnectorPaymentRequest',
      apple: {
        data: {
          version: '1.0',
          payment: {
            paymentRequest: {
              applePay: {
                merchantIdentifier: 'merchant.livepersonpayment',
                merchantCapabilities: ['supports3DS', 'supportsCredit', 'supportsDebit'],
                supportedNetworks: ['amex', 'visa', 'mastercard'],
              },
              lineItems: [
                {
                  label: 'iPhone',
                  amount: '1',
                  type: 'pending',
                },
              ],
              total: {
                label: 'iPhone',
                amount: '1',
                type: 'pending',
              },
              countryCode: 'US',
              currencyCode: 'USD',
              supportedCountries: ['US'],
            },
            endpoints: {
              paymentGatewayUrl: 'https://tejasb.ngrok.io/paymentGateway',
              fallbackUrl: 'https://tejasb.ngrok.io/paymentGateway',
            },
            merchantSession: {},
          },
          requestIdentifier: '69c52b69-1759-4629-ae7c-bbe92b35be69',
        },
      },
    },
  ],
});

const bdyQuickReplyAbc = (): ITestJson => ({
  richContentType: Types.QUR,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: false,
    [Channels.ABC]: true,
    [Channels.LINE]: false,
    [Channels.RBM]: false,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'quickReplies',
    itemsPerRow: 8,
    replies: [
      {
        title: 'Option 1',
        type: 'button',
      },
      {
        title: 'Option 2',
        type: 'button',
      },
      {
        title: 'Option 3',
        type: 'button',
      },
    ],
  },
});

const bdyFormAbc = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.ABC,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: true,
    [Channels.LINE]: undefined,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'form',
    elements: [
      { type: 'text', tag: 'title', text: 'This is Title', tooltip: 'Title', style: { bold: true, size: 'large' } },
      { type: 'text', tag: 'subtitle', text: 'This is Sub-Title', tooltip: '' },
      { type: 'button', title: 'Continue' },
    ],
  },
});

const expectedSchemaBodyAbc = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'abcBodyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      description:
        "Schema checks if the JSON is a 'richLink', 'list' or 'datePicker'. If yes the according ABC-schemas will be used for validation. If not the validation will be based on the web-schemas.",
      if: {
        required: ['tag'],
        properties: {
          tag: {
            enum: ['richLink', 'list', 'datePicker', 'form'],
          },
        },
      },
      then: {
        oneOf: [
          {
            title: 'abcRichLinkCard',
            $schema: 'http://json-schema.org/draft-07/schema#',
            additionalProperties: false,
            required: ['type', 'tag', 'elements'],
            properties: {
              type: {
                type: 'string',
                enum: ['vertical'],
                default: 'vertical',
                readonly: true,
              },
              tag: {
                type: 'string',
                enum: ['richLink'],
                default: 'richLink',
                readonly: true,
              },
              elements: {
                oneOf: [
                  {
                    title: 'abcRichLinkCardElementOrder1',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    minItems: 2,
                    maxItems: 2,
                    type: 'array',
                    items: [
                      {
                        title: 'abcImage',
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
                        },
                      },
                      {
                        title: 'abcButtonRichLink',
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
                            maxLength: 128,
                          },
                          click: {
                            title: 'abcClickOperationsRichLink',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              metadata: {
                                title: 'abcClickMetadata',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'array',
                                maxItems: 32,
                                items: {},
                              },
                              actions: {
                                maxItems: 4,
                                type: 'array',
                                items: {
                                  title: 'abcClickActionLink',
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
                              },
                            },
                          },
                        },
                      },
                    ],
                    additionalItems: false,
                  },
                  {
                    title: 'abcRichLinkCardElementOrder2',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    minItems: 1,
                    maxItems: 1,
                    type: 'array',
                    items: [
                      {
                        title: 'abcButtonRichLink',
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
                            maxLength: 128,
                          },
                          click: {
                            title: 'abcClickOperationsRichLink',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              metadata: {
                                title: 'abcClickMetadata',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'array',
                                maxItems: 32,
                                items: {},
                              },
                              actions: {
                                maxItems: 4,
                                type: 'array',
                                items: {
                                  title: 'abcClickActionLink',
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
                              },
                            },
                          },
                        },
                      },
                    ],
                    additionalItems: false,
                  },
                ],
              },
            },
          },
          {
            title: 'abcListPicker',
            $schema: 'http://json-schema.org/draft-07/schema#',
            required: ['tag', 'type', 'elements'],
            properties: {
              tag: {
                type: 'string',
                enum: ['list'],
                default: 'list',
                readonly: true,
              },
              type: {
                type: 'string',
                enum: ['horizontal', 'vertical'],
                default: 'vertical',
                readonly: true,
              },
              elements: {
                maxItems: 256,
                type: 'array',
                items: {
                  title: 'abcListPickerSection',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  required: ['type', 'elements'],
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['horizontal', 'vertical'],
                      default: 'vertical',
                      readonly: true,
                    },
                    elements: {
                      oneOf: [
                        {
                          title: 'abcListPickerSectionWithText',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          minItems: 2,
                          type: 'array',
                          items: [
                            {
                              title: 'abcText',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              required: ['type', 'text'],
                              properties: {
                                type: {
                                  type: 'string',
                                  enum: ['text'],
                                  default: 'text',
                                  readonly: true,
                                },
                                text: {
                                  type: 'string',
                                  maxLength: 5000,
                                },
                                style: {
                                  title: 'abcStyle',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
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
                                tooltip: {
                                  type: 'string',
                                },
                              },
                            },
                          ],
                          additionalItems: {
                            title: 'abcListPickerEntry',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            required: ['elements', 'type'],
                            properties: {
                              type: {
                                type: 'string',
                                enum: ['horizontal'],
                                default: 'horizontal',
                                readonly: true,
                              },
                              elements: {
                                oneOf: [
                                  {
                                    title: 'abcListPickerEntryWithImage',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    minItems: 2,
                                    type: 'array',
                                    items: [
                                      {
                                        title: 'abcImage',
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
                                        },
                                      },
                                    ],
                                    additionalItems: {
                                      title: 'abcListPickerEntryDefinition',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      required: ['type', 'elements'],
                                      type: 'object',
                                      properties: {
                                        type: {
                                          type: 'string',
                                          enum: ['vertical'],
                                          default: 'vertical',
                                          readonly: true,
                                        },
                                        elements: {
                                          oneOf: [
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder1',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 1,
                                              maxItems: 1,
                                              type: 'array',
                                              items: {
                                                oneOf: [
                                                  {
                                                    title: 'abcTitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcSubtitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcButtonListPicker',
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
                                                        maxLength: 128,
                                                      },
                                                      click: {
                                                        title: 'abcClickOperationsListPicker',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'object',
                                                        additionalProperties: false,
                                                        properties: {
                                                          metadata: {
                                                            title: 'abcClickMetadata',
                                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                                            type: 'array',
                                                            maxItems: 32,
                                                            items: {},
                                                          },
                                                          actions: {
                                                            type: 'array',
                                                            maxItems: 4,
                                                            items: {
                                                              oneOf: [
                                                                {
                                                                  title: 'abcClickActionLink',
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
                                                                {
                                                                  title: 'abcClickActionPublishText',
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
                                                              ],
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                ],
                                              },
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder2',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 3,
                                              maxItems: 3,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder3',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder4',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder5',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                  {
                                    title: 'abcListPickerEntryWithoutImage',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    minItems: 1,
                                    type: 'array',
                                    items: {
                                      title: 'abcListPickerEntryDefinition',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      required: ['type', 'elements'],
                                      type: 'object',
                                      properties: {
                                        type: {
                                          type: 'string',
                                          enum: ['vertical'],
                                          default: 'vertical',
                                          readonly: true,
                                        },
                                        elements: {
                                          oneOf: [
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder1',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 1,
                                              maxItems: 1,
                                              type: 'array',
                                              items: {
                                                oneOf: [
                                                  {
                                                    title: 'abcTitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcSubtitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcButtonListPicker',
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
                                                        maxLength: 128,
                                                      },
                                                      click: {
                                                        title: 'abcClickOperationsListPicker',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'object',
                                                        additionalProperties: false,
                                                        properties: {
                                                          metadata: {
                                                            title: 'abcClickMetadata',
                                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                                            type: 'array',
                                                            maxItems: 32,
                                                            items: {},
                                                          },
                                                          actions: {
                                                            type: 'array',
                                                            maxItems: 4,
                                                            items: {
                                                              oneOf: [
                                                                {
                                                                  title: 'abcClickActionLink',
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
                                                                {
                                                                  title: 'abcClickActionPublishText',
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
                                                              ],
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                ],
                                              },
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder2',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 3,
                                              maxItems: 3,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder3',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder4',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder5',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                ],
                              },
                            },
                          },
                        },
                        {
                          title: 'abcListPickerSectionWithoutText',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          minItems: 1,
                          type: 'array',
                          items: {
                            title: 'abcListPickerEntry',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            required: ['elements', 'type'],
                            properties: {
                              type: {
                                type: 'string',
                                enum: ['horizontal'],
                                default: 'horizontal',
                                readonly: true,
                              },
                              elements: {
                                oneOf: [
                                  {
                                    title: 'abcListPickerEntryWithImage',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    minItems: 2,
                                    type: 'array',
                                    items: [
                                      {
                                        title: 'abcImage',
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
                                        },
                                      },
                                    ],
                                    additionalItems: {
                                      title: 'abcListPickerEntryDefinition',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      required: ['type', 'elements'],
                                      type: 'object',
                                      properties: {
                                        type: {
                                          type: 'string',
                                          enum: ['vertical'],
                                          default: 'vertical',
                                          readonly: true,
                                        },
                                        elements: {
                                          oneOf: [
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder1',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 1,
                                              maxItems: 1,
                                              type: 'array',
                                              items: {
                                                oneOf: [
                                                  {
                                                    title: 'abcTitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcSubtitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcButtonListPicker',
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
                                                        maxLength: 128,
                                                      },
                                                      click: {
                                                        title: 'abcClickOperationsListPicker',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'object',
                                                        additionalProperties: false,
                                                        properties: {
                                                          metadata: {
                                                            title: 'abcClickMetadata',
                                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                                            type: 'array',
                                                            maxItems: 32,
                                                            items: {},
                                                          },
                                                          actions: {
                                                            type: 'array',
                                                            maxItems: 4,
                                                            items: {
                                                              oneOf: [
                                                                {
                                                                  title: 'abcClickActionLink',
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
                                                                {
                                                                  title: 'abcClickActionPublishText',
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
                                                              ],
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                ],
                                              },
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder2',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 3,
                                              maxItems: 3,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder3',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder4',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder5',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                  {
                                    title: 'abcListPickerEntryWithoutImage',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    minItems: 1,
                                    type: 'array',
                                    items: {
                                      title: 'abcListPickerEntryDefinition',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      required: ['type', 'elements'],
                                      type: 'object',
                                      properties: {
                                        type: {
                                          type: 'string',
                                          enum: ['vertical'],
                                          default: 'vertical',
                                          readonly: true,
                                        },
                                        elements: {
                                          oneOf: [
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder1',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 1,
                                              maxItems: 1,
                                              type: 'array',
                                              items: {
                                                oneOf: [
                                                  {
                                                    title: 'abcTitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcSubtitle',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    required: ['type', 'text', 'tag'],
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
                                                        maxLength: 5000,
                                                      },
                                                      style: {
                                                        title: 'abcStyle',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                      tooltip: {
                                                        type: 'string',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    title: 'abcButtonListPicker',
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
                                                        maxLength: 128,
                                                      },
                                                      click: {
                                                        title: 'abcClickOperationsListPicker',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'object',
                                                        additionalProperties: false,
                                                        properties: {
                                                          metadata: {
                                                            title: 'abcClickMetadata',
                                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                                            type: 'array',
                                                            maxItems: 32,
                                                            items: {},
                                                          },
                                                          actions: {
                                                            type: 'array',
                                                            maxItems: 4,
                                                            items: {
                                                              oneOf: [
                                                                {
                                                                  title: 'abcClickActionLink',
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
                                                                {
                                                                  title: 'abcClickActionPublishText',
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
                                                              ],
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                ],
                                              },
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder2',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 3,
                                              maxItems: 3,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder3',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder4',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcTitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                            {
                                              title: 'abcListPickerEntryDefinitionElementOrder5',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              minItems: 2,
                                              maxItems: 2,
                                              type: 'array',
                                              items: [
                                                {
                                                  title: 'abcSubtitle',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  required: ['type', 'text', 'tag'],
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
                                                      maxLength: 5000,
                                                    },
                                                    style: {
                                                      title: 'abcStyle',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
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
                                                    tooltip: {
                                                      type: 'string',
                                                    },
                                                  },
                                                },
                                                {
                                                  title: 'abcButtonListPicker',
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
                                                      maxLength: 128,
                                                    },
                                                    click: {
                                                      title: 'abcClickOperationsListPicker',
                                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                                      type: 'object',
                                                      additionalProperties: false,
                                                      properties: {
                                                        metadata: {
                                                          title: 'abcClickMetadata',
                                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                                          type: 'array',
                                                          maxItems: 32,
                                                          items: {},
                                                        },
                                                        actions: {
                                                          type: 'array',
                                                          maxItems: 4,
                                                          items: {
                                                            oneOf: [
                                                              {
                                                                title: 'abcClickActionLink',
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
                                                              {
                                                                title: 'abcClickActionPublishText',
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
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                              additionalItems: false,
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                ],
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
          {
            title: 'abcDatePicker',
            $schema: 'http://json-schema.org/draft-07/schema#',
            additionalProperties: false,
            required: ['type', 'tag', 'elements'],
            properties: {
              type: {
                type: 'string',
                enum: ['vertical', 'horizontal'],
                default: 'vertical',
                readonly: true,
              },
              tag: {
                type: 'string',
                enum: ['datePicker'],
                default: 'datePicker',
                readonly: true,
              },
              elements: {
                maxItems: 256,
                type: 'array',
                contains: {
                  oneOf: [
                    {
                      title: 'abcButtonDatePicker',
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
                          maxLength: 128,
                        },
                        click: {
                          title: 'abcClickOperationsDatePicker',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          additionalProperties: false,
                          properties: {
                            metadata: {
                              type: 'array',
                              minItems: 1,
                              maxItems: 32,
                              contains: {
                                title: 'abcClickMetadataBusinessEvent',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'timing'],
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: ['BusinessEvent'],
                                    default: 'BusinessEvent',
                                    readonly: true,
                                  },
                                  timing: {
                                    type: 'object',
                                    required: ['duration', 'startTime'],
                                    properties: {
                                      duration: {
                                        type: 'number',
                                      },
                                      startTime: {
                                        title: 'abcFuturePatternIso8601',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'string',
                                        description:
                                          "Depending on how the rich content validator is configured, the 'pattern'-property of this schema will be adjusted to a RegEx which only accepts ISO8601 dates in the future. Else it accepts any string value.",
                                        pattern: '.',
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            actions: {
                              type: 'array',
                              maxItems: 4,
                              items: {
                                oneOf: [
                                  {
                                    title: 'abcClickActionPublishText',
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
                                ],
                              },
                            },
                          },
                        },
                      },
                    },
                    {
                      title: 'abcDatePickerButtonContainer',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      additionalProperties: false,
                      required: ['type', 'elements'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['vertical', 'horizontal'],
                          default: 'horizontal',
                          readonly: true,
                        },
                        elements: {
                          maxItems: 256,
                          type: 'array',
                          contains: {
                            title: 'abcButtonDatePicker',
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
                                maxLength: 128,
                              },
                              click: {
                                title: 'abcClickOperationsDatePicker',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    type: 'array',
                                    minItems: 1,
                                    maxItems: 32,
                                    contains: {
                                      title: 'abcClickMetadataBusinessEvent',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      type: 'object',
                                      required: ['type', 'timing'],
                                      properties: {
                                        type: {
                                          type: 'string',
                                          enum: ['BusinessEvent'],
                                          default: 'BusinessEvent',
                                          readonly: true,
                                        },
                                        timing: {
                                          type: 'object',
                                          required: ['duration', 'startTime'],
                                          properties: {
                                            duration: {
                                              type: 'number',
                                            },
                                            startTime: {
                                              title: 'abcFuturePatternIso8601',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              type: 'string',
                                              description:
                                                "Depending on how the rich content validator is configured, the 'pattern'-property of this schema will be adjusted to a RegEx which only accepts ISO8601 dates in the future. Else it accepts any string value.",
                                              pattern: '.',
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  actions: {
                                    type: 'array',
                                    maxItems: 4,
                                    items: {
                                      oneOf: [
                                        {
                                          title: 'abcClickActionPublishText',
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
                  ],
                },
                items: {
                  oneOf: [
                    {
                      title: 'abcButtonDatePicker',
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
                          maxLength: 128,
                        },
                        click: {
                          title: 'abcClickOperationsDatePicker',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          additionalProperties: false,
                          properties: {
                            metadata: {
                              type: 'array',
                              minItems: 1,
                              maxItems: 32,
                              contains: {
                                title: 'abcClickMetadataBusinessEvent',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'timing'],
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: ['BusinessEvent'],
                                    default: 'BusinessEvent',
                                    readonly: true,
                                  },
                                  timing: {
                                    type: 'object',
                                    required: ['duration', 'startTime'],
                                    properties: {
                                      duration: {
                                        type: 'number',
                                      },
                                      startTime: {
                                        title: 'abcFuturePatternIso8601',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'string',
                                        description:
                                          "Depending on how the rich content validator is configured, the 'pattern'-property of this schema will be adjusted to a RegEx which only accepts ISO8601 dates in the future. Else it accepts any string value.",
                                        pattern: '.',
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            actions: {
                              type: 'array',
                              maxItems: 4,
                              items: {
                                oneOf: [
                                  {
                                    title: 'abcClickActionPublishText',
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
                                ],
                              },
                            },
                          },
                        },
                      },
                    },
                    {
                      title: 'abcDatePickerButtonContainer',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      additionalProperties: false,
                      required: ['type', 'elements'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['vertical', 'horizontal'],
                          default: 'horizontal',
                          readonly: true,
                        },
                        elements: {
                          maxItems: 256,
                          type: 'array',
                          contains: {
                            title: 'abcButtonDatePicker',
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
                                maxLength: 128,
                              },
                              click: {
                                title: 'abcClickOperationsDatePicker',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    type: 'array',
                                    minItems: 1,
                                    maxItems: 32,
                                    contains: {
                                      title: 'abcClickMetadataBusinessEvent',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      type: 'object',
                                      required: ['type', 'timing'],
                                      properties: {
                                        type: {
                                          type: 'string',
                                          enum: ['BusinessEvent'],
                                          default: 'BusinessEvent',
                                          readonly: true,
                                        },
                                        timing: {
                                          type: 'object',
                                          required: ['duration', 'startTime'],
                                          properties: {
                                            duration: {
                                              type: 'number',
                                            },
                                            startTime: {
                                              title: 'abcFuturePatternIso8601',
                                              $schema: 'http://json-schema.org/draft-07/schema#',
                                              type: 'string',
                                              description:
                                                "Depending on how the rich content validator is configured, the 'pattern'-property of this schema will be adjusted to a RegEx which only accepts ISO8601 dates in the future. Else it accepts any string value.",
                                              pattern: '.',
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  actions: {
                                    type: 'array',
                                    maxItems: 4,
                                    items: {
                                      oneOf: [
                                        {
                                          title: 'abcClickActionPublishText',
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
                    {
                      title: 'abcText',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      required: ['type', 'text'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['text'],
                          default: 'text',
                          readonly: true,
                        },
                        text: {
                          type: 'string',
                          maxLength: 5000,
                        },
                        style: {
                          title: 'abcStyle',
                          $schema: 'http://json-schema.org/draft-07/schema#',
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
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                    {
                      title: 'abcTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      required: ['type', 'text', 'tag'],
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
                          maxLength: 5000,
                        },
                        style: {
                          title: 'abcStyle',
                          $schema: 'http://json-schema.org/draft-07/schema#',
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
                        tooltip: {
                          type: 'string',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            title: 'abcForm',
            $schema: 'http://json-schema.org/draft-07/schema#',
            additionalProperties: false,
            required: ['type', 'tag', 'elements'],
            properties: {
              type: {
                type: 'string',
                enum: ['vertical'],
                default: 'vertical',
                readonly: true,
              },
              tag: {
                type: 'string',
                enum: ['form'],
                default: 'form',
                readonly: true,
              },
              elements: {
                maxItems: 3,
                minItems: 3,
                type: 'array',
                items: [
                  {
                    title: 'abcTitle',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    required: ['type', 'text', 'tag'],
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
                        maxLength: 5000,
                      },
                      style: {
                        title: 'abcStyle',
                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                      tooltip: {
                        type: 'string',
                      },
                    },
                  },
                  {
                    title: 'abcSubtitle',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    required: ['type', 'text', 'tag'],
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
                        maxLength: 5000,
                      },
                      style: {
                        title: 'abcStyle',
                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                      tooltip: {
                        type: 'string',
                      },
                    },
                  },
                  {
                    title: 'abcButtonForm',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    required: ['title', 'type'],
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
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      else: {
        $ref: '#/definitions/abcWebPlaceholder',
      },
    },
    abcWebPlaceholder: {
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
                    type: {
                      type: 'string',
                      enum: ['text'],
                      default: 'text',
                      readonly: true,
                    },
                    text: {
                      type: 'string',
                      maxLength: 5000,
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
                  required: ['text'],
                },
                {
                  type: 'object',
                  title: 'image',
                  additionalProperties: false,
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['image'],
                      default: 'image',
                      readonly: true,
                    },
                    caption: {
                      type: 'string',
                      maxLength: 128,
                    },
                    url: {
                      type: 'string',
                      maxLength: 2048,
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
                  required: ['url'],
                },
                {
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
                {
                  type: 'object',
                  title: 'map',
                  additionalProperties: false,
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['map'],
                      default: 'map',
                      readonly: true,
                    },
                    lo: {
                      type: 'number',
                    },
                    la: {
                      type: 'number',
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
                  required: ['lo', 'la'],
                },
                {
                  type: 'object',
                  title: 'linkPreview',
                  additionalProperties: false,
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['linkPreview'],
                      default: 'linkPreview',
                      readonly: true,
                    },
                    url: {
                      type: 'string',
                      maxLength: 2048,
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
                  required: ['url'],
                },
                {
                  type: 'object',
                  title: 'template',
                  additionalProperties: false,
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['template'],
                      default: 'template',
                      readonly: true,
                    },
                    templateType: {
                      type: 'string',
                      enum: ['quickReply'],
                      default: 'quickReply',
                      readonly: true,
                    },
                    title: {
                      type: 'string',
                      maxLength: 5000,
                    },
                    resp: {
                      type: 'array',
                      maxItems: 32,
                      minItems: 1,
                      items: {
                        type: 'string',
                        maxLength: 128,
                      },
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
                  required: ['templateType', 'title', 'resp'],
                },
              ],
            },
            {
              type: 'object',
              additionalProperties: false,
              title: 'horizontal',
              properties: {
                type: {
                  type: 'string',
                  enum: ['horizontal'],
                  default: 'horizontal',
                  readonly: true,
                },
                tag: {
                  type: 'string',
                  maxLength: 64,
                },
                tagVersion: {
                  type: 'string',
                  maxLength: 64,
                },
                elements: {
                  type: 'array',
                  maxItems: 256,
                  items: {
                    $ref: '#/definitions/abcWebPlaceholder',
                  },
                },
                alt: {
                  type: 'string',
                  maxLength: 2000,
                },
              },
              required: ['type', 'elements'],
            },
            {
              type: 'object',
              additionalProperties: false,
              title: 'vertical',
              properties: {
                type: {
                  type: 'string',
                  enum: ['vertical'],
                  default: 'vertical',
                  readonly: true,
                },
                tag: {
                  type: 'string',
                  maxLength: 64,
                },
                tagVersion: {
                  type: 'string',
                  maxLength: 64,
                },
                elements: {
                  type: 'array',
                  maxItems: 256,
                  items: {
                    $ref: '#/definitions/abcWebPlaceholder',
                  },
                },
                alt: {
                  type: 'string',
                  maxLength: 2000,
                },
                display: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    aspectRatio: {
                      type: 'string',
                      enum: ['rectangle', 'square', 'horizontal'],
                    },
                    size: {
                      type: 'string',
                      enum: ['cover', 'contain', 'large', 'compact', 'tall', 'full'],
                    },
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
            type: {
              type: 'string',
              enum: ['carousel'],
              default: 'carousel',
              readonly: true,
            },
            tooltip: {
              type: 'string',
              maxLength: 256,
            },
            padding: {
              type: 'number',
              default: 0,
              minimum: 0,
              maximum: 10,
            },
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
                          type: {
                            type: 'string',
                            enum: ['text'],
                            default: 'text',
                            readonly: true,
                          },
                          text: {
                            type: 'string',
                            maxLength: 5000,
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
                        required: ['text'],
                      },
                      {
                        type: 'object',
                        title: 'image',
                        additionalProperties: false,
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['image'],
                            default: 'image',
                            readonly: true,
                          },
                          caption: {
                            type: 'string',
                            maxLength: 128,
                          },
                          url: {
                            type: 'string',
                            maxLength: 2048,
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
                        required: ['url'],
                      },
                      {
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
                      {
                        type: 'object',
                        title: 'map',
                        additionalProperties: false,
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['map'],
                            default: 'map',
                            readonly: true,
                          },
                          lo: {
                            type: 'number',
                          },
                          la: {
                            type: 'number',
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
                        required: ['lo', 'la'],
                      },
                      {
                        type: 'object',
                        title: 'linkPreview',
                        additionalProperties: false,
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['linkPreview'],
                            default: 'linkPreview',
                            readonly: true,
                          },
                          url: {
                            type: 'string',
                            maxLength: 2048,
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
                        required: ['url'],
                      },
                      {
                        type: 'object',
                        title: 'template',
                        additionalProperties: false,
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['template'],
                            default: 'template',
                            readonly: true,
                          },
                          templateType: {
                            type: 'string',
                            enum: ['quickReply'],
                            default: 'quickReply',
                            readonly: true,
                          },
                          title: {
                            type: 'string',
                            maxLength: 5000,
                          },
                          resp: {
                            type: 'array',
                            maxItems: 32,
                            minItems: 1,
                            items: {
                              type: 'string',
                              maxLength: 128,
                            },
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
                        required: ['templateType', 'title', 'resp'],
                      },
                    ],
                  },
                  {
                    type: 'object',
                    additionalProperties: false,
                    title: 'horizontal',
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['horizontal'],
                        default: 'horizontal',
                        readonly: true,
                      },
                      tag: {
                        type: 'string',
                        maxLength: 64,
                      },
                      tagVersion: {
                        type: 'string',
                        maxLength: 64,
                      },
                      elements: {
                        type: 'array',
                        maxItems: 256,
                        items: {
                          $ref: '#/definitions/abcWebPlaceholder',
                        },
                      },
                      alt: {
                        type: 'string',
                        maxLength: 2000,
                      },
                    },
                    required: ['type', 'elements'],
                  },
                  {
                    type: 'object',
                    additionalProperties: false,
                    title: 'vertical',
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['vertical'],
                        default: 'vertical',
                        readonly: true,
                      },
                      tag: {
                        type: 'string',
                        maxLength: 64,
                      },
                      tagVersion: {
                        type: 'string',
                        maxLength: 64,
                      },
                      elements: {
                        type: 'array',
                        maxItems: 256,
                        items: {
                          $ref: '#/definitions/abcWebPlaceholder',
                        },
                      },
                      alt: {
                        type: 'string',
                        maxLength: 2000,
                      },
                      display: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                          aspectRatio: {
                            type: 'string',
                            enum: ['rectangle', 'square', 'horizontal'],
                          },
                          size: {
                            type: 'string',
                            enum: ['cover', 'contain', 'large', 'compact', 'tall', 'full'],
                          },
                        },
                      },
                    },
                    required: ['type', 'elements'],
                  },
                ],
              },
            },
            alt: {
              type: 'string',
              maxLength: 2000,
            },
            display: {
              type: 'object',
              additionalProperties: false,
              properties: {
                aspectRatio: {
                  type: 'string',
                  enum: ['rectangle', 'square', 'horizontal'],
                },
                size: {
                  type: 'string',
                  enum: ['cover', 'contain', 'large', 'compact', 'tall', 'full'],
                },
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
            type: {
              type: 'string',
              enum: ['list'],
              default: 'list',
              readonly: true,
            },
            tooltip: {
              type: 'string',
              maxLength: 256,
            },
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
                    type: {
                      type: 'string',
                      enum: ['text'],
                      default: 'text',
                      readonly: true,
                    },
                    text: {
                      type: 'string',
                      maxLength: 5000,
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
                  required: ['text'],
                },
                {
                  type: 'object',
                  additionalProperties: false,
                  title: 'sectionList',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['sectionList'],
                      default: 'sectionList',
                      readonly: true,
                    },
                    tooltip: {
                      type: 'string',
                      maxLength: 256,
                    },
                    elements: {
                      type: 'array',
                      minItems: 1,
                      maxItems: 256,
                      items: {
                        type: 'object',
                        additionalProperties: false,
                        title: 'section',
                        properties: {
                          type: {
                            type: 'string',
                            enum: ['section'],
                            default: 'section',
                            readonly: true,
                          },
                          tooltip: {
                            type: 'string',
                            maxLength: 256,
                          },
                          padding: {
                            type: 'number',
                            default: 0,
                            minimum: 0,
                            maximum: 10,
                          },
                          sectionID: {
                            type: 'string',
                            maxLength: 256,
                          },
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
                                      type: {
                                        type: 'string',
                                        enum: ['checklist'],
                                        default: 'checklist',
                                        readonly: true,
                                      },
                                      tooltip: {
                                        type: 'string',
                                        maxLength: 256,
                                      },
                                      padding: {
                                        type: 'number',
                                        default: 0,
                                        minimum: 0,
                                        maximum: 10,
                                      },
                                      elements: {
                                        type: 'array',
                                        minItems: 2,
                                        maxItems: 256,
                                        items: {
                                          type: 'object',
                                          title: 'checkbox',
                                          additionalProperties: false,
                                          properties: {
                                            type: {
                                              type: 'string',
                                              enum: ['checkbox'],
                                              default: 'checkbox',
                                              readonly: true,
                                            },
                                            text: {
                                              type: 'string',
                                              maxLength: 5000,
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
                                            borderLine: {
                                              type: 'boolean',
                                              default: true,
                                            },
                                            borderColor: {
                                              type: 'string',
                                              format: 'color',
                                              maxLength: 256,
                                            },
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
                                                      type: {
                                                        type: 'string',
                                                        enum: ['checked'],
                                                        default: 'checked',
                                                        readonly: true,
                                                      },
                                                      publishText: {
                                                        type: 'string',
                                                        maxLength: 250,
                                                      },
                                                    },
                                                    required: ['type', 'publishText'],
                                                  },
                                                },
                                                metadata: {
                                                  type: 'array',
                                                },
                                              },
                                            },
                                          },
                                          required: ['type', 'text', 'click'],
                                        },
                                      },
                                      alt: {
                                        type: 'string',
                                        maxLength: 2000,
                                      },
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
                                      type: {
                                        type: 'string',
                                        enum: ['text'],
                                        default: 'text',
                                        readonly: true,
                                      },
                                      text: {
                                        type: 'string',
                                        maxLength: 5000,
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
                                    required: ['text'],
                                  },
                                  {
                                    type: 'object',
                                    additionalProperties: false,
                                    title: 'checklist',
                                    properties: {
                                      type: {
                                        type: 'string',
                                        enum: ['checklist'],
                                        default: 'checklist',
                                        readonly: true,
                                      },
                                      tooltip: {
                                        type: 'string',
                                        maxLength: 256,
                                      },
                                      padding: {
                                        type: 'number',
                                        default: 0,
                                        minimum: 0,
                                        maximum: 10,
                                      },
                                      elements: {
                                        type: 'array',
                                        minItems: 2,
                                        maxItems: 256,
                                        items: {
                                          type: 'object',
                                          title: 'checkbox',
                                          additionalProperties: false,
                                          properties: {
                                            type: {
                                              type: 'string',
                                              enum: ['checkbox'],
                                              default: 'checkbox',
                                              readonly: true,
                                            },
                                            text: {
                                              type: 'string',
                                              maxLength: 5000,
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
                                            borderLine: {
                                              type: 'boolean',
                                              default: true,
                                            },
                                            borderColor: {
                                              type: 'string',
                                              format: 'color',
                                              maxLength: 256,
                                            },
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
                                                      type: {
                                                        type: 'string',
                                                        enum: ['checked'],
                                                        default: 'checked',
                                                        readonly: true,
                                                      },
                                                      publishText: {
                                                        type: 'string',
                                                        maxLength: 250,
                                                      },
                                                    },
                                                    required: ['type', 'publishText'],
                                                  },
                                                },
                                                metadata: {
                                                  type: 'array',
                                                },
                                              },
                                            },
                                          },
                                          required: ['type', 'text', 'click'],
                                        },
                                      },
                                      alt: {
                                        type: 'string',
                                        maxLength: 2000,
                                      },
                                    },
                                    required: ['type', 'elements'],
                                  },
                                ],
                              },
                            ],
                          },
                          alt: {
                            type: 'string',
                            maxLength: 2000,
                          },
                        },
                        required: ['type', 'elements', 'sectionID'],
                      },
                    },
                    alt: {
                      type: 'string',
                      maxLength: 2000,
                    },
                  },
                  required: ['type', 'elements'],
                },
                {
                  type: 'object',
                  additionalProperties: false,
                  title: 'buttonList',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['buttonList'],
                      default: 'buttonList',
                      readonly: true,
                    },
                    tooltip: {
                      type: 'string',
                      maxLength: 256,
                    },
                    padding: {
                      type: 'number',
                      default: 0,
                      minimum: 0,
                      maximum: 10,
                    },
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
                            type: {
                              type: 'string',
                              enum: ['submitButton'],
                              default: 'submitButton',
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
                            disabled: {
                              type: 'boolean',
                              default: false,
                            },
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
                                      type: {
                                        type: 'string',
                                        enum: ['submitAsText'],
                                        default: 'submitAsText',
                                        readonly: true,
                                      },
                                      submit: {
                                        type: 'boolean',
                                        default: false,
                                      },
                                    },
                                    required: ['type', 'submit'],
                                  },
                                },
                                metadata: {
                                  type: 'array',
                                },
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
                          ],
                        },
                      ],
                    },
                    alt: {
                      type: 'string',
                      maxLength: 2000,
                    },
                  },
                  required: ['type', 'elements'],
                },
              ],
            },
            alt: {
              type: 'string',
              maxLength: 2000,
            },
          },
          required: ['type', 'elements'],
        },
      ],
    },
  },
};

const expectedSchemaMetadataAbc = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'abcMetadataRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      type: ['array', 'null'],
      maxItems: 32,
      items: {
        oneOf: [
          {
            title: 'abcConnectorPaymentRequestMd',
            description: 'Payment request message',
            type: 'object',
            additionalProperties: false,
            properties: {
              type: {
                enum: ['ConnectorPaymentRequest'],
                default: 'ConnectorPaymentRequest',
                type: 'string',
              },
              signature: {
                type: 'string',
                maxLength: 1024,
              },
              apple: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  data: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                      version: {
                        type: 'string',
                        maxLength: 64,
                      },
                      payment: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                          paymentRequest: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              applePay: {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  merchantIdentifier: {
                                    type: 'string',
                                    maxLength: 512,
                                  },
                                  merchantCapabilities: {
                                    type: 'array',
                                    maxItems: 15,
                                    items: {
                                      type: 'string',
                                      maxLength: 64,
                                    },
                                  },
                                  supportedNetworks: {
                                    type: 'array',
                                    maxItems: 15,
                                    items: {
                                      type: 'string',
                                      maxLength: 64,
                                    },
                                  },
                                },
                                required: ['merchantIdentifier', 'merchantCapabilities', 'supportedNetworks'],
                              },
                              lineItems: {
                                type: 'array',
                                maxItems: 100,
                                items: {
                                  type: 'object',
                                  additionalProperties: false,
                                  properties: {
                                    label: {
                                      type: 'string',
                                      maxLength: 64,
                                    },
                                    amount: {
                                      type: 'string',
                                      maxLength: 64,
                                    },
                                    type: {
                                      type: 'string',
                                      maxLength: 64,
                                    },
                                  },
                                },
                              },
                              total: {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  label: {
                                    type: 'string',
                                    maxLength: 64,
                                  },
                                  amount: {
                                    type: 'string',
                                    maxLength: 64,
                                  },
                                  type: {
                                    type: 'string',
                                    maxLength: 64,
                                  },
                                },
                              },
                              countryCode: {
                                type: 'string',
                                maxLength: 2,
                              },
                              currencyCode: {
                                type: 'string',
                                maxLength: 3,
                              },
                              supportedCountries: {
                                type: 'array',
                                maxItems: 200,
                                items: {
                                  type: 'string',
                                  maxLength: 2,
                                },
                              },
                              requiredBillingContactFields: {
                                type: 'array',
                                maxItems: 6,
                                items: {
                                  type: 'string',
                                  maxLength: 128,
                                },
                              },
                              requiredShippingContactFields: {
                                type: 'array',
                                maxItems: 6,
                                items: {
                                  type: 'string',
                                  maxLength: 128,
                                },
                              },
                              shippingMethods: {
                                type: 'array',
                                maxItems: 32,
                                items: {
                                  type: 'object',
                                  additionalProperties: false,
                                  properties: {
                                    label: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                    amount: {
                                      type: 'string',
                                      maxLength: 64,
                                    },
                                    identifier: {
                                      type: 'string',
                                      maxLength: 64,
                                    },
                                    detail: {
                                      type: 'string',
                                      maxLength: 512,
                                    },
                                  },
                                },
                              },
                            },
                            required: ['applePay', 'total', 'countryCode', 'currencyCode'],
                          },
                          endpoints: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              paymentGatewayUrl: {
                                type: 'string',
                                maxLength: 2048,
                              },
                              paymentMethodUpdateUrl: {
                                type: 'string',
                                maxLength: 2048,
                              },
                              shippingContactUpdateUrl: {
                                type: 'string',
                                maxLength: 2048,
                              },
                              shippingMethodUpdateUrl: {
                                type: 'string',
                                maxLength: 2048,
                              },
                              orderTrackingUrl: {
                                type: 'string',
                                maxLength: 2048,
                              },
                              fallbackUrl: {
                                type: 'string',
                                maxLength: 2048,
                              },
                            },
                            required: ['paymentGatewayUrl'],
                          },
                          merchantSession: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                              epochTimestamp: {
                                type: 'number',
                              },
                              expiresAt: {
                                type: 'number',
                              },
                              merchantSessionIdentifier: {
                                type: 'string',
                                maxLength: 256,
                              },
                              nonce: {
                                type: 'string',
                                maxLength: 32,
                              },
                              merchantIdentifier: {
                                type: 'string',
                                maxLength: 128,
                              },
                              displayName: {
                                type: 'string',
                                maxLength: 256,
                              },
                              signature: {
                                type: 'string',
                                maxLength: 5120,
                              },
                              initiative: {
                                type: 'string',
                                maxLength: 16,
                              },
                              initiativeContext: {
                                type: 'string',
                                maxLength: 2048,
                              },
                              signedFields: {
                                type: 'array',
                                maxItems: 16,
                                items: {
                                  type: 'string',
                                  maxLength: 64,
                                },
                              },
                            },
                          },
                        },
                        required: ['paymentRequest', 'endpoints', 'merchantSession'],
                      },
                      images: {
                        type: 'array',
                        maxItems: 2,
                        items: {
                          type: 'object',
                          additionalProperties: false,
                          properties: {
                            identifier: {
                              type: 'string',
                              maxLength: 2048,
                            },
                            data: {
                              type: 'string',
                              maxLength: 2048,
                            },
                          },
                          required: ['identifier', 'data'],
                        },
                      },
                      requestIdentifier: {
                        type: 'string',
                        maxLength: 64,
                      },
                    },
                    required: ['version', 'payment', 'requestIdentifier'],
                  },
                },
                required: ['data'],
              },
            },
            required: ['type'],
          },
          {
            title: 'ConnectorAuthenticationRequestMd',
            description: 'Authentication request message initiated by Connectors (ABC, etc)',
            type: 'object',
            additionalProperties: false,
            properties: {
              type: {
                enum: ['ConnectorAuthenticationRequest'],
                default: 'ConnectorAuthenticationRequest',
                type: 'string',
              },
              requestIdentifier: {
                type: 'string',
                description: 'An identifier for the authenticate request',
                maxLength: 64,
              },
              apple: {
                type: 'object',
                additionalProperties: false,
                description: 'An object which will have fields required for any type of authentication',
                properties: {
                  oauth2: {
                    type: 'object',
                    additionalProperties: false,
                    description: 'A dictionary of OAuth parameters',
                    properties: {
                      responseType: {
                        type: 'string',
                        description: 'A string indicating the type of authentication request',
                        maxLength: 256,
                      },
                      scope: {
                        type: 'array',
                        items: {
                          type: 'string',
                          maxLength: 64,
                        },
                        description: 'An array of scope items that specifies the scope of the request',
                        maxItems: 16,
                      },
                      state: {
                        type: 'string',
                        description: 'A string indicating the state of the authentication request',
                        maxLength: 64,
                      },
                      clientSecret: {
                        type: 'string',
                        description: 'A string indicating the secret provisioned by the authorization server',
                        maxLength: 256,
                      },
                      responseEncryptionKey: {
                        type: 'string',
                        description:
                          'A string indicating the Base64-encoded public key that encrypts the access token returned in the response.',
                        maxLength: 1024,
                      },
                    },
                  },
                },
              },
            },
            required: ['type'],
          },
          {
            title: 'abcCustomMessageMd',
            description: 'Apple Business Chat Custom Interactive Message',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['BusinessChatCustomMessage'],
                default: 'BusinessChatCustomMessage',
                type: 'string',
              },
              appId: {
                type: 'number',
              },
              appName: {
                maxLength: 1000,
                type: 'string',
              },
              appIcon: {
                maxLength: 2048,
                type: 'string',
              },
              bid: {
                maxLength: 1000,
                type: 'string',
              },
              URL: {
                maxLength: 4096,
                type: 'string',
              },
              sessionIdentifier: {
                maxLength: 1000,
                type: 'string',
              },
              useLiveLayout: {
                type: 'boolean',
              },
              receivedMessage: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  imageURL: {
                    type: 'string',
                    maxLength: 2048,
                  },
                  style: {
                    enum: ['icon', 'small', 'large'],
                    default: 'icon',
                    type: 'string',
                  },
                  subtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  title: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageTitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageSubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  secondarySubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  tertiarySubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                },
                required: ['title'],
              },
              attachments: {
                type: 'array',
                maxItems: 16,
                items: {
                  type: 'string',
                  maxLength: 2048,
                },
              },
            },
            required: ['type', 'bid', 'receivedMessage', 'URL'],
          },
          {
            title: 'abcChatMessageMd',
            description: 'Apple Business Chat Interactive Message',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['BusinessChatMessage'],
                default: 'BusinessChatMessage',
                type: 'string',
              },
              multipleSelection: {
                oneOf: [
                  {
                    type: 'boolean',
                  },
                  {
                    type: 'array',
                    items: {
                      type: 'boolean',
                    },
                    maxItems: 256,
                    minItems: 1,
                  },
                ],
                default: false,
              },
              receivedMessage: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  imageURL: {
                    type: 'string',
                    maxLength: 2048,
                  },
                  style: {
                    enum: ['icon', 'small', 'large'],
                    default: 'icon',
                    type: 'string',
                  },
                  subtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  title: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageTitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageSubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  secondarySubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  tertiarySubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageIdentifier: {
                    maxLength: 64,
                    type: 'string',
                  },
                },
                required: ['title'],
              },
              replyMessage: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  imageURL: {
                    type: 'string',
                    maxLength: 2048,
                  },
                  style: {
                    maxLength: 64,
                    type: 'string',
                  },
                  subtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  title: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageTitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageSubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  secondarySubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  tertiarySubtitle: {
                    maxLength: 1000,
                    type: 'string',
                  },
                  imageIdentifier: {
                    maxLength: 64,
                    type: 'string',
                  },
                },
                required: ['title'],
              },
            },
            required: ['type', 'receivedMessage'],
          },
          {
            title: 'abcDatePicker',
            description: 'Event that happen sometime, somewhere and has business meaning, like appoitment, meeting etc...',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['BusinessEvent'],
                default: 'BusinessEvent',
                type: 'string',
              },
              title: {
                description: "event's title",
                type: 'string',
                maxLength: 256,
              },
              timing: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  startTime: {
                    description: 'UTC date string. ISO-8601 GTM+0000 date, for example: 2018-02-19T08:27:55Z',
                    type: 'string',
                    pattern:
                      '^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$',
                  },
                  presentedTimezoneOffset: {
                    type: 'integer',
                    description: 'Minutes from GMT. Present the time in this timezone instead of customer defaults.',
                  },
                  duration: {
                    type: 'integer',
                    description: 'in seconds from startTime',
                    minimum: 0,
                  },
                },
              },
              location: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  title: {
                    description: "location's title",
                    type: 'string',
                    maxLength: 256,
                  },
                  lo: {
                    type: 'number',
                    description: 'longitude',
                  },
                  la: {
                    type: 'number',
                    description: 'latitude',
                  },
                  radius: {
                    type: 'number',
                    description: 'in meters from center',
                    minimum: 0,
                  },
                },
              },
            },
            required: ['type'],
          },
          {
            title: 'CB Bot Response Metadata',
            description: 'Conversation Builder Bot Response Metadata to propagate additional info to analytics',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['CbBotResponseMetaData'],
                default: 'CbBotResponseMetaData',
                type: 'string',
              },
              botMsgId: {
                maxLength: 64,
                type: 'string',
              },
            },
            required: ['botMsgId'],
          },
          {
            title: 'Bot Response',
            description: 'Information coming back from the bot provider',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['BotResponse'],
                default: 'BotResponse',
                type: 'string',
              },
              bot: {
                type: 'object',
                description: 'Information about the bot instance providing the response',
                additionalProperties: false,
                properties: {
                  botId: {
                    maxLength: 64,
                    type: 'string',
                    description: 'Unique value per bot instance, preferably hashed',
                  },
                  botProvider: {
                    description: 'Name of the AI vendor (IBM Watson, Google Dialogflow, Amazon Lex)',
                    maxLength: 64,
                    type: 'string',
                  },
                  botProviderType: {
                    description: 'Survey bot, normal bot, etc.',
                    maxLength: 64,
                    type: 'string',
                    enum: ['1P', '3P_LP_CONNECTOR', '3P_EXTERNAL_CONNECTOR'],
                  },
                  botType: {
                    description: 'normal / survey / manager',
                    maxLength: 64,
                    type: 'string',
                  },
                  botLanguage: {
                    description: 'Language of the bot, preferably in ISO 639 format ',
                    maxLength: 64,
                    type: 'string',
                  },
                  botLastUpdateTimestamp: {
                    description: 'Timestamp of the last update of the Bot instance',
                    type: 'number',
                  },
                },
                required: ['botId'],
              },
              consumerUtteranceSequenceNumbers: {
                description: 'Sequence number(s) of the consumer utterance(s) this bot response is the answer to.',
                type: 'array',
                maxItems: 16,
                items: {
                  type: 'number',
                },
              },
              consumerId: {
                description: 'Consumer ID of the consumer this bot response is an answer to',
                maxLength: 64,
                type: 'string',
              },
              kBSourceId: {
                maxLength: 64,
                type: 'string',
              },
              botInteractionId: {
                maxLength: 64,
                type: 'string',
              },
              externalConversationId: {
                maxLength: 64,
                type: 'string',
              },
              businessCases: {
                type: 'array',
                maxItems: 16,
                items: {
                  maxLength: 256,
                  type: 'string',
                },
              },
              intentMatched: {
                type: 'boolean',
              },
              intents: {
                type: 'array',
                maxItems: 16,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    name: {
                      maxLength: 256,
                      type: 'string',
                    },
                    id: {
                      maxLength: 256,
                      type: 'string',
                    },
                    confidence: {
                      maxLength: 64,
                      type: 'string',
                    },
                    confidenceScore: {
                      type: 'number',
                      minimum: 0,
                      maximum: 1,
                    },
                    intentMatchType: {
                      description: 'How was the intent matched? Regex or free text',
                      maxLength: 20,
                      type: 'string',
                    },
                    intentMatchEventType: {
                      description: 'Intent vs pattern',
                      maxLength: 20,
                      type: 'string',
                    },
                  },
                  required: ['id', 'confidenceScore'],
                },
              },
            },
            required: ['type'],
          },
          {
            title: 'Apple Business Form Interactive Message',
            description: 'Apple Business Form Interactive Message',
            additionalProperties: false,
            type: 'object',
            properties: {
              type: {
                enum: ['BusinessFormEvent'],
                default: 'BusinessFormEvent',
                type: 'string',
              },
              title: {
                description: "event's title",
                type: 'string',
                maxLength: 256,
              },
              showSummary: {
                description: 'Show form summary after submit',
                default: true,
                type: 'boolean',
              },
              startPageIdentifier: {
                description: 'Start page identifier default 0',
                default: '0',
                type: 'string',
                maxLength: 256,
              },
              pages: {
                type: 'array',
                maxItems: 256,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    pageIdentifier: {
                      type: 'string',
                      maxLength: 2048,
                    },
                    type: {
                      type: 'string',
                      enum: ['select', 'picker', 'datePicker', 'input'],
                      maxLength: 2048,
                    },
                    title: {
                      type: 'string',
                      maxLength: 2048,
                    },
                    subtitle: {
                      type: 'string',
                      maxLength: 2048,
                    },
                    multipleSelection: {
                      type: 'boolean',
                    },
                    nextPageIdentifier: {
                      type: 'string',
                      maxLength: 2048,
                    },
                    submitForm: {
                      type: 'boolean',
                    },
                    pickerTitle: {
                      type: 'string',
                      maxLength: 2048,
                    },
                    hintText: {
                      type: 'string',
                      description:
                        'A string representing optional text to give the user more input context that displays below the Date field.',
                      maxLength: 2048,
                    },
                    pageItems: {
                      type: 'array',
                      maxItems: 256,
                      items: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                          title: {
                            type: 'string',
                            maxLength: 2048,
                          },
                          value: {
                            type: 'string',
                            maxLength: 2048,
                          },
                          identifier: {
                            type: 'string',
                            maxLength: 2048,
                          },
                          nextPageIdentifier: {
                            type: 'string',
                            maxLength: 2048,
                          },
                          imageIdentifier: {
                            type: 'string',
                            maxLength: 2048,
                          },
                        },
                      },
                    },
                    options: {
                      type: 'object',
                      additionalProperties: false,
                      properties: {
                        startdate: {
                          type: 'string',
                          maxLength: 2048,
                        },
                        maximumdate: {
                          type: 'string',
                          maxLength: 2048,
                        },
                        minimumdate: {
                          type: 'string',
                          maxLength: 2048,
                        },
                        dateFormat: {
                          type: 'string',
                          default: 'MM/dd/yyyy',
                          maxLength: 2048,
                        },
                        required: {
                          type: 'boolean',
                        },
                        inputType: {
                          type: 'string',
                          enum: ['multiline', 'singleline'],
                          maxLength: 2048,
                        },
                        maximumCharacterCount: {
                          type: 'number',
                        },
                        labelText: {
                          type: 'string',
                          description: 'A string value representing a text label shown to identify the input field',
                          maxLength: 2048,
                        },
                        regex: {
                          type: 'string',
                          description: 'JSON encode all regex strings',
                          maxLength: 2048,
                        },
                        placeholder: {
                          type: 'string',
                          maxLength: 2048,
                        },
                        prefixText: {
                          type: 'string',
                          description: 'A string value representing optional text shown next to the text field',
                          maxLength: 2048,
                        },
                        keyboardType: {
                          type: 'string',
                          description: 'Type of keyboard',
                          enum: [
                            'default',
                            'asciiCapable',
                            'numbersAndPunctuation',
                            'URL',
                            'numberPad',
                            'phonePad',
                            'namePhonePad',
                            'emailAddress',
                            'decimalPad',
                            'UIKeyboardTypeTwitter',
                            'webSearch',
                          ],
                          default: 'default',
                          maxLength: 2048,
                        },
                        textContentType: {
                          type: 'string',
                          description: 'A string value representing the keyboard and system information',
                          enum: [
                            'name',
                            'namePrefix',
                            'givenName',
                            'middleName',
                            'familyName',
                            'nameSuffix',
                            'nickname',
                            'jobTitle',
                            'organizationName',
                            'location',
                            'fullStreetAddress',
                            'streetAddressLine1',
                            'streetAddressLine2',
                            'addressCity',
                            'addressState',
                            'addressCityAndState',
                            'sublocality',
                            'countryName',
                            'postalCode',
                            'telephoneNumber',
                            'emailAddress',
                            'URL',
                            'creditCardNumber',
                            'username',
                            'password',
                            'newPassword',
                            'oneTimeCode',
                          ],
                          maxLength: 2048,
                        },
                      },
                    },
                  },
                },
              },
              images: {
                type: 'array',
                maxItems: 256,
                items: {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    imageUrl: {
                      type: 'string',
                      maxLength: 2048,
                    },
                    id: {
                      type: 'string',
                      maxLength: 2048,
                    },
                  },
                  required: ['imageUrl', 'id'],
                },
              },
            },
            required: ['type'],
          },
        ],
      },
    },
  },
};

const expectedSchemaQuickReplyAbc = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'abcQuickReplyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      required: ['type', 'itemsPerRow', 'replies'],
      properties: {
        type: { type: 'string', enum: ['quickReplies'], default: 'quickReplies', readonly: true },
        itemsPerRow: { type: 'integer', min: 1, max: 8 },
        replies: {
          oneOf: [
            {
              minItems: 1,
              maxItems: 13,
              items: {
                type: 'object',
                $schema: 'http://json-schema.org/draft-07/schema#',
                title: 'abcButtonQuickReply',
                required: ['type', 'title'],
                additionalProperties: false,
                properties: {
                  type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                  title: { type: 'string', maxLength: 25 },
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
  bdyDatePickerAbc,
  bdyVerticalCardAbc,
  bdyVerticalCardOnlyImageAbc,
  bdyVerticalCardOnlyButtonAbc,
  bdyVerticalCardTwoButtonsAbc,
  bdyVerticalCardTwoImagesAbc,
  mdListPickerAbc,
  mdDatePickerAbc,
  bdyListPickerAbc,
  bdyListPickerOneOptionAbc,
  mdListPickerOneOptionAbc,
  bdyListPickerMultipleOptionsAbc,
  mdListPickerMultipleOptionsAbc,
  bdyListPickerWithoutImagesAbc,
  mdListPickerWithoutImagesAbc,
  bdyListPickerWithImagesAbc,
  mdListPickerWithImagesAbc,
  bdyListPickerWithoutButtonsAbc,
  mdListPickerWithoutButtonsAbc,
  mdUndefinedReceivedReplyMessagesAbc,
  mdNoReceivedReplyMessagesAbc,
  bdyListPickerMultiSelectAbc,
  mdListPickerMultiSelectAbc,
  bdyListPickerMultiSelectPerSectionAbc,
  mdListPickerMultiSelectPerSectionAbc,
  bdyListPickerMultiOptionsPerSectionAbc,
  mdListPickerMultiOptionsPerSectionAbc,
  bdyListPickerButtonMissingTitleAbc,
  bdyListPickerMissingEntryDefTitleAbc,
  bdyListPickerMissingEntryDefButtonAbc,
  bdyListPickerMissingEntryDefSubtitleAbc,
  bdyCustomMessag1eAbc,
  mdCustomMessage1Abc,
  bdyCustomMessage2Abc,
  mdCustomMessage2Abc,
  bdyCustomMessage3Abc,
  mdCustomMessage3Abc,
  bdyListPickerLargeAbc,
  mdListPickerLargeAbc,
  bdyDatePickerOneOptionAbc,
  mdDatePickerOneOptionAbc,
  bdyDatePickerMoreOptionsAbc,
  mdDatePickerMoreOptionsAbc,
  bdyDatePickerPastDateAbc,
  bdyAuthenticationAbc,
  mdAuthenticationAbc,
  mdAuthenticationWithImageAbc,
  mdAuthenticationWithResponseEncryptionKeyAbc,
  bdyApplePayAbc,
  mdApplePayAbc,
  bdyQuickReplyAbc,
  expectedSchemaBodyAbc,
  expectedSchemaMetadataAbc,
  expectedSchemaQuickReplyAbc,
  mdFormAbc,
  mdCBBotResponseAbc,
  mdBotResponseAbc,
  bdyFormAbc,
};
