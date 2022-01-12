import { Channels, ITestJson, Types } from '../../src/types';

const bdyVerticalCardLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            tag: 'title',
            text: 'This is the New Japan Lion',
            tooltip: 'Roar!',
          },
          {
            type: 'text',
            tag: 'subtitle',
            text: 'He likes to Roar',
            tooltip: 'Roar!',
          },
          {
            type: 'button',
            tooltip: 'Click me!',
            title: 'New Japan',
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
          {
            type: 'image',
            url:
              'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
            caption: 'I am a Caption',
            click: {},
          },
        ],
      },
    ],
    tag: 'generic',
    alt: 'Pssst Kid, wanna now something bout New Japan?',
  },
});

const bdyCarouselComplexLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: true,
    [Channels.ABC]: true,
    [Channels.LINE]: true,
    [Channels.RBM]: true,
    [Channels.WEB]: true,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    elements: [
      {
        type: 'horizontal',
        elements: [
          {
            type: 'horizontal',
            elements: [
              {
                type: 'text',
                text: 'This is the New Japan Lion',
                tooltip: 'Roar!',
                tag: 'title',
              },
              {
                type: 'text',
                tooltip: 'Roar!',
                tag: 'subtitle',
                text: 'He likes to Roar',
              },
              {
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
                title: 'New Japan',
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
        ],
        tag: 'generic',
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'This is the New Japan Lion',
                tooltip: 'Roar!',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'He likes to Roar',
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
            ],
          },
        ],
      },
    ],
    padding: 10,
    alt: 'Pssst Kid, wanna now something bout New Japan?',
  },
});

const qrQuickRepliesTextOnlyLine = (): ITestJson => ({
  richContentType: Types.QUR,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'quickReplies',
    itemsPerRow: 4,
    replies: [
      { type: 'button', tooltip: 'yes I do', title: 'yes', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
      { type: 'button', tooltip: 'hmmm maybe?', title: 'hmmm maybe?', click: { actions: [{ type: 'publishText', text: 'hmmm maybe?' }] } },
      {
        type: 'button',
        tooltip: 'what is that?',
        title: 'what is that?',
        click: { actions: [{ type: 'publishText', text: 'what is that?' }] },
      },
      { type: 'button', tooltip: 'whattttttt', title: 'whatttttt', click: { actions: [{ type: 'publishText', text: 'whatttttt' }] } },
      { type: 'button', tooltip: 'no', title: 'nope', click: { actions: [{ type: 'publishText', text: 'nope' }] } },
      { type: 'button', tooltip: 'no way!', title: 'no way!', click: { actions: [{ type: 'publishText', text: 'no way!' }] } },
    ],
  },
});

const qrQuickRepliesWithEmojisLine = (): ITestJson => ({
  richContentType: Types.QUR,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'quickReplies',
    itemsPerRow: 4,
    replies: [
      { type: 'button', tooltip: 'yes I do 🤩', title: 'yes 🤩', click: { actions: [{ type: 'publishText', text: 'yep 🤩' }] } },
      {
        type: 'button',
        tooltip: 'hmmm maybe?',
        title: 'hmmm maybe? 😏',
        click: { actions: [{ type: 'publishText', text: 'hmmm maybe? 😏' }] },
      },
      {
        type: 'button',
        tooltip: 'what is that?',
        title: 'what is that? 🧐 ',
        click: { actions: [{ type: 'publishText', text: 'what is that? 🧐' }] },
      },
      { type: 'button', tooltip: 'whattttttt', title: 'whatttttt 🧐', click: { actions: [{ type: 'publishText', text: 'whatttttt 🧐' }] } },
      { type: 'button', tooltip: 'no', title: 'nope 😫', click: { actions: [{ type: 'publishText', text: 'nope 😫' }] } },
      { type: 'button', tooltip: 'no way!', title: 'no way! 🤮', click: { actions: [{ type: 'publishText', text: 'no way! 🤮' }] } },
    ],
  },
});

const bdyCardWithoutImageOrTitleLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'Please look at these!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            tag: 'subtitle',
            text:
              'An eye-catching birthday flower delivery, hand-delivered by a local florist, is the perfect way to say Happy Birthday!!!',
            tooltip: 'Title',
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
        ],
      },
    ],
  },
});

const bdyCardWithImageTitleSubtitleLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,

  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'these are on sale!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'image',
            url: 'https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg',
            tooltip: 'Flowers',
          },
          { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Title' },
          { type: 'text', tag: 'subtitle', text: 'An eye-catching birthday flower delivery, hand-delivered by?', tooltip: 'subtitle' },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
        ],
      },
    ],
  },
});

const bdyCardWithTooLongSubtitle1Line = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  description: 'JSON should fail because its subtitle text has more than 120 characters while not containing a title/ picture',
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: false,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'Please look at these!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'text',
            tag: 'subtitle',
            text:
              'An eye-catching birthday flower delivery, hand-delivered by a local florist, is the perfect way to say Happy Birthday!!!!',
            tooltip: 'Title',
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
        ],
      },
    ],
  },
});

const bdyCardWithTooLongSubtitle2Line = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  description: 'JSON should fail because its subtitle text has more than 60 characters while containing a title/ picture',
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: false,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'these are on sale!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'image',
            url: 'https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg',
            tooltip: 'Flowers',
          },
          { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Title' },
          { type: 'text', tag: 'subtitle', text: 'An eye-catching birthday flower delivery, hand-delivered by!?', tooltip: 'subtitle' },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
        ],
      },
    ],
  },
});

const bdyCardWorkingLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'these are on sale!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'image',
            url: 'https://66.media.tumblr.com/0ceee671b396b2470b246fd4a5fd24ef/tumblr_mlbf4zInqu1qlmanko1_400.jpg',
            tooltip: 'Friedemann Bühler',
          },
          { type: 'text', tag: 'title', text: 'Friedemann Bühler', tooltip: 'Friedemann Bühler' },
          { type: 'text', tag: 'subtitle', text: 'Red bowl - $19.99', tooltip: 'Red bowl - $19.99' },
          {
            type: 'button',
            tooltip: 'Order now',
            title: 'Order now',
            click: { actions: [{ type: 'publishText', text: 'Friedemann Bühler Red bowl for $19.99' }] },
          },
          {
            type: 'button',
            tooltip: 'More details',
            title: 'More details',
            click: { actions: [{ type: 'link', uri: 'https://www.pinterest.com/pin/54043264251448963/' }] },
          },
        ],
      },
    ],
  },
});

const bdyCardWith4ButtonsLine = (): ITestJson => ({
  debug: true,
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'these are on sale!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'image',
            url: 'https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg',
            tooltip: 'Flowers',
          },
          { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Title' },
          { type: 'text', tag: 'subtitle', text: 'An eye-catching birthday flower delivery, hand-delivered by?', tooltip: 'subtitle' },
          {
            type: 'button',
            tooltip: 'URL button example',
            title: 'URL button example',
            click: { actions: [{ type: 'link', name: 'URL button tap', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
        ],
      },
    ],
  },
});

const bdyCardWith5ButtonsLine = (): ITestJson => ({
  debug: true,
  richContentType: Types.BDY,
  channel: Channels.LINE,
  description: 'This JSON should fail because it contains 5 Buttons. (One too many)',
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: false,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'these are on sale!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'image',
            url: 'https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg',
            tooltip: 'Flowers',
          },
          {
            type: 'text',
            tag: 'title',
            text: 'Birthday Bouquet',
            tooltip: 'Title',
          },
          {
            type: 'text',
            tag: 'subtitle',
            text: 'An eye-catching birthday flower delivery, hand-delivered by?',
            tooltip: 'subtitle',
          },
          {
            type: 'button',
            tooltip: 'URL button example',
            title: 'URL button example',
            click: {
              actions: [
                {
                  type: 'link',
                  name: 'URL button tap',
                  uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
                },
              ],
            },
          },
          {
            type: 'button',
            tooltip: 'URL button example',
            title: 'URL button example',
            click: {
              actions: [
                {
                  type: 'link',
                  name: 'URL button tap',
                  uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
                },
              ],
            },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: {
              actions: [
                {
                  type: 'publishText',
                  text: 'published text button tap',
                },
              ],
            },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: {
              actions: [
                {
                  type: 'publishText',
                  text: 'published text button tap',
                },
              ],
            },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: {
              actions: [
                {
                  type: 'publishText',
                  text: 'published text button tap',
                },
              ],
            },
          },
        ],
      },
    ],
  },
});

const bdyCarouselWith2ButtonCardsLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCarouselWith3ButtonCardsLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCarouselWith4ButtonCardsLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: false,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'An eye-catching birthday flower delivery, hand-delivered by?',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCarouselWithoutImageAndTitleLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'subtitle',
                text:
                  'An eye-catching birthday flower delivery, hand-delivered by a local florist, is the perfect way to say Happy Birthday!!!',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'subtitle',
                text:
                  'An eye-catching birthday flower delivery, hand-delivered by a local florist, is the perfect way to say Happy Birthday!!!',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'subtitle',
                text:
                  'An eye-catching birthday flower delivery, hand-delivered by a local florist, is the perfect way to say Happy Birthday!!!',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'subtitle',
                text:
                  'An eye-catching birthday flower delivery, hand-delivered by a local florist, is the perfect way to say Happy Birthday!!!',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'subtitle',
                text:
                  'An eye-catching birthday flower delivery, hand-delivered by a local florist, is the perfect way to say Happy Birthday!!!',
                tooltip: 'An eye-catching birthday flower delivery, hand-delivered by?',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add to cart pressed' }] },
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCarouselWith10CardsLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    padding: 10,
  },
});

const bdyCarouselWith11CardsLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  description: 'This JSON should fail because it contains 11 Cards. (One too many)',
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: false,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'text',
                tag: 'title',
                text: 'Birthday Bouquet',
                tooltip: 'Birthday Bouquet',
              },
              {
                type: 'text',
                tag: 'subtitle',
                text: 'Wild flowers - $9.99',
                tooltip: 'Wild flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: {
                  actions: [
                    {
                      type: 'publishText',
                      text: 'Add wild flowers to cart',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    padding: 10,
  },
});

const bdyCarouselRandom1Line = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/474x/8e/8e/ee/8e8eee8a4865d8b297048e661a1d6821--pottery-clay-pottery-bowls.jpg',
                tooltip: 'pottery clay bowl',
              },
              { type: 'text', tag: 'title', text: 'Pottery Clay - $39.99', tooltip: 'Pottery Clay' },
              { type: 'text', tag: 'subtitle', text: 'Bowl-Cut yellow ash glaze ', tooltip: 'Bowl-Cut yellow ash glaze' },
              {
                type: 'button',
                tooltip: 'Order now',
                title: 'Order now',
                click: { actions: [{ type: 'publishText', text: 'Order bowl-cut yellow ash glaze - $39.99' }] },
              },
              {
                type: 'button',
                tooltip: 'More details',
                title: 'More details',
                click: {
                  actions: [{ type: 'link', name: 'Bowl-cut yellow ash', uri: 'https://www.pinterest.com/pin/454089574912899360' }],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/474x/a4/eb/c9/a4ebc948ccf4b2f63cc35088193af63d--ceramic-studio-pinch-pots.jpg',
                tooltip: 'Ceramic Studio - $49.99',
              },
              { type: 'text', tag: 'title', text: 'Ceramic Studio - $49.99', tooltip: 'Ceramic Studio - $49.99' },
              { type: 'text', tag: 'subtitle', text: 'Pinch pot', tooltip: 'Pinch pot' },
              {
                type: 'button',
                tooltip: 'Order now',
                title: 'Order now',
                click: { actions: [{ type: 'publishText', text: 'Order Pinch pot - $49.99' }] },
              },
              {
                type: 'button',
                tooltip: 'More details',
                title: 'More details',
                click: { actions: [{ type: 'link', name: 'Pinch pot', uri: 'https://www.pinterest.com/pin/496381190157394080/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCarouselRandom2Line = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Wild flowers - $9.99', tooltip: 'Wild flowers' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add wild flowers to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Blue Bridal Bouquet - $9.99', tooltip: 'Blue Bridal Bouquet' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add blue-bouquets to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Pink Floral Bouquets - $9.99', tooltip: 'Pink Floral Bouquet - $9.99' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add pink-floral-bouquet to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add pink-peonies-bouquet to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
              { type: 'text', tag: 'subtitle', text: 'Pink Peonies Bouquet - $9.99', tooltip: 'Pink Peonies Bouquet - $9.99' },
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              { type: 'text', tag: 'subtitle', text: 'Wild flowers  - $9.99', tooltip: 'Wild flowers- $9.99' },
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add wild flowers to cart' }] },
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCardWithDisplayPropertyLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'these are on sale!',
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'image',
            url: 'https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg',
            tooltip: 'Flowers',
          },
          { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Title' },
          { type: 'text', tag: 'subtitle', text: 'An eye-catching birthday flower delivery, hand-delivered by?', tooltip: 'subtitle' },
          {
            type: 'button',
            tooltip: 'URL button example',
            title: 'URL button example',
            click: { actions: [{ type: 'link', name: 'URL button tap', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
        ],
      },
    ],
    display: {
      aspectRatio: 'rectangle',
      size: 'cover',
    },
  },
});

const bdyCarouselWithDisplayPropertyLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: true,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    display: {
      aspectRatio: 'rectangle',
      size: 'cover',
    },
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Wild flowers - $9.99', tooltip: 'Wild flowers' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add wild flowers to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Blue Bridal Bouquet - $9.99', tooltip: 'Blue Bridal Bouquet' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add blue-bouquets to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Pink Floral Bouquets - $9.99', tooltip: 'Pink Floral Bouquet - $9.99' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add pink-floral-bouquet to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add pink-peonies-bouquet to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
              { type: 'text', tag: 'subtitle', text: 'Pink Peonies Bouquet - $9.99', tooltip: 'Pink Peonies Bouquet - $9.99' },
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              { type: 'text', tag: 'subtitle', text: 'Wild flowers  - $9.99', tooltip: 'Wild flowers- $9.99' },
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add wild flowers to cart' }] },
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const bdyCardWithWrongDisplayPropertyLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: false,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'vertical',
    tag: 'generic',
    alt: 'these are on sale!',
    display: {
      aspectRatio: 'kurtangle or something other ridiculous',
      size: 'cover',
    },
    elements: [
      {
        type: 'vertical',
        elements: [
          {
            type: 'image',
            url: 'https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg',
            tooltip: 'Flowers',
          },
          { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Title' },
          { type: 'text', tag: 'subtitle', text: 'An eye-catching birthday flower delivery, hand-delivered by?', tooltip: 'subtitle' },
          {
            type: 'button',
            tooltip: 'URL button example',
            title: 'URL button example',
            click: { actions: [{ type: 'link', name: 'URL button tap', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
          {
            type: 'button',
            tooltip: 'publish text example',
            title: 'publish text example',
            click: { actions: [{ type: 'publishText', text: 'published text button tap' }] },
          },
        ],
      },
    ],
  },
});

const bdyCarouselWithWrongDisplayPropertyLine = (): ITestJson => ({
  richContentType: Types.BDY,
  channel: Channels.LINE,
  channelCompatibility: {
    [Channels.FB]: undefined,
    [Channels.ABC]: undefined,
    [Channels.LINE]: false,
    [Channels.RBM]: undefined,
    [Channels.WEB]: undefined,
    [Channels.GBM]: undefined,
  },
  json: {
    type: 'carousel',
    padding: 10,
    alt: 'Check these out!',
    display: {
      aspectRatio: 'rectangle',
      size: 'Huuuuuuge! :)',
    },
    elements: [
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Wild flowers - $9.99', tooltip: 'Wild flowers' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add wild flowers to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Blue Bridal Bouquet - $9.99', tooltip: 'Blue Bridal Bouquet' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add blue-bouquets to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              { type: 'text', tag: 'subtitle', text: 'Pink Floral Bouquets - $9.99', tooltip: 'Pink Floral Bouquet - $9.99' },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add pink-floral-bouquet to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add pink-peonies-bouquet to cart' }] },
              },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
              { type: 'text', tag: 'subtitle', text: 'Pink Peonies Bouquet - $9.99', tooltip: 'Pink Peonies Bouquet - $9.99' },
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                tooltip: 'Flowers',
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
            ],
          },
        ],
      },
      {
        type: 'vertical',
        tag: 'generic',
        elements: [
          {
            type: 'vertical',
            elements: [
              { type: 'text', tag: 'subtitle', text: 'Wild flowers  - $9.99', tooltip: 'Wild flowers- $9.99' },
              {
                type: 'image',
                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                tooltip: 'Flowers',
              },
              {
                type: 'button',
                tooltip: 'Add to cart',
                title: 'Add to cart',
                click: { actions: [{ type: 'publishText', text: 'Add wild flowers to cart' }] },
              },
              { type: 'text', tag: 'title', text: 'Birthday Bouquet', tooltip: 'Birthday Bouquet' },
              {
                type: 'button',
                tooltip: 'View more',
                title: 'View more',
                click: { actions: [{ type: 'link', name: 'Flowers', uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/' }] },
              },
            ],
          },
        ],
      },
    ],
  },
});

const expectedSchemaBodyLine = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'lineBodyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      oneOf: [
        {
          title: 'lineCardStandAlone',
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          additionalProperties: false,
          required: ['type', 'elements', 'alt', 'tag'],
          properties: {
            type: {
              type: 'string',
              enum: ['vertical', 'horizontal'],
              default: 'vertical',
              readonly: true,
            },
            alt: {
              minLength: 1,
              maxLength: 1500,
              type: 'string',
            },
            tag: {
              type: 'string',
              enum: ['generic'],
              default: 'generic',
              readonly: true,
            },
            display: {
              title: 'lineDisplaySettings',
              $schema: 'http://json-schema.org/draft-07/schema#',
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
            elements: {
              type: 'array',
              maxItems: 1,
              items: {
                type: 'object',
                required: ['type', 'elements'],
                properties: {
                  type: {
                    type: 'string',
                    enum: ['vertical', 'horizontal'],
                    default: 'vertical',
                    readonly: true,
                  },
                  elements: {
                    oneOf: [
                      {
                        title: 'lineButtonTemplateElementOrder1',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'array',
                        minItems: 4,
                        maxItems: 7,
                        items: [
                          {
                            title: 'lineImage',
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
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'lineTitle',
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
                                maxLength: 40,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'lineSubtitleShort',
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
                                maxLength: 60,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'lineButton',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            required: ['click', 'title', 'type'],
                            properties: {
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                              title: {
                                type: 'string',
                                maxLength: 128,
                              },
                              type: {
                                type: 'string',
                                enum: ['button'],
                                default: 'button',
                                readonly: true,
                              },
                              click: {
                                title: 'lineClickOperations',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    title: 'lineClickMetadata',
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
                                          title: 'lineClickActionPublishText',
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
                                          title: 'lineClickActionLink',
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
                        additionalItems: {
                          title: 'lineButton',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          required: ['click', 'title', 'type'],
                          properties: {
                            tooltip: {
                              type: 'string',
                              maxLength: 256,
                            },
                            title: {
                              type: 'string',
                              maxLength: 128,
                            },
                            type: {
                              type: 'string',
                              enum: ['button'],
                              default: 'button',
                              readonly: true,
                            },
                            click: {
                              title: 'lineClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'lineClickMetadata',
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
                                        title: 'lineClickActionPublishText',
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
                                        title: 'lineClickActionLink',
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
                      },
                      {
                        title: 'lineButtonTemplateElementOrder2',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'array',
                        minItems: 3,
                        maxItems: 6,
                        items: [
                          {
                            oneOf: [
                              {
                                title: 'lineTitle',
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
                                    maxLength: 40,
                                  },
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                },
                              },
                              {
                                title: 'lineImage',
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
                                    maxLength: 256,
                                  },
                                },
                              },
                            ],
                          },
                          {
                            title: 'lineSubtitleShort',
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
                                maxLength: 60,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'lineButton',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            required: ['click', 'title', 'type'],
                            properties: {
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                              title: {
                                type: 'string',
                                maxLength: 128,
                              },
                              type: {
                                type: 'string',
                                enum: ['button'],
                                default: 'button',
                                readonly: true,
                              },
                              click: {
                                title: 'lineClickOperations',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    title: 'lineClickMetadata',
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
                                          title: 'lineClickActionPublishText',
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
                                          title: 'lineClickActionLink',
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
                        additionalItems: {
                          title: 'lineButton',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          required: ['click', 'title', 'type'],
                          properties: {
                            tooltip: {
                              type: 'string',
                              maxLength: 256,
                            },
                            title: {
                              type: 'string',
                              maxLength: 128,
                            },
                            type: {
                              type: 'string',
                              enum: ['button'],
                              default: 'button',
                              readonly: true,
                            },
                            click: {
                              title: 'lineClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'lineClickMetadata',
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
                                        title: 'lineClickActionPublishText',
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
                                        title: 'lineClickActionLink',
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
                      },
                      {
                        title: 'lineButtonTemplateElementOrder3',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'array',
                        minItems: 2,
                        maxItems: 5,
                        items: [
                          {
                            title: 'lineSubtitleLong',
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
                                maxLength: 120,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'lineButton',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            required: ['click', 'title', 'type'],
                            properties: {
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                              title: {
                                type: 'string',
                                maxLength: 128,
                              },
                              type: {
                                type: 'string',
                                enum: ['button'],
                                default: 'button',
                                readonly: true,
                              },
                              click: {
                                title: 'lineClickOperations',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    title: 'lineClickMetadata',
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
                                          title: 'lineClickActionPublishText',
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
                                          title: 'lineClickActionLink',
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
                        additionalItems: {
                          title: 'lineButton',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          type: 'object',
                          required: ['click', 'title', 'type'],
                          properties: {
                            tooltip: {
                              type: 'string',
                              maxLength: 256,
                            },
                            title: {
                              type: 'string',
                              maxLength: 128,
                            },
                            type: {
                              type: 'string',
                              enum: ['button'],
                              default: 'button',
                              readonly: true,
                            },
                            click: {
                              title: 'lineClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'lineClickMetadata',
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
                                        title: 'lineClickActionPublishText',
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
                                        title: 'lineClickActionLink',
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
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        {
          title: 'lineCarousel',
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
              enum: ['generic'],
              default: 'generic',
              readonly: true,
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
                title: 'lineCardInCarousel',
                $schema: 'http://json-schema.org/draft-07/schema#',
                type: 'object',
                additionalProperties: false,
                required: ['type', 'elements', 'tag'],
                properties: {
                  type: {
                    type: 'string',
                    enum: ['vertical', 'horizontal'],
                    default: 'vertical',
                    readonly: true,
                  },
                  alt: {
                    minLength: 1,
                    maxLength: 1500,
                    type: 'string',
                  },
                  tag: {
                    type: 'string',
                    enum: ['generic'],
                    default: 'generic',
                    readonly: true,
                  },
                  elements: {
                    type: 'array',
                    maxItems: 1,
                    items: {
                      type: 'object',
                      required: ['type', 'elements'],
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['vertical', 'horizontal'],
                          default: 'vertical',
                          readonly: true,
                        },
                        elements: {
                          oneOf: [
                            {
                              title: 'lineCardElementOrder1',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'array',
                              minItems: 4,
                              maxItems: 6,
                              items: [
                                {
                                  title: 'lineImage',
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
                                      maxLength: 256,
                                    },
                                  },
                                },
                                {
                                  title: 'lineTitle',
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
                                      maxLength: 40,
                                    },
                                    tooltip: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                  },
                                },
                                {
                                  title: 'lineSubtitleShort',
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
                                      maxLength: 60,
                                    },
                                    tooltip: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                  },
                                },
                                {
                                  title: 'lineButton',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  type: 'object',
                                  required: ['click', 'title', 'type'],
                                  properties: {
                                    tooltip: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                    title: {
                                      type: 'string',
                                      maxLength: 128,
                                    },
                                    type: {
                                      type: 'string',
                                      enum: ['button'],
                                      default: 'button',
                                      readonly: true,
                                    },
                                    click: {
                                      title: 'lineClickOperations',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        metadata: {
                                          title: 'lineClickMetadata',
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
                                                title: 'lineClickActionPublishText',
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
                                                title: 'lineClickActionLink',
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
                              additionalItems: {
                                title: 'lineButton',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['click', 'title', 'type'],
                                properties: {
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                  title: {
                                    type: 'string',
                                    maxLength: 128,
                                  },
                                  type: {
                                    type: 'string',
                                    enum: ['button'],
                                    default: 'button',
                                    readonly: true,
                                  },
                                  click: {
                                    title: 'lineClickOperations',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                      metadata: {
                                        title: 'lineClickMetadata',
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
                                              title: 'lineClickActionPublishText',
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
                                              title: 'lineClickActionLink',
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
                            },
                            {
                              title: 'lineCardElementOrder2',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'array',
                              minItems: 3,
                              maxItems: 5,
                              items: [
                                {
                                  oneOf: [
                                    {
                                      title: 'lineTitle',
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
                                          maxLength: 40,
                                        },
                                        tooltip: {
                                          type: 'string',
                                          maxLength: 256,
                                        },
                                      },
                                    },
                                    {
                                      title: 'lineImage',
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
                                          maxLength: 256,
                                        },
                                      },
                                    },
                                  ],
                                },
                                {
                                  title: 'lineSubtitleShort',
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
                                      maxLength: 60,
                                    },
                                    tooltip: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                  },
                                },
                                {
                                  title: 'lineButton',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  type: 'object',
                                  required: ['click', 'title', 'type'],
                                  properties: {
                                    tooltip: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                    title: {
                                      type: 'string',
                                      maxLength: 128,
                                    },
                                    type: {
                                      type: 'string',
                                      enum: ['button'],
                                      default: 'button',
                                      readonly: true,
                                    },
                                    click: {
                                      title: 'lineClickOperations',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        metadata: {
                                          title: 'lineClickMetadata',
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
                                                title: 'lineClickActionPublishText',
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
                                                title: 'lineClickActionLink',
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
                              additionalItems: {
                                title: 'lineButton',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['click', 'title', 'type'],
                                properties: {
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                  title: {
                                    type: 'string',
                                    maxLength: 128,
                                  },
                                  type: {
                                    type: 'string',
                                    enum: ['button'],
                                    default: 'button',
                                    readonly: true,
                                  },
                                  click: {
                                    title: 'lineClickOperations',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                      metadata: {
                                        title: 'lineClickMetadata',
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
                                              title: 'lineClickActionPublishText',
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
                                              title: 'lineClickActionLink',
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
                            },
                            {
                              title: 'lineCardElementOrder3',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'array',
                              minItems: 2,
                              maxItems: 4,
                              items: [
                                {
                                  title: 'lineSubtitleLong',
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
                                      maxLength: 120,
                                    },
                                    tooltip: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                  },
                                },
                                {
                                  title: 'lineButton',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  type: 'object',
                                  required: ['click', 'title', 'type'],
                                  properties: {
                                    tooltip: {
                                      type: 'string',
                                      maxLength: 256,
                                    },
                                    title: {
                                      type: 'string',
                                      maxLength: 128,
                                    },
                                    type: {
                                      type: 'string',
                                      enum: ['button'],
                                      default: 'button',
                                      readonly: true,
                                    },
                                    click: {
                                      title: 'lineClickOperations',
                                      $schema: 'http://json-schema.org/draft-07/schema#',
                                      type: 'object',
                                      additionalProperties: false,
                                      properties: {
                                        metadata: {
                                          title: 'lineClickMetadata',
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
                                                title: 'lineClickActionPublishText',
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
                                                title: 'lineClickActionLink',
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
                              additionalItems: {
                                title: 'lineButton',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['click', 'title', 'type'],
                                properties: {
                                  tooltip: {
                                    type: 'string',
                                    maxLength: 256,
                                  },
                                  title: {
                                    type: 'string',
                                    maxLength: 128,
                                  },
                                  type: {
                                    type: 'string',
                                    enum: ['button'],
                                    default: 'button',
                                    readonly: true,
                                  },
                                  click: {
                                    title: 'lineClickOperations',
                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                      metadata: {
                                        title: 'lineClickMetadata',
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
                                              title: 'lineClickActionPublishText',
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
                                              title: 'lineClickActionLink',
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
                            },
                          ],
                        },
                      },
                    },
                  },
                },
              },
            },
            alt: {
              minLength: 1,
              maxLength: 1500,
              type: 'string',
            },
            display: {
              title: 'lineDisplaySettings',
              $schema: 'http://json-schema.org/draft-07/schema#',
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
          required: ['type', 'alt', 'elements'],
        },
      ],
    },
  },
};

const expectedSchemaMetadataLine = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'lineMetadataRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
    },
  },
};

const expectedSchemaQuickrepliesLine = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'lineQuickReplyRoot',
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
          maxItems: 13,
          items: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            title: 'lineQuickReplyButton',
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
                maxLength: 128,
              },
              click: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                title: 'lineQuickReplyActions',
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
  bdyCarouselWithoutImageAndTitleLine,
  bdyCarouselWith11CardsLine,
  bdyCarouselWith10CardsLine,
  bdyCarouselRandom1Line,
  bdyCarouselRandom2Line,
  bdyCardWorkingLine,
  bdyCarouselWith2ButtonCardsLine,
  bdyCarouselWith3ButtonCardsLine,
  bdyCarouselWith4ButtonCardsLine,
  bdyCardWithTooLongSubtitle2Line,
  bdyCardWithImageTitleSubtitleLine,
  bdyCardWithTooLongSubtitle1Line,
  bdyCardWithoutImageOrTitleLine,
  bdyCarouselComplexLine,
  bdyCardWith4ButtonsLine,
  bdyCardWith5ButtonsLine,
  bdyCardWithDisplayPropertyLine,
  bdyCarouselWithDisplayPropertyLine,
  qrQuickRepliesWithEmojisLine,
  bdyVerticalCardLine,
  qrQuickRepliesTextOnlyLine,
  bdyCardWithWrongDisplayPropertyLine,
  bdyCarouselWithWrongDisplayPropertyLine,
  expectedSchemaBodyLine,
  expectedSchemaMetadataLine,
  expectedSchemaQuickrepliesLine,
};
