import {
  bdyDatePickerAbc,
  bdyVerticalCardAbc,
  mdListPickerAbc,
  mdDatePickerAbc,
  bdyListPickerAbc,
  bdyVerticalCardOnlyImageAbc,
  bdyVerticalCardOnlyButtonAbc,
  bdyVerticalCardTwoButtonsAbc,
  bdyVerticalCardTwoImagesAbc,
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
  bdyListPickerButtonMissingTitleAbc,
  bdyListPickerMissingEntryDefTitleAbc,
  bdyListPickerMissingEntryDefButtonAbc,
  bdyListPickerMissingEntryDefSubtitleAbc,
  expectedSchemaBodyAbc,
  expectedSchemaMetadataAbc,
} from './abcHelper';

import {
  bdyCarouselComplexLine,
  bdyVerticalCardLine,
  qrQuickRepliesTextOnlyLine,
  qrQuickRepliesWithEmojisLine,
  bdyCardWithoutImageOrTitleLine,
  bdyCardWithTooLongSubtitle1Line,
  bdyCardWithTooLongSubtitle2Line,
  bdyCardWithImageTitleSubtitleLine,
  bdyCardWorkingLine,
  bdyCardWith4ButtonsLine,
  bdyCardWith5ButtonsLine,
  bdyCarouselWith4ButtonCardsLine,
  bdyCarouselWith2ButtonCardsLine,
  bdyCarouselWith3ButtonCardsLine,
  bdyCarouselWithoutImageAndTitleLine,
  bdyCarouselWith11CardsLine,
  bdyCarouselWith10CardsLine,
  bdyCarouselRandom1Line,
  bdyCarouselRandom2Line,
  bdyCardWithDisplayPropertyLine,
  bdyCarouselWithDisplayPropertyLine,
  bdyCardWithWrongDisplayPropertyLine,
  bdyCarouselWithWrongDisplayPropertyLine,
  expectedSchemaBodyLine,
  expectedSchemaMetadataLine,
  expectedSchemaQuickrepliesLine,
} from './lineHelper';

import {
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
} from './webHelper';

import {
  qrQuickRepliesSpecialCharactersRbm,
  qrQuickReplies11ButtonsRbm,
  qrQuickReplies12ButtonsRbm,
  qrQuickReply26CharsRbm,
  qrQuickReply25CharsRbm,
  bdyVerticalCardRbm,
  bdyHorizontalCardRbm,
  bdyVerticalCardTooLongButtonRbm,
  bdyHorizontalCardTooLongButtonRbm,
  bdyHorizontalCardWithoutImageRbm,
  bdyVerticalCardWithoutImageRbm,
  bdyHorizontalCardWithoutTitleOrSubtitleRbm,
  bdyVerticalCardWithoutTitleOrSubtitleRbm,
  bdyHorizontalCardTooManyButtonsRbm,
  bdyVerticalCardTooManyButtonsRbm,
  bdyCarousel10CardsRbm,
  bdyCarousel11CardsRbm,
  expectedSchemaBodyRbm,
  expectedSchemaMetadataRbm,
  expectedSchemaQuickrepliesRbm,
} from './rbmHelper';

import {
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
} from './viberHelper';

import { fbJsonContainers, expectedSchemaBodyFb, expectedSchemaMetadataFb, expectedSchemaQuickrepliesFb } from './fb';
import { gbmJsonContainers, expectedSchemaBodyGbm, expectedSchemaMetadataGbm, expectedSchemaQuickrepliesGbm } from './gbm';
import { Channels } from '../../src';
import { Types } from '../../src/types';

export const testJsonContainers = [
  ...fbJsonContainers,
  ...gbmJsonContainers,

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

  bdyCarouselComplexLine,
  bdyVerticalCardLine,
  qrQuickRepliesTextOnlyLine,
  qrQuickRepliesWithEmojisLine,
  bdyCardWithoutImageOrTitleLine,
  bdyCardWithTooLongSubtitle1Line,
  bdyCardWithTooLongSubtitle2Line,
  bdyCardWithImageTitleSubtitleLine,
  bdyCardWorkingLine,
  bdyCardWith4ButtonsLine,
  bdyCardWith5ButtonsLine,
  bdyCarouselWith4ButtonCardsLine,
  bdyCarouselWith2ButtonCardsLine,
  bdyCarouselWith3ButtonCardsLine,
  bdyCarouselWithoutImageAndTitleLine,
  bdyCarouselWith11CardsLine,
  bdyCarouselWith10CardsLine,
  bdyCardWithDisplayPropertyLine,
  bdyCarouselWithDisplayPropertyLine,
  bdyCarouselRandom1Line,
  bdyCarouselRandom2Line,
  bdyCardWithWrongDisplayPropertyLine,
  bdyCarouselWithWrongDisplayPropertyLine,

  qrQuickRepliesSpecialCharactersRbm,
  qrQuickReplies11ButtonsRbm,
  qrQuickReplies12ButtonsRbm,
  qrQuickReply26CharsRbm,
  qrQuickReply25CharsRbm,
  bdyVerticalCardRbm,
  bdyHorizontalCardRbm,
  bdyVerticalCardTooLongButtonRbm,
  bdyHorizontalCardTooLongButtonRbm,
  bdyHorizontalCardWithoutImageRbm,
  bdyVerticalCardWithoutImageRbm,
  bdyHorizontalCardWithoutTitleOrSubtitleRbm,
  bdyVerticalCardWithoutTitleOrSubtitleRbm,
  bdyHorizontalCardTooManyButtonsRbm,
  bdyVerticalCardTooManyButtonsRbm,
  bdyCarousel10CardsRbm,
  bdyCarousel11CardsRbm,

  bdyDatePickerAbc,
  bdyVerticalCardAbc,
  bdyVerticalCardOnlyImageAbc,
  bdyVerticalCardOnlyButtonAbc,
  bdyVerticalCardTwoButtonsAbc,
  bdyVerticalCardTwoImagesAbc,
  mdListPickerAbc,
  mdDatePickerAbc,
  bdyListPickerButtonMissingTitleAbc,
  bdyListPickerMissingEntryDefTitleAbc,
  bdyListPickerMissingEntryDefButtonAbc,
  bdyListPickerMissingEntryDefSubtitleAbc,
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
];

export const expectedSchemas = {
  [Channels.ABC]: {
    [Types.BDY]: expectedSchemaBodyAbc,
    [Types.MTD]: expectedSchemaMetadataAbc,
  },
  [Channels.FB]: {
    [Types.BDY]: expectedSchemaBodyFb,
    [Types.MTD]: expectedSchemaMetadataFb,
    [Types.QUR]: expectedSchemaQuickrepliesFb,
  },
  [Channels.LINE]: {
    [Types.BDY]: expectedSchemaBodyLine,
    [Types.MTD]: expectedSchemaMetadataLine,
    [Types.QUR]: expectedSchemaQuickrepliesLine,
  },
  [Channels.RBM]: {
    [Types.BDY]: expectedSchemaBodyRbm,
    [Types.MTD]: expectedSchemaMetadataRbm,
    [Types.QUR]: expectedSchemaQuickrepliesRbm,
  },
  [Channels.WEB]: {
    [Types.BDY]: expectedSchemaBodyWeb,
    [Types.MTD]: expectedSchemaMetadataWeb,
    [Types.QUR]: expectedSchemaQuickrepliesWeb,
  },
  [Channels.GBM]: {
    [Types.BDY]: expectedSchemaBodyGbm,
    [Types.MTD]: expectedSchemaMetadataGbm,
    [Types.QUR]: expectedSchemaQuickrepliesGbm,
  },
  [Channels.VIBER]: {
    [Types.BDY]: expectedSchemaBodyViber,
    [Types.MTD]: expectedSchemaMetadataViber,
    [Types.QUR]: expectedSchemaQuickrepliesViber,
  }
};
