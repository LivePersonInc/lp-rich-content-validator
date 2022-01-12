export const expectedSchemaQuickrepliesFb = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'fbQuickReplyRoot',
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
            title: 'fbQuickReplyButton',
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
                maxLength: 127,
              },
              click: {
                $schema: 'http://json-schema.org/draft-07/schema#',
                title: 'fbQuickReplyActions',
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
