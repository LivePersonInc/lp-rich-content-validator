import { Channels, ITestJson, Types } from '../../src/types';

const qrQuickRepliesSpecialCharactersViber = (): ITestJson => ({
    richContentType: Types.QUR,
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
        type: 'quickReplies',
        itemsPerRow: 8,
        replies: [
            { type: 'button', tooltip: 'yes i do', title: '!@#$%', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'no way', title: '!@#$%^', click: { actions: [{ type: 'publishText', text: 'nope' }] } },
        ],
    },
});

const qrQuickReplies11ButtonsViber = (): ITestJson => ({
    richContentType: Types.QUR,
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
        type: 'quickReplies',
        itemsPerRow: 8,
        replies: [
            { type: 'button', tooltip: 'yes i do', title: 'Button 1', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: ' Button 2', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 3', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 4', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 5', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 6', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 7', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 8', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 9', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'Button 10', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'no way', title: 'Button 11', click: { actions: [{ type: 'publishText', text: 'nope' }] } },
        ],
    },
});

const qrQuickReplies12ButtonsViber = (): ITestJson => ({
    richContentType: Types.QUR,
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
        type: 'quickReplies',
        itemsPerRow: 8,
        replies: [
            { type: 'button', tooltip: 'yes i do', title: 'button 1', click: { actions: [{ type: 'publishText', text: 'button 1' }] } },
            { type: 'button', tooltip: 'yes i do', title: 'hi 2', click: { actions: [{ type: 'publishText', text: 'button 2' }] } },
            { type: 'button', tooltip: 'yes i do', title: '** 3', click: { actions: [{ type: 'publishText', text: 'button 3' }] } },
            { type: 'button', tooltip: 'yes i do', title: '4', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: '5', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: '6', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: '7', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: '8', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: '9', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: '10', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'yes i do', title: '11', click: { actions: [{ type: 'publishText', text: 'yep' }] } },
            { type: 'button', tooltip: 'no way', title: '12', click: { actions: [{ type: 'publishText', text: 'nope' }] } },
        ],
    },
});

const qrQuickReply26CharsViber = (): ITestJson => ({
    richContentType: Types.QUR,
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
        type: 'quickReplies',
        itemsPerRow: 8,
        replies: [
            {
                type: 'button',
                tooltip: 'no way',
                title: 'asdafjsdfksafjsdfhsjdfsah1',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'nope',
                        },
                    ],
                },
            },
        ],
    },
});

const qrQuickReply25CharsViber = (): ITestJson => ({
    richContentType: Types.QUR,
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
        type: 'quickReplies',
        itemsPerRow: 8,
        replies: [
            {
                type: 'button',
                tooltip: 'no way',
                title: 'asdafjsdfksafjsdfhsjdfsah',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'nope',
                        },
                    ],
                },
            },
        ],
    },
});

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
        tag: 'generic',
        elements: [
            {
                type: 'image',
                url:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                tooltip: 'image tooltip',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store via image',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                tag: 'title',
                type: 'text',
                text: 'IPhone 8',
                tooltip: 'brand new iphone 8',
            },
            {
                tag: 'subtitle',
                type: 'text',
                text: 'Now on sale!',
            },
            {
                type: 'button',
                title: 'Add to cart',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'publish stuff',
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                tooltip: 'store is the thing',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'More details',
                click: {
                    actions: [
                        {
                            type: 'link',
                            uri: 'https://www.google.com',
                            name: 'open browser',
                        },
                    ],
                },
            },
        ],
    },
});

const bdyVerticalCardTooLongButtonViber = (): ITestJson => ({
    richContentType: Types.BDY,
    description: 'This vertical card will be rejected on Viber, because a button title contains more than 25 chars',
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
        tag: 'generic',
        elements: [
            {
                type: 'image',
                url:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                tooltip: 'image tooltip',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store via image',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                tag: 'title',
                type: 'text',
                text: 'IPhone 8',
                tooltip: 'brand new iphone 8',
            },
            {
                tag: 'subtitle',
                type: 'text',
                text: 'Now on sale!',
            },
            {
                type: 'button',
                title: 'asdafjsdfksafjsdfhsjdfsah1',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'publish stuff',
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                tooltip: 'store is the thing',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'More details',
                click: {
                    actions: [
                        {
                            type: 'link',
                            uri: 'https://www.google.com',
                            name: 'open browser',
                        },
                    ],
                },
            },
        ],
    },
});

const bdyHorizontalCardNotSupportedViber = (): ITestJson => ({
    richContentType: Types.BDY,
    description: 'This horizontal card will be rejected on Viber because horitzonal cards are not supported',
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
        type: 'horizontal',
        tag: 'generic',
        elements: [
            {
                type: 'image',
                url:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                tooltip: 'image tooltip',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store via image',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                tag: 'title',
                type: 'text',
                text: 'IPhone 8',
                tooltip: 'brand new iphone 8',
            },
            {
                tag: 'subtitle',
                type: 'text',
                text: 'Now on sale!',
            },
            {
                type: 'button',
                title: 'asdafjsdfksafjsdfhsjdfsah1',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'publish stuff',
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                tooltip: 'store is the thing',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'More details',
                click: {
                    actions: [
                        {
                            type: 'link',
                            uri: 'https://www.google.com',
                            name: 'open browser',
                        },
                    ],
                },
            },
        ],
    },
});

const bdyVerticalCardWithoutImageViber = (): ITestJson => ({
    richContentType: Types.BDY,
    description: 'This vertical card will work on Viber, because eventhough missing an image, there is still a title.',
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
        tag: 'generic',
        elements: [
            {
                tag: 'title',
                type: 'text',
                text: 'IPhone 8',
                tooltip: 'brand new iphone 8',
            },
            {
                tag: 'subtitle',
                type: 'text',
                text: 'Now on sale!',
            },
            {
                type: 'button',
                title: 'Publish Text',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'publish stuff',
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                tooltip: 'store is the thing',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'More details',
                click: {
                    actions: [
                        {
                            type: 'link',
                            uri: 'https://www.google.com',
                            name: 'open browser',
                        },
                    ],
                },
            },
        ],
    },
});

const bdyVerticalCardWithoutTitleOrSubtitleViber = (): ITestJson => ({
    richContentType: Types.BDY,
    description: 'This vertical card will work on RBM, because eventhough missing a title/subtitle, there is still an image.',
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
        tag: 'generic',
        elements: [
            {
                type: 'image',
                tooltip: 'image tooltip',
                url:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store via image',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Publish Text',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'publish stuff',
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
                tooltip: 'store is the thing',
            },
            {
                type: 'button',
                title: 'More details',
                click: {
                    actions: [
                        {
                            type: 'link',
                            uri: 'https://www.google.com',
                            name: 'open browser',
                        },
                    ],
                },
            },
        ],
    },
});

const bdyVerticalCardTooManyButtonsViber = (): ITestJson => ({
    richContentType: Types.BDY,
    description: 'This vertical card will not work on Viber, because it contains 5 buttons (one too many).',
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
        tag: 'generic',
        elements: [
            {
                type: 'image',
                tooltip: 'image tooltip',
                url:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store via image',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'text',
                tag: 'title',
                text: 'IPhone 8',
                tooltip: 'brand new iphone 8',
            },
            {
                type: 'text',
                tag: 'subtitle',
                text: 'Now on sale!',
            },
            {
                type: 'button',
                title: 'Publish Text',
                click: {
                    actions: [
                        {
                            type: 'publishText',
                            text: 'publish stuff',
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                tooltip: 'store is the thing',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                tooltip: 'store is the thing',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'Navigate to store',
                tooltip: 'store is the thing',
                click: {
                    actions: [
                        {
                            type: 'navigate',
                            name: 'Navigate to store',
                            lo: 23423423,
                            la: 2423423423,
                        },
                    ],
                },
            },
            {
                type: 'button',
                title: 'More details',
                click: {
                    actions: [
                        {
                            type: 'link',
                            uri: 'https://www.google.com',
                            name: 'open browser',
                        },
                    ],
                },
            },
        ],
    },
});

const bdyCarousel10CardsViber = (): ITestJson => ({
    richContentType: Types.BDY,
    description: 'Carousel contains cards in multiple different ways, that all should work.',
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
                type: 'horizontal',
                tag: 'generic',
                elements: [
                    {
                        type: 'vertical',
                        elements: [
                            {
                                type: 'image',
                                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_w8UO-QDbk2S2ZLuiuePHB7j6Qb86DLsjwddhp_yq4WaL_LL',
                                tooltip: 'Flowers',
                            },
                            {
                                type: 'text',
                                tag: 'title',
                                text: 'Title',
                                tooltip: 'Title',
                            },
                            {
                                type: 'text',
                                tag: 'subtitle',
                                text: 'subtitle',
                                tooltip: 'subtitle',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
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
                                type: 'image',
                                url: 'https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg',
                                tooltip: 'Flowers',
                            },
                            {
                                type: 'text',
                                tag: 'title',
                                text: 'Title',
                                tooltip: 'Title',
                            },
                            {
                                type: 'text',
                                tag: 'subtitle',
                                text: 'subtitle',
                                tooltip: 'subtitle',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'Flowers',
                                            uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
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
                                type: 'image',
                                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                                tooltip: 'Flowers',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'Flowers',
                                            uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
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
                                type: 'image',
                                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                                tooltip: 'Flowers',
                            },
                            {
                                type: 'text',
                                tag: 'title',
                                text: 'Title',
                                tooltip: 'Title',
                            },
                            {
                                type: 'text',
                                tag: 'subtitle',
                                text: 'subtitle',
                                tooltip: 'subtitle',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'Flowers',
                                            uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
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
                        type: 'image',
                        url:
                            'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                        tooltip: 'image tooltip',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store via image',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                    {
                        tag: 'title',
                        type: 'text',
                        text: 'IPhone 8',
                        tooltip: 'brand new iphone 8',
                    },
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'More details',
                        click: {
                            actions: [
                                {
                                    type: 'link',
                                    uri: 'https://www.google.com',
                                    name: 'open browser',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'horizontal',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
        ],
    },
});

const bdyCarousel11CardsViber = (): ITestJson => ({
    richContentType: Types.BDY,
    description: 'Carousel will not work on Viber because it contains 11 cards (one too many).',
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
                tag: 'generic',
                elements: [
                    {
                        type: 'vertical',
                        elements: [
                            {
                                type: 'image',
                                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_w8UO-QDbk2S2ZLuiuePHB7j6Qb86DLsjwddhp_yq4WaL_LL',
                                tooltip: 'Flowers',
                            },
                            {
                                type: 'text',
                                tag: 'title',
                                text: 'Title',
                                tooltip: 'Title',
                            },
                            {
                                type: 'text',
                                tag: 'subtitle',
                                text: 'subtitle',
                                tooltip: 'subtitle',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                ],
            },
            {
                type: 'horizontal',
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
                            {
                                type: 'text',
                                tag: 'title',
                                text: 'Title',
                                tooltip: 'Title',
                            },
                            {
                                type: 'text',
                                tag: 'subtitle',
                                text: 'subtitle',
                                tooltip: 'subtitle',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'Flowers',
                                            uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
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
                                type: 'image',
                                url: 'https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg',
                                tooltip: 'Flowers',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'Flowers',
                                            uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
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
                                type: 'image',
                                url: 'https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg',
                                tooltip: 'Flowers',
                            },
                            {
                                type: 'text',
                                tag: 'title',
                                text: 'Title',
                                tooltip: 'Title',
                            },
                            {
                                type: 'text',
                                tag: 'subtitle',
                                text: 'subtitle',
                                tooltip: 'subtitle',
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Add to cart pressed',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'Add to cart',
                                title: 'Add to cart',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'Flowers',
                                            uri: 'https://www.pinterest.com/lyndawhite/beautiful-flowers/',
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
                        type: 'image',
                        url:
                            'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png',
                        tooltip: 'image tooltip',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store via image',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                    {
                        tag: 'title',
                        type: 'text',
                        text: 'IPhone 8',
                        tooltip: 'brand new iphone 8',
                    },
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'More details',
                        click: {
                            actions: [
                                {
                                    type: 'link',
                                    uri: 'https://www.google.com',
                                    name: 'open browser',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
            },
            {
                type: 'vertical',
                elements: [
                    {
                        tag: 'subtitle',
                        type: 'text',
                        text: 'Now on sale!',
                    },
                    {
                        type: 'button',
                        title: 'Publish Text',
                        click: {
                            actions: [
                                {
                                    type: 'publishText',
                                    text: 'publish stuff',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Navigate to store',
                        tooltip: 'store is the thing',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    name: 'Navigate to store',
                                    lo: 23423423,
                                    la: 2423423423,
                                },
                            ],
                        },
                    },
                ],
                tag: 'generic',
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
                    title: 'viberBodyRoot',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    oneOf: [
                        {
                            title: 'viberCard',
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
                                tag: {
                                    type: 'string',
                                    enum: ['generic'],
                                    default: 'generic',
                                    readonly: true,
                                },
                                alt: {
                                    type: 'string',
                                    description:
                                        'This property has no effect in RBM, but is included in the schema to ensure the compatibility of Line Cards.',
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
                                                        title: 'viberCardElementOrder1',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 3,
                                                        maxItems: 7,
                                                        items: [
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                            {
                                                                title: 'viberSubtitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder2',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 1,
                                                        maxItems: 5,
                                                        items: [
                                                            {
                                                                oneOf: [
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
                                                                                maxLength: 640,
                                                                            },
                                                                            tooltip: {
                                                                                type: 'string',
                                                                                maxLength: 256,
                                                                            },
                                                                        },
                                                                    },
                                                                    {
                                                                        title: 'viberSubtitle',
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
                                                                                maxLength: 640,
                                                                            },
                                                                            tooltip: {
                                                                                type: 'string',
                                                                                maxLength: 256,
                                                                            },
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder3',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 2,
                                                        maxItems: 6,
                                                        items: [
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder4',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 2,
                                                        maxItems: 6,
                                                        items: [
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
                                                                title: 'viberSubtitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder5',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 2,
                                                        maxItems: 6,
                                                        items: [
                                                            {
                                                                title: 'viberTitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                            {
                                                                title: 'viberSubtitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            title: 'viberCard',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'object',
                            required: ['type', 'elements', 'tag'],
                            properties: {
                                type: {
                                    type: 'string',
                                    enum: ['vertical', 'horizontal'],
                                    default: 'vertical',
                                    readonly: true,
                                },
                                alt: {
                                    type: 'string',
                                    description:
                                        'This property has no effect in RBM, but is included in the schema to ensure the compatibility of Line Cards.',
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
                                            title: 'viberCardElementOrder1',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            type: 'array',
                                            minItems: 3,
                                            maxItems: 7,
                                            items: [
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
                                                            maxLength: 640,
                                                        },
                                                        tooltip: {
                                                            type: 'string',
                                                            maxLength: 256,
                                                        },
                                                    },
                                                },
                                                {
                                                    title: 'viberSubtitle',
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
                                                            maxLength: 640,
                                                        },
                                                        tooltip: {
                                                            type: 'string',
                                                            maxLength: 256,
                                                        },
                                                    },
                                                },
                                            ],
                                            additionalItems: {
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
                                                                maxItems: 4,
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
                                        },
                                        {
                                            title: 'viberCardElementOrder2',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            type: 'array',
                                            minItems: 1,
                                            maxItems: 5,
                                            items: [
                                                {
                                                    oneOf: [
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
                                                                    maxLength: 640,
                                                                },
                                                                tooltip: {
                                                                    type: 'string',
                                                                    maxLength: 256,
                                                                },
                                                            },
                                                        },
                                                        {
                                                            title: 'viberSubtitle',
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
                                                                    maxLength: 640,
                                                                },
                                                                tooltip: {
                                                                    type: 'string',
                                                                    maxLength: 256,
                                                                },
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                            additionalItems: {
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
                                                                maxItems: 4,
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
                                        },
                                        {
                                            title: 'viberCardElementOrder3',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            type: 'array',
                                            minItems: 2,
                                            maxItems: 6,
                                            items: [
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
                                                            maxLength: 640,
                                                        },
                                                        tooltip: {
                                                            type: 'string',
                                                            maxLength: 256,
                                                        },
                                                    },
                                                },
                                            ],
                                            additionalItems: {
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
                                                                maxItems: 4,
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
                                        },
                                        {
                                            title: 'viberCardElementOrder4',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            type: 'array',
                                            minItems: 2,
                                            maxItems: 6,
                                            items: [
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
                                                    title: 'viberSubtitle',
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
                                                            maxLength: 640,
                                                        },
                                                        tooltip: {
                                                            type: 'string',
                                                            maxLength: 256,
                                                        },
                                                    },
                                                },
                                            ],
                                            additionalItems: {
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
                                                                maxItems: 4,
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
                                        },
                                        {
                                            title: 'viberCardElementOrder5',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            type: 'array',
                                            minItems: 2,
                                            maxItems: 6,
                                            items: [
                                                {
                                                    title: 'viberTitle',
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
                                                            maxLength: 640,
                                                        },
                                                        tooltip: {
                                                            type: 'string',
                                                            maxLength: 256,
                                                        },
                                                    },
                                                },
                                                {
                                                    title: 'viberSubtitle',
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
                                                            maxLength: 640,
                                                        },
                                                        tooltip: {
                                                            type: 'string',
                                                            maxLength: 256,
                                                        },
                                                    },
                                                },
                                            ],
                                            additionalItems: {
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
                                                                maxItems: 4,
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
                                        },
                                    ],
                                },
                            },
                        },
                    ],
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
                        alt: {
                            type: 'string',
                            maxLength: 2000,
                            description:
                                'This property has no effect in RBM, but is included in the schema to ensure the compatibility of Line Carousels.',
                        },
                        elements: {
                            type: 'array',
                            minItems: 2,
                            maxItems: 10,
                            items: {
                                title: 'viberBodyRoot',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                oneOf: [
                                    {
                                        title: 'viberCard',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'elements', 'tag'],
                                        properties: {
                                            type: {
                                                type: 'string',
                                                enum: ['vertical', 'horizontal'],
                                                default: 'vertical',
                                                readonly: true,
                                            },
                                            alt: {
                                                type: 'string',
                                                description:
                                                    'This property has no effect in RBM, but is included in the schema to ensure the compatibility of Line Cards.',
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
                                                        title: 'viberCardElementOrder1',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 3,
                                                        maxItems: 7,
                                                        items: [
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                            {
                                                                title: 'viberSubtitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder2',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 1,
                                                        maxItems: 5,
                                                        items: [
                                                            {
                                                                oneOf: [
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
                                                                                maxLength: 640,
                                                                            },
                                                                            tooltip: {
                                                                                type: 'string',
                                                                                maxLength: 256,
                                                                            },
                                                                        },
                                                                    },
                                                                    {
                                                                        title: 'viberSubtitle',
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
                                                                                maxLength: 640,
                                                                            },
                                                                            tooltip: {
                                                                                type: 'string',
                                                                                maxLength: 256,
                                                                            },
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder3',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 2,
                                                        maxItems: 6,
                                                        items: [
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder4',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 2,
                                                        maxItems: 6,
                                                        items: [
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
                                                                title: 'viberSubtitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                    {
                                                        title: 'viberCardElementOrder5',
                                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                                        type: 'array',
                                                        minItems: 2,
                                                        maxItems: 6,
                                                        items: [
                                                            {
                                                                title: 'viberTitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                            {
                                                                title: 'viberSubtitle',
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
                                                                        maxLength: 640,
                                                                    },
                                                                    tooltip: {
                                                                        type: 'string',
                                                                        maxLength: 256,
                                                                    },
                                                                },
                                                            },
                                                        ],
                                                        additionalItems: {
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
                                                                            maxItems: 4,
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
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                ],
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
        root: {
            title: 'viberMetadataRoot',
            $schema: 'http://json-schema.org/draft-07/schema#',
        },
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
    qrQuickRepliesSpecialCharactersViber,
    qrQuickReplies11ButtonsViber,
    qrQuickReplies12ButtonsViber,
    qrQuickReply26CharsViber,
    qrQuickReply25CharsViber,
    bdyVerticalCardViber,
    bdyVerticalCardTooLongButtonViber,
    bdyVerticalCardWithoutImageViber,
    bdyVerticalCardWithoutTitleOrSubtitleViber,
    bdyVerticalCardTooManyButtonsViber,
    bdyCarousel10CardsViber,
    bdyCarousel11CardsViber,
    expectedSchemaBodyViber,
    expectedSchemaMetadataViber,
    expectedSchemaQuickrepliesViber,
};
