export const expectedSchemaBodyGbm = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'gbmBodyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      oneOf: [
        {
          title: 'gbmStandaloneCard',
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          additionalProperties: false,
          required: ['type', 'elements', 'tag'],
          properties: {
            type: { type: 'string', enum: ['vertical', 'horizontal'], default: 'vertical', readonly: true },
            alt: { minLength: 1, maxLength: 2000, type: 'string' },
            tag: { type: 'string', enum: ['generic'], default: 'generic', readonly: true },
            display: {
              title: 'gbmDisplaySettingsAny',
              $schema: 'http://json-schema.org/draft-07/schema#',
              type: 'object',
              additionalProperties: false,
              properties: { aspectRatio: { type: 'string' }, size: { type: 'string', enum: ['compact', 'tall'] } },
            },
            elements: {
              anyOf: [
                {
                  title: 'gbmCardElementOrder1Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 3,
                  maxItems: 7,
                  items: [
                    {
                      title: 'gbmImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                        url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                        tooltip: { type: 'string' },
                      },
                    },
                    {
                      title: 'gbmTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                        text: { type: 'string', maxLength: 200 },
                        tooltip: { type: 'string', maxLength: 256 },
                      },
                    },
                    {
                      title: 'gbmDescription',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['subtitle'] },
                        text: { type: 'string', maxLength: 2000 },
                        tooltip: { type: 'string' },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'gbmButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                      tooltip: { type: 'string', maxLength: 256 },
                      title: { type: 'string', maxLength: 25 },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'gbmQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: true,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 2,
                            items: {
                              oneOf: [
                                {
                                  title: 'gbmLink',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'uri'],
                                  properties: {
                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                    uri: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                    text: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmNavigate',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'la', 'lo'],
                                  properties: {
                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                    la: { type: 'number' },
                                    lo: { type: 'number' },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                      style: {},
                    },
                  },
                },
                {
                  title: 'gbmCardElementOrder2Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 2,
                  maxItems: 6,
                  items: [
                    {
                      title: 'gbmImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                        url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                        tooltip: { type: 'string' },
                      },
                    },
                    {
                      title: 'gbmTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                        text: { type: 'string', maxLength: 200 },
                        tooltip: { type: 'string', maxLength: 256 },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'gbmButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                      tooltip: { type: 'string', maxLength: 256 },
                      title: { type: 'string', maxLength: 25 },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'gbmQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: true,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 2,
                            items: {
                              oneOf: [
                                {
                                  title: 'gbmLink',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'uri'],
                                  properties: {
                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                    uri: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                    text: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmNavigate',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'la', 'lo'],
                                  properties: {
                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                    la: { type: 'number' },
                                    lo: { type: 'number' },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                      style: {},
                    },
                  },
                },
                {
                  title: 'gbmCardElementOrder3Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 1,
                  maxItems: 5,
                  items: [
                    {
                      title: 'gbmImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                        url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                        tooltip: { type: 'string' },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'gbmButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                      tooltip: { type: 'string', maxLength: 256 },
                      title: { type: 'string', maxLength: 25 },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'gbmQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: true,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 2,
                            items: {
                              oneOf: [
                                {
                                  title: 'gbmLink',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'uri'],
                                  properties: {
                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                    uri: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                    text: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmNavigate',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'la', 'lo'],
                                  properties: {
                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                    la: { type: 'number' },
                                    lo: { type: 'number' },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                      style: {},
                    },
                  },
                },
                {
                  title: 'gbmCardElementOrder4Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 2,
                  maxItems: 6,
                  items: [
                    {
                      title: 'gbmTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                        text: { type: 'string', maxLength: 200 },
                        tooltip: { type: 'string', maxLength: 256 },
                      },
                    },
                    {
                      title: 'gbmDescription',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['subtitle'] },
                        text: { type: 'string', maxLength: 2000 },
                        tooltip: { type: 'string' },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'gbmButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                      tooltip: { type: 'string', maxLength: 256 },
                      title: { type: 'string', maxLength: 25 },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'gbmQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: true,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 2,
                            items: {
                              oneOf: [
                                {
                                  title: 'gbmLink',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'uri'],
                                  properties: {
                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                    uri: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                    text: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmNavigate',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'la', 'lo'],
                                  properties: {
                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                    la: { type: 'number' },
                                    lo: { type: 'number' },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                      style: {},
                    },
                  },
                },
                {
                  title: 'gbmCardElementOrder5Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 1,
                  maxItems: 5,
                  items: [
                    {
                      title: 'gbmTitle',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'tag', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                        text: { type: 'string', maxLength: 200 },
                        tooltip: { type: 'string', maxLength: 256 },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'gbmButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                      tooltip: { type: 'string', maxLength: 256 },
                      title: { type: 'string', maxLength: 25 },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'gbmQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: true,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 2,
                            items: {
                              oneOf: [
                                {
                                  title: 'gbmLink',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'uri'],
                                  properties: {
                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                    uri: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                    text: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmNavigate',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'la', 'lo'],
                                  properties: {
                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                    la: { type: 'number' },
                                    lo: { type: 'number' },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                      style: {},
                    },
                  },
                },
                {
                  title: 'gbmCardElementOrder6Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 2,
                  maxItems: 6,
                  items: [
                    {
                      title: 'gbmImage',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'url'],
                      properties: {
                        type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                        url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                        tooltip: { type: 'string' },
                      },
                    },
                    {
                      title: 'gbmDescription',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['subtitle'] },
                        text: { type: 'string', maxLength: 2000 },
                        tooltip: { type: 'string' },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'gbmButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                      tooltip: { type: 'string', maxLength: 256 },
                      title: { type: 'string', maxLength: 25 },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'gbmQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: true,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 2,
                            items: {
                              oneOf: [
                                {
                                  title: 'gbmLink',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'uri'],
                                  properties: {
                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                    uri: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                    text: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmNavigate',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'la', 'lo'],
                                  properties: {
                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                    la: { type: 'number' },
                                    lo: { type: 'number' },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                      style: {},
                    },
                  },
                },
                {
                  title: 'gbmCardElementOrder7Action',
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  type: 'array',
                  minItems: 1,
                  maxItems: 5,
                  items: [
                    {
                      title: 'gbmDescription',
                      $schema: 'http://json-schema.org/draft-07/schema#',
                      type: 'object',
                      required: ['type', 'text'],
                      properties: {
                        type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                        tag: { type: 'string', enum: ['subtitle'] },
                        text: { type: 'string', maxLength: 2000 },
                        tooltip: { type: 'string' },
                      },
                    },
                  ],
                  additionalItems: {
                    type: 'object',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'gbmButton',
                    required: ['type', 'title', 'click'],
                    additionalProperties: false,
                    properties: {
                      type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                      tooltip: { type: 'string', maxLength: 256 },
                      title: { type: 'string', maxLength: 25 },
                      click: {
                        type: 'object',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        title: 'gbmQuickReplyActions',
                        required: ['actions'],
                        additionalProperties: true,
                        properties: {
                          actions: {
                            type: 'array',
                            minItems: 1,
                            maxItems: 2,
                            items: {
                              oneOf: [
                                {
                                  title: 'gbmLink',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'uri'],
                                  properties: {
                                    type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                    uri: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmPublishText',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'text'],
                                  properties: {
                                    type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                    text: { type: 'string', maxLength: 256 },
                                  },
                                },
                                {
                                  title: 'gbmNavigate',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  required: ['type', 'la', 'lo'],
                                  properties: {
                                    type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                    la: { type: 'number' },
                                    lo: { type: 'number' },
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                      style: {},
                    },
                  },
                },
              ],
            },
          },
        },
        {
          title: 'gbmCarousel',
          $schema: 'http://json-schema.org/draft-07/schema#',
          type: 'object',
          additionalProperties: false,
          required: ['type', 'elements'],
          properties: {
            type: { type: 'string', enum: ['carousel'], default: 'carousel', readonly: true },
            alt: { minLength: 1, maxLength: 2000, type: 'string' },
            elements: {
              oneOf: [
                {
                  type: 'array',
                  minItems: 2,
                  maxItems: 10,
                  items: {
                    title: 'gbmCarouselCardRegular',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    additionalProperties: false,
                    required: ['type', 'elements', 'tag'],
                    properties: {
                      type: { type: 'string', enum: ['vertical', 'horizontal'], default: 'vertical', readonly: true },
                      alt: { minLength: 1, maxLength: 2000, type: 'string' },
                      tag: { type: 'string', enum: ['generic'], default: 'generic', readonly: true },
                      display: {
                        title: 'gbmDisplaySettingsRegular',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'object',
                        additionalProperties: false,
                        properties: { aspectRatio: { type: 'string' } },
                      },
                      elements: {
                        anyOf: [
                          {
                            title: 'gbmCardElementOrder1Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 3,
                            maxItems: 7,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder2Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder3Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder4Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder5Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder6Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder7Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  type: 'array',
                  minItems: 2,
                  maxItems: 13,
                  items: {
                    title: 'gbmCarouselCardCompact',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    additionalProperties: false,
                    required: ['type', 'elements', 'tag', 'display'],
                    properties: {
                      type: { type: 'string', enum: ['vertical', 'horizontal'], default: 'vertical', readonly: true },
                      alt: { minLength: 1, maxLength: 2000, type: 'string' },
                      tag: { type: 'string', enum: ['generic'], default: 'generic', readonly: true },
                      display: {
                        title: 'gbmDisplaySettingsCompact',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'object',
                        additionalProperties: false,
                        required: ['size'],
                        properties: { aspectRatio: { type: 'string' }, size: { type: 'string', enum: ['compact'] } },
                      },
                      elements: {
                        anyOf: [
                          {
                            title: 'gbmCardElementOrder1Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 3,
                            maxItems: 7,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder2Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder3Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder4Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder5Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder6Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder7Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  type: 'array',
                  minItems: 2,
                  maxItems: 13,
                  items: {
                    title: 'gbmStandaloneCard',
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    type: 'object',
                    additionalProperties: false,
                    required: ['type', 'elements', 'tag', 'display'],
                    properties: {
                      type: { type: 'string', enum: ['vertical', 'horizontal'], default: 'vertical', readonly: true },
                      alt: { minLength: 1, maxLength: 2000, type: 'string' },
                      tag: { type: 'string', enum: ['generic'], default: 'generic', readonly: true },
                      display: { $$ref: 'gbmDisplaySettingsTall.json' },
                      elements: {
                        anyOf: [
                          {
                            title: 'gbmCardElementOrder1Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 3,
                            maxItems: 7,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder2Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder3Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder4Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder5Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmTitle',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'tag', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['title'], default: 'title', readonly: true },
                                  text: { type: 'string', maxLength: 200 },
                                  tooltip: { type: 'string', maxLength: 256 },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder6Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 2,
                            maxItems: 6,
                            items: [
                              {
                                title: 'gbmImage',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'url'],
                                properties: {
                                  type: { type: 'string', enum: ['image'], default: 'image', readonly: true },
                                  url: { type: 'string', maxLength: 1000, pattern: 'https.*' },
                                  tooltip: { type: 'string' },
                                },
                              },
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
                              },
                            },
                          },
                          {
                            title: 'gbmCardElementOrder7Action',
                            $schema: 'http://json-schema.org/draft-07/schema#',
                            type: 'array',
                            minItems: 1,
                            maxItems: 5,
                            items: [
                              {
                                title: 'gbmDescription',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                required: ['type', 'text'],
                                properties: {
                                  type: { type: 'string', enum: ['text'], default: 'text', readonly: true },
                                  tag: { type: 'string', enum: ['subtitle'] },
                                  text: { type: 'string', maxLength: 2000 },
                                  tooltip: { type: 'string' },
                                },
                              },
                            ],
                            additionalItems: {
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmButton',
                              required: ['type', 'title', 'click'],
                              additionalProperties: false,
                              properties: {
                                type: { type: 'string', enum: ['button'], default: 'button', readonly: true },
                                tooltip: { type: 'string', maxLength: 256 },
                                title: { type: 'string', maxLength: 25 },
                                click: {
                                  type: 'object',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  title: 'gbmQuickReplyActions',
                                  required: ['actions'],
                                  additionalProperties: true,
                                  properties: {
                                    actions: {
                                      type: 'array',
                                      minItems: 1,
                                      maxItems: 2,
                                      items: {
                                        oneOf: [
                                          {
                                            title: 'gbmLink',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'uri'],
                                            properties: {
                                              type: { type: 'string', enum: ['link'], default: 'link', readonly: true },
                                              uri: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmPublishText',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'text'],
                                            properties: {
                                              type: { type: 'string', enum: ['publishText'], default: 'publishText', readonly: true },
                                              text: { type: 'string', maxLength: 256 },
                                            },
                                          },
                                          {
                                            title: 'gbmNavigate',
                                            $schema: 'http://json-schema.org/draft-07/schema#',
                                            required: ['type', 'la', 'lo'],
                                            properties: {
                                              type: { type: 'string', enum: ['navigate'], default: 'navigate', readonly: true },
                                              la: { type: 'number' },
                                              lo: { type: 'number' },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                                style: {},
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
        {
          title: 'gbmStandaloneCardNested',
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
              maxLength: 2000,
              type: 'string',
            },
            tag: {
              type: 'string',
              enum: ['generic'],
              default: 'generic',
              readonly: true,
            },
            display: {
              title: 'gbmDisplaySettingsAny',
              $schema: 'http://json-schema.org/draft-07/schema#',
              type: 'object',
              additionalProperties: false,
              properties: {
                aspectRatio: {
                  type: 'string',
                },
                size: {
                  type: 'string',
                  enum: ['compact', 'tall'],
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
                        title: 'gbmCardElementOrder5Action',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        type: 'array',
                        minItems: 1,
                        maxItems: 5,
                        items: [
                          {
                            title: 'gbmTitle',
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
                                maxLength: 200,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                        ],
                        additionalItems: {
                          type: 'object',
                          $schema: 'http://json-schema.org/draft-07/schema#',
                          title: 'gbmButton',
                          required: ['type', 'title', 'click'],
                          additionalProperties: false,
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
                              type: 'object',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              title: 'gbmQuickReplyActions',
                              required: ['actions'],
                              additionalProperties: true,
                              properties: {
                                actions: {
                                  type: 'array',
                                  minItems: 1,
                                  maxItems: 2,
                                  items: {
                                    oneOf: [
                                      {
                                        title: 'gbmLink',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
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
                                            maxLength: 256,
                                          },
                                        },
                                      },
                                      {
                                        title: 'gbmPublishText',
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
                                            maxLength: 256,
                                          },
                                        },
                                      },
                                      {
                                        title: 'gbmNavigate',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        required: ['type', 'la', 'lo'],
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
                                        },
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                            style: {},
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
};
