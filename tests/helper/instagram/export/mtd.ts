export const expectedSchemaMetadataInstagram = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $ref: '#/definitions/root',
  definitions: {
    root: {
      title: 'instagramMetadataRoot',
      $schema: 'http://json-schema.org/draft-07/schema#',
      oneOf: [
        {
          title: 'Social Messaging Event Data',
          description: 'Additional data from Social channel.',
          additionalProperties: false,
          type: 'object',
          properties: {
            type: {
              enum: ['SocialMessagingEventData'],
              default: 'SocialMessagingEventData',
              type: 'string',
            },
            event: {
              oneOf: [
                {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    source: {
                      enum: ['Facebook'],
                      default: 'Facebook',
                      description: 'Name of Social Network',
                      type: 'string',
                    },
                    type: {
                      enum: [
                        'DirectMessage',
                        'Post',
                        'CommentToComment',
                        'CommentToPost',
                        'PrivateReplyToComment',
                        'PrivateReplyToPost',
                        'ConsumerAction',
                        'CC',
                        'CP',
                      ],
                      type: 'string',
                      description:
                        'Possible values: DirectMessage (private), Post, CommentToComment, CommentToPost, PrivateReplyToComment, PrivateReplyToPost, ConsumerAction',
                    },
                    parent: {
                      type: 'object',
                      description: 'Contains fields from post',
                      additionalProperties: false,
                      properties: {
                        attachmentUrl: {
                          type: 'string',
                          maxLength: 2048,
                        },
                        pageName: {
                          type: 'string',
                          maxLength: 64,
                        },
                        postId: {
                          type: 'string',
                          maxLength: 64,
                        },
                        postText: {
                          type: 'string',
                          maxLength: 128,
                        },
                        timestamp: {
                          type: 'number',
                        },
                      },
                    },
                  },
                  required: ['source', 'type'],
                },
                {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    source: {
                      enum: ['Twitter'],
                      default: 'Twitter',
                      description: 'Name of Social Network',
                      type: 'string',
                    },
                    type: {
                      enum: ['DirectMessage', 'Tweet', 'Reply', 'Retweet', 'ConsumerAction'],
                      type: 'string',
                    },
                    parent: {
                      type: 'object',
                      description: 'Contains fields from tweet',
                      additionalProperties: false,
                      properties: {
                        attachmentUrl: {
                          type: 'string',
                          maxLength: 2048,
                        },
                        accountName: {
                          type: 'string',
                          maxLength: 64,
                        },
                        accountId: {
                          type: 'string',
                          maxLength: 64,
                        },
                        tweetId: {
                          type: 'string',
                          maxLength: 32,
                        },
                        tweetText: {
                          type: 'string',
                          maxLength: 128,
                        },
                        timestamp: {
                          type: 'number',
                        },
                      },
                    },
                  },
                  required: ['source', 'type'],
                },
                {
                  type: 'object',
                  additionalProperties: false,
                  properties: {
                    source: {
                      enum: ['Instagram'],
                      default: 'Instagram',
                      description: 'Name of Social Network',
                      type: 'string',
                    },
                  },
                  required: ['source'],
                },
              ],
            },
            channel: {
              enum: ['Public', 'Private'],
              description: 'Indicating the type of conversation for this event.',
              default: 'EventType',
              type: 'string',
            },
            replyToId: {
              type: 'string',
              description: 'Message id. Tweet id for twitter, comment or post id for FB and IG',
              maxLength: 256,
            },
            actions: {
              type: 'array',
              items: {
                type: 'object',
                additionalProperties: false,
                description: 'Action object or any custom parameter',
                properties: {
                  name: {
                    type: 'string',
                    description: 'Like, Delete, Block, Ban, Hide, Report, ConsumerMention or custom parameter',
                    maxLength: 64,
                  },
                  payload: {
                    type: 'string',
                    description: 'Payload with objects to be handled on back-end if necessary',
                    maxLength: 5000,
                  },
                },
                required: ['name'],
              },
              maxItems: 50,
            },
            conversationState: {
              type: 'object',
              title: 'Conversation State',
              description: 'Conversation state coming from backend.',
              additionalProperties: false,
              properties: {
                dmChatId: {
                  type: 'string',
                  description: 'Reference id to direct channel',
                  maxLength: 64,
                },
                currentChannel: {
                  enum: ['Public', 'Private'],
                  description: 'Current channel state for conversation',
                  default: 'EventType',
                  type: 'string',
                },
                enabledChannels: {
                  type: 'object',
                  additionalProperties: false,
                  description: 'Settings configured on connectors',
                  properties: {
                    private: {
                      type: 'boolean',
                    },
                    public: {
                      type: 'boolean',
                    },
                  },
                },
              },
              required: ['currentChannel'],
            },
          },
          required: ['type', 'event', 'channel'],
        },
      ],
    },
  },
};
