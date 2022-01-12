export const expectedSchemaBodyFb = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'fbBodyRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      oneOf: [
        {
          title: 'fbCardGenericStandalone',
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
                'This property has no effect in Facebook, but is included in the schema to ensure the compatibility of Line Cards.',
            },
            convType: {
              type: 'string',
              description:
                'This property has no effect in Facebook, but is included in the schema to support flag on rich content messages',
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
                        title: 'fbCardGenericElementOrder1',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        minItems: 4,
                        maxItems: 6,
                        type: 'array',
                        items: [
                          {
                            title: 'fbImage',
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
                            title: 'fbTextGenericCard',
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
                                enum: ['title', 'subtitle'],
                                default: 'title',
                                readonly: true,
                              },
                              text: {
                                type: 'string',
                                maxLength: 80,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'fbTextGenericCard',
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
                                enum: ['title', 'subtitle'],
                                default: 'title',
                                readonly: true,
                              },
                              text: {
                                type: 'string',
                                maxLength: 80,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'fbButton',
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
                                maxLength: 20,
                              },
                              click: {
                                title: 'fbClickOperations',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    title: 'fbClickMetadata',
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
                                          title: 'fbClickActionPublishText',
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
                                          title: 'fbClickActionLink',
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
                                          title: 'fbClickActionNavigate',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          required: ['type', 'lo', 'la'],
                                          properties: {
                                            type: {
                                              type: 'string',
                                              enum: ['navigate'],
                                              default: 'navigate',
                                              readonly: true,
                                            },
                                            lo: {
                                              type: 'number',
                                            },
                                            la: {
                                              type: 'number',
                                            },
                                            name: {
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
                        additionalItems: {
                          title: 'fbButton',
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
                              maxLength: 20,
                            },
                            click: {
                              title: 'fbClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'fbClickMetadata',
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
                                        title: 'fbClickActionPublishText',
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
                                        title: 'fbClickActionLink',
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
                                        title: 'fbClickActionNavigate',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'lo', 'la'],
                                        properties: {
                                          type: {
                                            type: 'string',
                                            enum: ['navigate'],
                                            default: 'navigate',
                                            readonly: true,
                                          },
                                          lo: {
                                            type: 'number',
                                          },
                                          la: {
                                            type: 'number',
                                          },
                                          name: {
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
                      {
                        title: 'fbCardGenericElementOrder2',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        minItems: 3,
                        maxItems: 5,
                        type: 'array',
                        items: [
                          {
                            title: 'fbImage',
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
                            title: 'fbTextGenericCard',
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
                                enum: ['title', 'subtitle'],
                                default: 'title',
                                readonly: true,
                              },
                              text: {
                                type: 'string',
                                maxLength: 80,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'fbButton',
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
                                maxLength: 20,
                              },
                              click: {
                                title: 'fbClickOperations',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    title: 'fbClickMetadata',
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
                                          title: 'fbClickActionPublishText',
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
                                          title: 'fbClickActionLink',
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
                                          title: 'fbClickActionNavigate',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          required: ['type', 'lo', 'la'],
                                          properties: {
                                            type: {
                                              type: 'string',
                                              enum: ['navigate'],
                                              default: 'navigate',
                                              readonly: true,
                                            },
                                            lo: {
                                              type: 'number',
                                            },
                                            la: {
                                              type: 'number',
                                            },
                                            name: {
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
                        additionalItems: {
                          title: 'fbButton',
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
                              maxLength: 20,
                            },
                            click: {
                              title: 'fbClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'fbClickMetadata',
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
                                        title: 'fbClickActionPublishText',
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
                                        title: 'fbClickActionLink',
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
                                        title: 'fbClickActionNavigate',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'lo', 'la'],
                                        properties: {
                                          type: {
                                            type: 'string',
                                            enum: ['navigate'],
                                            default: 'navigate',
                                            readonly: true,
                                          },
                                          lo: {
                                            type: 'number',
                                          },
                                          la: {
                                            type: 'number',
                                          },
                                          name: {
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
                      {
                        title: 'fbCardGenericElementOrder3',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        minItems: 2,
                        maxItems: 4,
                        type: 'array',
                        items: [
                          {
                            title: 'fbTextGenericCard',
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
                                enum: ['title', 'subtitle'],
                                default: 'title',
                                readonly: true,
                              },
                              text: {
                                type: 'string',
                                maxLength: 80,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                        ],
                        additionalItems: {
                          title: 'fbButton',
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
                              maxLength: 20,
                            },
                            click: {
                              title: 'fbClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'fbClickMetadata',
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
                                        title: 'fbClickActionPublishText',
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
                                        title: 'fbClickActionLink',
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
                                        title: 'fbClickActionNavigate',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'lo', 'la'],
                                        properties: {
                                          type: {
                                            type: 'string',
                                            enum: ['navigate'],
                                            default: 'navigate',
                                            readonly: true,
                                          },
                                          lo: {
                                            type: 'number',
                                          },
                                          la: {
                                            type: 'number',
                                          },
                                          name: {
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
                      {
                        title: 'fbCardGenericElementOrder3',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        minItems: 2,
                        maxItems: 5,
                        type: 'array',
                        items: [
                          {
                            title: 'fbTextGenericCard',
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
                                enum: ['title', 'subtitle'],
                                default: 'title',
                                readonly: true,
                              },
                              text: {
                                type: 'string',
                                maxLength: 80,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                          {
                            title: 'fbTextGenericCard',
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
                                enum: ['title', 'subtitle'],
                                default: 'title',
                                readonly: true,
                              },
                              text: {
                                type: 'string',
                                maxLength: 80,
                              },
                              tooltip: {
                                type: 'string',
                                maxLength: 256,
                              },
                            },
                          },
                        ],
                        additionalItems: {
                          title: 'fbButton',
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
                              maxLength: 20,
                            },
                            click: {
                              title: 'fbClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'fbClickMetadata',
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
                                        title: 'fbClickActionPublishText',
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
                                        title: 'fbClickActionLink',
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
                                        title: 'fbClickActionNavigate',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'lo', 'la'],
                                        properties: {
                                          type: {
                                            type: 'string',
                                            enum: ['navigate'],
                                            default: 'navigate',
                                            readonly: true,
                                          },
                                          lo: {
                                            type: 'number',
                                          },
                                          la: {
                                            type: 'number',
                                          },
                                          name: {
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
                    ],
                  },
                },
              },
            },
          },
        },
        {
          title: 'fbCardButton',
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
              enum: ['button'],
              default: 'button',
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
                        title: 'fbCardButtonElementOrder1',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        minItems: 2,
                        maxItems: 4,
                        type: 'array',
                        items: [
                          {
                            title: 'fbTextButtonCard',
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
                                enum: ['title', 'subtitle'],
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
                            title: 'fbButton',
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
                                maxLength: 20,
                              },
                              click: {
                                title: 'fbClickOperations',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    title: 'fbClickMetadata',
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
                                          title: 'fbClickActionPublishText',
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
                                          title: 'fbClickActionLink',
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
                                          title: 'fbClickActionNavigate',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          required: ['type', 'lo', 'la'],
                                          properties: {
                                            type: {
                                              type: 'string',
                                              enum: ['navigate'],
                                              default: 'navigate',
                                              readonly: true,
                                            },
                                            lo: {
                                              type: 'number',
                                            },
                                            la: {
                                              type: 'number',
                                            },
                                            name: {
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
                        additionalItems: {
                          title: 'fbButton',
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
                              maxLength: 20,
                            },
                            click: {
                              title: 'fbClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'fbClickMetadata',
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
                                        title: 'fbClickActionPublishText',
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
                                        title: 'fbClickActionLink',
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
                                        title: 'fbClickActionNavigate',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'lo', 'la'],
                                        properties: {
                                          type: {
                                            type: 'string',
                                            enum: ['navigate'],
                                            default: 'navigate',
                                            readonly: true,
                                          },
                                          lo: {
                                            type: 'number',
                                          },
                                          la: {
                                            type: 'number',
                                          },
                                          name: {
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
                      {
                        title: 'fbCardButtonElementOrder2',
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        minItems: 3,
                        maxItems: 5,
                        type: 'array',
                        items: [
                          {
                            title: 'fbTextButtonCard',
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
                                enum: ['title', 'subtitle'],
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
                            title: 'fbTextButtonCard',
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
                                enum: ['title', 'subtitle'],
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
                            title: 'fbButton',
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
                                maxLength: 20,
                              },
                              click: {
                                title: 'fbClickOperations',
                                $schema: 'http://json-schema.org/draft-07/schema#',
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                  metadata: {
                                    title: 'fbClickMetadata',
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
                                          title: 'fbClickActionPublishText',
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
                                          title: 'fbClickActionLink',
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
                                          title: 'fbClickActionNavigate',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          required: ['type', 'lo', 'la'],
                                          properties: {
                                            type: {
                                              type: 'string',
                                              enum: ['navigate'],
                                              default: 'navigate',
                                              readonly: true,
                                            },
                                            lo: {
                                              type: 'number',
                                            },
                                            la: {
                                              type: 'number',
                                            },
                                            name: {
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
                        additionalItems: {
                          title: 'fbButton',
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
                              maxLength: 20,
                            },
                            click: {
                              title: 'fbClickOperations',
                              $schema: 'http://json-schema.org/draft-07/schema#',
                              type: 'object',
                              additionalProperties: false,
                              properties: {
                                metadata: {
                                  title: 'fbClickMetadata',
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
                                        title: 'fbClickActionPublishText',
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
                                        title: 'fbClickActionLink',
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
                                        title: 'fbClickActionNavigate',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        required: ['type', 'lo', 'la'],
                                        properties: {
                                          type: {
                                            type: 'string',
                                            enum: ['navigate'],
                                            default: 'navigate',
                                            readonly: true,
                                          },
                                          lo: {
                                            type: 'number',
                                          },
                                          la: {
                                            type: 'number',
                                          },
                                          name: {
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
                    ],
                  },
                },
              },
            },
          },
        },
        {
          title: 'fbCarousel',
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
                'This property has no effect in Facebook, but is included in the schema to ensure the compatibility of Line Carousels.',
            },
            elements: {
              type: 'array',
              minItems: 2,
              maxItems: 10,
              items: {
                oneOf: [
                  {
                    title: 'fbCardGenericCarousel',
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
                          'This property has no effect in Facebook, but is included in the schema to ensure the compatibility of Line Cards.',
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
                                  title: 'fbCardGenericElementOrder1',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  minItems: 4,
                                  maxItems: 6,
                                  type: 'array',
                                  items: [
                                    {
                                      title: 'fbImage',
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
                                      title: 'fbTextGenericCard',
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
                                          enum: ['title', 'subtitle'],
                                          default: 'title',
                                          readonly: true,
                                        },
                                        text: {
                                          type: 'string',
                                          maxLength: 80,
                                        },
                                        tooltip: {
                                          type: 'string',
                                          maxLength: 256,
                                        },
                                      },
                                    },
                                    {
                                      title: 'fbTextGenericCard',
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
                                          enum: ['title', 'subtitle'],
                                          default: 'title',
                                          readonly: true,
                                        },
                                        text: {
                                          type: 'string',
                                          maxLength: 80,
                                        },
                                        tooltip: {
                                          type: 'string',
                                          maxLength: 256,
                                        },
                                      },
                                    },
                                    {
                                      title: 'fbButton',
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
                                          maxLength: 20,
                                        },
                                        click: {
                                          title: 'fbClickOperations',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: {
                                            metadata: {
                                              title: 'fbClickMetadata',
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
                                                    title: 'fbClickActionPublishText',
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
                                                    title: 'fbClickActionLink',
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
                                                    title: 'fbClickActionNavigate',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    type: 'object',
                                                    required: ['type', 'lo', 'la'],
                                                    properties: {
                                                      type: {
                                                        type: 'string',
                                                        enum: ['navigate'],
                                                        default: 'navigate',
                                                        readonly: true,
                                                      },
                                                      lo: {
                                                        type: 'number',
                                                      },
                                                      la: {
                                                        type: 'number',
                                                      },
                                                      name: {
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
                                  additionalItems: {
                                    title: 'fbButton',
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
                                        maxLength: 20,
                                      },
                                      click: {
                                        title: 'fbClickOperations',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                          metadata: {
                                            title: 'fbClickMetadata',
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
                                                  title: 'fbClickActionPublishText',
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
                                                  title: 'fbClickActionLink',
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
                                                  title: 'fbClickActionNavigate',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  type: 'object',
                                                  required: ['type', 'lo', 'la'],
                                                  properties: {
                                                    type: {
                                                      type: 'string',
                                                      enum: ['navigate'],
                                                      default: 'navigate',
                                                      readonly: true,
                                                    },
                                                    lo: {
                                                      type: 'number',
                                                    },
                                                    la: {
                                                      type: 'number',
                                                    },
                                                    name: {
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
                                {
                                  title: 'fbCardGenericElementOrder2',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  minItems: 3,
                                  maxItems: 5,
                                  type: 'array',
                                  items: [
                                    {
                                      title: 'fbImage',
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
                                      title: 'fbTextGenericCard',
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
                                          enum: ['title', 'subtitle'],
                                          default: 'title',
                                          readonly: true,
                                        },
                                        text: {
                                          type: 'string',
                                          maxLength: 80,
                                        },
                                        tooltip: {
                                          type: 'string',
                                          maxLength: 256,
                                        },
                                      },
                                    },
                                    {
                                      title: 'fbButton',
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
                                          maxLength: 20,
                                        },
                                        click: {
                                          title: 'fbClickOperations',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: {
                                            metadata: {
                                              title: 'fbClickMetadata',
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
                                                    title: 'fbClickActionPublishText',
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
                                                    title: 'fbClickActionLink',
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
                                                    title: 'fbClickActionNavigate',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    type: 'object',
                                                    required: ['type', 'lo', 'la'],
                                                    properties: {
                                                      type: {
                                                        type: 'string',
                                                        enum: ['navigate'],
                                                        default: 'navigate',
                                                        readonly: true,
                                                      },
                                                      lo: {
                                                        type: 'number',
                                                      },
                                                      la: {
                                                        type: 'number',
                                                      },
                                                      name: {
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
                                  additionalItems: {
                                    title: 'fbButton',
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
                                        maxLength: 20,
                                      },
                                      click: {
                                        title: 'fbClickOperations',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                          metadata: {
                                            title: 'fbClickMetadata',
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
                                                  title: 'fbClickActionPublishText',
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
                                                  title: 'fbClickActionLink',
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
                                                  title: 'fbClickActionNavigate',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  type: 'object',
                                                  required: ['type', 'lo', 'la'],
                                                  properties: {
                                                    type: {
                                                      type: 'string',
                                                      enum: ['navigate'],
                                                      default: 'navigate',
                                                      readonly: true,
                                                    },
                                                    lo: {
                                                      type: 'number',
                                                    },
                                                    la: {
                                                      type: 'number',
                                                    },
                                                    name: {
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
                                {
                                  title: 'fbCardGenericElementOrder3',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  minItems: 2,
                                  maxItems: 4,
                                  type: 'array',
                                  items: [
                                    {
                                      title: 'fbTextGenericCard',
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
                                          enum: ['title', 'subtitle'],
                                          default: 'title',
                                          readonly: true,
                                        },
                                        text: {
                                          type: 'string',
                                          maxLength: 80,
                                        },
                                        tooltip: {
                                          type: 'string',
                                          maxLength: 256,
                                        },
                                      },
                                    },
                                  ],
                                  additionalItems: {
                                    title: 'fbButton',
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
                                        maxLength: 20,
                                      },
                                      click: {
                                        title: 'fbClickOperations',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                          metadata: {
                                            title: 'fbClickMetadata',
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
                                                  title: 'fbClickActionPublishText',
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
                                                  title: 'fbClickActionLink',
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
                                                  title: 'fbClickActionNavigate',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  type: 'object',
                                                  required: ['type', 'lo', 'la'],
                                                  properties: {
                                                    type: {
                                                      type: 'string',
                                                      enum: ['navigate'],
                                                      default: 'navigate',
                                                      readonly: true,
                                                    },
                                                    lo: {
                                                      type: 'number',
                                                    },
                                                    la: {
                                                      type: 'number',
                                                    },
                                                    name: {
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
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                  {
                    title: 'fbCardButton',
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
                        enum: ['button'],
                        default: 'button',
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
                                  title: 'fbCardButtonElementOrder1',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  minItems: 2,
                                  maxItems: 4,
                                  type: 'array',
                                  items: [
                                    {
                                      title: 'fbTextButtonCard',
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
                                          enum: ['title', 'subtitle'],
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
                                      title: 'fbButton',
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
                                          maxLength: 20,
                                        },
                                        click: {
                                          title: 'fbClickOperations',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: {
                                            metadata: {
                                              title: 'fbClickMetadata',
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
                                                    title: 'fbClickActionPublishText',
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
                                                    title: 'fbClickActionLink',
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
                                                    title: 'fbClickActionNavigate',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    type: 'object',
                                                    required: ['type', 'lo', 'la'],
                                                    properties: {
                                                      type: {
                                                        type: 'string',
                                                        enum: ['navigate'],
                                                        default: 'navigate',
                                                        readonly: true,
                                                      },
                                                      lo: {
                                                        type: 'number',
                                                      },
                                                      la: {
                                                        type: 'number',
                                                      },
                                                      name: {
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
                                  additionalItems: {
                                    title: 'fbButton',
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
                                        maxLength: 20,
                                      },
                                      click: {
                                        title: 'fbClickOperations',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                          metadata: {
                                            title: 'fbClickMetadata',
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
                                                  title: 'fbClickActionPublishText',
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
                                                  title: 'fbClickActionLink',
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
                                                  title: 'fbClickActionNavigate',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  type: 'object',
                                                  required: ['type', 'lo', 'la'],
                                                  properties: {
                                                    type: {
                                                      type: 'string',
                                                      enum: ['navigate'],
                                                      default: 'navigate',
                                                      readonly: true,
                                                    },
                                                    lo: {
                                                      type: 'number',
                                                    },
                                                    la: {
                                                      type: 'number',
                                                    },
                                                    name: {
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
                                {
                                  title: 'fbCardButtonElementOrder2',
                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                  minItems: 3,
                                  maxItems: 5,
                                  type: 'array',
                                  items: [
                                    {
                                      title: 'fbTextButtonCard',
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
                                          enum: ['title', 'subtitle'],
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
                                      title: 'fbTextButtonCard',
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
                                          enum: ['title', 'subtitle'],
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
                                      title: 'fbButton',
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
                                          maxLength: 20,
                                        },
                                        click: {
                                          title: 'fbClickOperations',
                                          $schema: 'http://json-schema.org/draft-07/schema#',
                                          type: 'object',
                                          additionalProperties: false,
                                          properties: {
                                            metadata: {
                                              title: 'fbClickMetadata',
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
                                                    title: 'fbClickActionPublishText',
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
                                                    title: 'fbClickActionLink',
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
                                                    title: 'fbClickActionNavigate',
                                                    $schema: 'http://json-schema.org/draft-07/schema#',
                                                    type: 'object',
                                                    required: ['type', 'lo', 'la'],
                                                    properties: {
                                                      type: {
                                                        type: 'string',
                                                        enum: ['navigate'],
                                                        default: 'navigate',
                                                        readonly: true,
                                                      },
                                                      lo: {
                                                        type: 'number',
                                                      },
                                                      la: {
                                                        type: 'number',
                                                      },
                                                      name: {
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
                                  additionalItems: {
                                    title: 'fbButton',
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
                                        maxLength: 20,
                                      },
                                      click: {
                                        title: 'fbClickOperations',
                                        $schema: 'http://json-schema.org/draft-07/schema#',
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                          metadata: {
                                            title: 'fbClickMetadata',
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
                                                  title: 'fbClickActionPublishText',
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
                                                  title: 'fbClickActionLink',
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
                                                  title: 'fbClickActionNavigate',
                                                  $schema: 'http://json-schema.org/draft-07/schema#',
                                                  type: 'object',
                                                  required: ['type', 'lo', 'la'],
                                                  properties: {
                                                    type: {
                                                      type: 'string',
                                                      enum: ['navigate'],
                                                      default: 'navigate',
                                                      readonly: true,
                                                    },
                                                    lo: {
                                                      type: 'number',
                                                    },
                                                    la: {
                                                      type: 'number',
                                                    },
                                                    name: {
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
          required: ['type', 'elements'],
        },
      ],
    },
  },
};
