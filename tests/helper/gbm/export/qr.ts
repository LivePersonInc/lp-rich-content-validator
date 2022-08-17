export const expectedSchemaQuickrepliesGbm = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'gbmQuickReplyRoot',
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
      additionalProperties: false,
    },
  },
};
