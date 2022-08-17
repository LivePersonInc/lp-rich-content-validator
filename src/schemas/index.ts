import { Types, Channels } from '../types';

import fbClickActionLink from './facebook/bodies/basics/clickOperations/fbClickActionLink.json';
import fbClickActionNavigate from './facebook/bodies/basics/clickOperations/fbClickActionNavigate.json';
import fbClickActionPublishText from './facebook/bodies/basics/clickOperations/fbClickActionPublishText.json';
import fbClickMetadata from './facebook/bodies/basics/clickOperations/fbClickMetadata.json';
import fbClickOperations from './facebook/bodies/basics/clickOperations/fbClickOperations.json';
import fbButton from './facebook/bodies/basics/fbButton.json';
import fbImage from './facebook/bodies/basics/fbImage.json';
import fbTextButtonCard from './facebook/bodies/basics/fbTextButtonCard.json';
import fbTextGenericCard from './facebook/bodies/basics/fbTextGenericCard.json';
import fbCardButton from './facebook/bodies/cards/fbCardButton/fbCardButton.json';
import fbCardButtonElementOrder1 from './facebook/bodies/cards/fbCardButton/fbCardButtonElementOrder1.json';
import fbCardButtonElementOrder2 from './facebook/bodies/cards/fbCardButton/fbCardButtonElementOrder2.json';
import fbCardGenericCarousel from './facebook/bodies/cards/fbCardGeneric/fbCardGenericCarousel.json';
import fbCardGenericElementOrder1 from './facebook/bodies/cards/fbCardGeneric/fbCardGenericElementOrder1.json';
import fbCardGenericElementOrder2 from './facebook/bodies/cards/fbCardGeneric/fbCardGenericElementOrder2.json';
import fbCardGenericElementOrder3 from './facebook/bodies/cards/fbCardGeneric/fbCardGenericElementOrder3.json';
import fbCardGenericElementOrder4 from './facebook/bodies/cards/fbCardGeneric/fbCardGenericElementOrder4.json';
import fbCardGenericStandalone from './facebook/bodies/cards/fbCardGeneric/fbCardGenericStandalone.json';
import fbBodyRoot from './facebook/bodies/fbBodyRoot.json';
import fbCarousel from './facebook/bodies/fbCarousel.json';
import fbMetadataRoot from './facebook/metadata/fbMetadataRoot.json';
import fbQuickReplyRoot from './facebook/quickReply/fbQuickReplyRoot.json';
import fbQuickReplyActions from './facebook/quickReply/fbQuickReplyActions.json';
import fbQuickReplyButton from './facebook/quickReply/fbQuickReplyButton.json';

import lineClickActionLink from './line/bodies/basics/clickOperations/lineClickActionLink.json';
import lineClickActionPublishText from './line/bodies/basics/clickOperations/lineClickActionPublishText.json';
import lineClickMetadata from './line/bodies/basics/clickOperations/lineClickMetadata.json';
import lineClickOperations from './line/bodies/basics/clickOperations/lineClickOperations.json';
import lineButton from './line/bodies/basics/lineButton.json';
import lineImage from './line/bodies/basics/lineImage.json';
import lineSubtitleLong from './line/bodies/basics/lineSubtitleLong.json';
import lineSubtitleShort from './line/bodies/basics/lineSubtitleShort.json';
import lineTitle from './line/bodies/basics/lineTitle.json';
import lineCardElementOrder1 from './line/bodies/cards/lineCardElementOrder1.json';
import lineCardElementOrder2 from './line/bodies/cards/lineCardElementOrder2.json';
import lineCardElementOrder3 from './line/bodies/cards/lineCardElementOrder3.json';
import lineButtonTemplateElementOrder1 from './line/bodies/cards/lineButtonTemplateElementOrder1.json';
import lineButtonTemplateElementOrder2 from './line/bodies/cards/lineButtonTemplateElementOrder2.json';
import lineButtonTemplateElementOrder3 from './line/bodies/cards/lineButtonTemplateElementOrder3.json';
import lineCardInCarousel from './line/bodies/cards/lineCardInCarousel.json';
import lineCardStandAlone from './line/bodies/cards/lineCardStandAlone.json';
import lineCarousel from './line/bodies/lineCarousel.json';
import lineDisplaySettings from './line/bodies/lineDisplaySettings.json';
import lineBodyRoot from './line/bodies/lineBodyRoot.json';
import lineMetadataRoot from './line/metadata/lineMetadataRoot.json';
import lineQuickReplyRoot from './line/quickReply/lineQuickReplyRoot.json';
import lineQuickReplyActions from './line/quickReply/lineQuickReplyActions.json';
import lineQuickReplyButton from './line/quickReply/lineQuickReplyButton.json';

import rbmClickActionLink from './rcsBusinessMessaging/bodies/basics/clickOperations/rbmClickActionLink.json';
import rbmClickActionNavigate from './rcsBusinessMessaging/bodies/basics/clickOperations/rbmClickActionNavigate.json';
import rbmClickActionPublishText from './rcsBusinessMessaging/bodies/basics/clickOperations/rbmClickActionPublishText.json';
import rbmClickMetadata from './rcsBusinessMessaging/bodies/basics/clickOperations/rbmClickMetadata.json';
import rbmClickOperations from './rcsBusinessMessaging/bodies/basics/clickOperations/rbmClickOperations.json';
import rbmButton from './rcsBusinessMessaging/bodies/basics/rbmButton.json';
import rbmImage from './rcsBusinessMessaging/bodies/basics/rbmImage.json';
import rbmSubtitle from './rcsBusinessMessaging/bodies/basics/rbmSubtitle.json';
import rbmTitle from './rcsBusinessMessaging/bodies/basics/rbmTitle.json';
import rbmCard from './rcsBusinessMessaging/bodies/cards/rbmCard.json';
import rbmCard1 from './rcsBusinessMessaging/bodies/cards/rbmCard1.json';
import rbmCard2 from './rcsBusinessMessaging/bodies/cards/rbmCard2.json';
import rbmCardElementOrder1 from './rcsBusinessMessaging/bodies/cards/rbmCardElementOrder1.json';
import rbmCardElementOrder2 from './rcsBusinessMessaging/bodies/cards/rbmCardElementOrder2.json';
import rbmCardElementOrder3 from './rcsBusinessMessaging/bodies/cards/rbmCardElementOrder3.json';
import rbmCardElementOrder4 from './rcsBusinessMessaging/bodies/cards/rbmCardElementOrder4.json';
import rbmCardElementOrder5 from './rcsBusinessMessaging/bodies/cards/rbmCardElementOrder5.json';
import rbmBodyRoot from './rcsBusinessMessaging/bodies/rbmBodyRoot.json';
import rbmCarousel from './rcsBusinessMessaging/bodies/rbmCarousel.json';
import rbmMetadataRoot from './rcsBusinessMessaging/metadata/rbmMetadataRoot.json';
import rbmQuickReplyRoot from './rcsBusinessMessaging/quickReply/rbmQuickReplyRoot.json';
import rbmQuickReplyActions from './rcsBusinessMessaging/quickReply/rbmQuickReplyActions.json';
import rbmQuickReplyButton from './rcsBusinessMessaging/quickReply/rbmQuickReplyButton.json';

import abcClickActionLink from './appleBusinessChat/bodies/basics/clickOperations/abcClickActionLink.json';
import abcClickActionPublishText from './appleBusinessChat/bodies/basics/clickOperations/abcClickActionPublishText.json';
import abcClickMetadata from './appleBusinessChat/bodies/basics/clickOperations/abcClickMetadata.json';
import abcClickMetadataBusinessEvent from './appleBusinessChat/bodies/basics/clickOperations/abcClickMetadataBusinessEvent.json';
import abcClickOperationsDatePicker from './appleBusinessChat/bodies/basics/clickOperations/abcClickOperationsDatePicker.json';
import abcClickOperationsListPicker from './appleBusinessChat/bodies/basics/clickOperations/abcClickOperationsListPicker.json';
import abcClickOperationsRichLink from './appleBusinessChat/bodies/basics/clickOperations/abcClickOperationsRichLink.json';
import abcFuturePatternIso8601 from './appleBusinessChat/bodies/basics/clickOperations/abcFuturePatternIso8601.json';
import abcButtonDatePicker from './appleBusinessChat/bodies/basics/abcButtonDatePicker.json';
import abcButtonListPicker from './appleBusinessChat/bodies/basics/abcButtonListPicker.json';
import abcButtonForm from './appleBusinessChat/bodies/basics/abcButtonForm.json';
import abcButtonRichLink from './appleBusinessChat/bodies/basics/abcButtonRichLink.json';
import abcButtonQuickReply from './appleBusinessChat/bodies/basics/abcButtonQuickReply.json';
import abcImage from './appleBusinessChat/bodies/basics/abcImage.json';
import abcStyle from './appleBusinessChat/bodies/basics/abcStyle.json';
import abcSubtitle from './appleBusinessChat/bodies/basics/abcSubtitle.json';
import abcText from './appleBusinessChat/bodies/basics/abcText.json';
import abcTitle from './appleBusinessChat/bodies/basics/abcTitle.json';
import abcDatePicker from './appleBusinessChat/bodies/datePicker/abcDatePicker.json';
import abcDatePickerButtonContainer from './appleBusinessChat/bodies/datePicker/abcDatePickerButtonContainer.json';
import abcListPickerEntry from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntry.json';
import abcListPickerEntryDefinition from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryDefinition.json';
import abcListPickerEntryDefinitionElementOrder1 from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryDefinitionElementOrder1.json';
import abcListPickerEntryDefinitionElementOrder2 from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryDefinitionElementOrder2.json';
import abcListPickerEntryDefinitionElementOrder3 from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryDefinitionElementOrder3.json';
import abcListPickerEntryDefinitionElementOrder4 from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryDefinitionElementOrder4.json';
import abcListPickerEntryDefinitionElementOrder5 from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryDefinitionElementOrder5.json';
import abcListPickerEntryWithImage from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryWithImage.json';
import abcListPickerEntryWithoutImage from './appleBusinessChat/bodies/listPicker/listPickerEntry/abcListPickerEntryWithoutImage.json';
import abcListPickerSection from './appleBusinessChat/bodies/listPicker/listPickerSection/abcListPickerSection.json';
import abcListPickerSectionWithText from './appleBusinessChat/bodies/listPicker/listPickerSection/abcListPickerSectionWithText.json';
import abcListPickerSectionWithoutText from './appleBusinessChat/bodies/listPicker/listPickerSection/abcListPickerSectionWithoutText.json';
import abcListPicker from './appleBusinessChat/bodies/listPicker/abcListPicker.json';
import abcRichLinkCard from './appleBusinessChat/bodies/richLinkCard/abcRichLinkCard.json';
import abcRichLinkCardElementOrder1 from './appleBusinessChat/bodies/richLinkCard/abcRichLinkCardElementOrder1.json';
import abcRichLinkCardElementOrder2 from './appleBusinessChat/bodies/richLinkCard/abcRichLinkCardElementOrder2.json';
import abcRichLinkCardElementOrder3 from './appleBusinessChat/bodies/richLinkCard/abcRichLinkCardElementOrder3.json';
import abcBodyRoot from './appleBusinessChat/bodies/abcBodyRoot.json';
import abcForm from './appleBusinessChat/bodies/form/abcForm.json';
import abcChatMessageMd from './appleBusinessChat/metadata/abcChatMessageMd.json';
import abcConnectorAuthenticationRequestMd from './appleBusinessChat/metadata/abcConnectorAuthenticationRequestMd.json';
import abcConnectorPaymentRequestMd from './appleBusinessChat/metadata/abcConnectorPaymentRequestMd.json';
import abcCustomMessageMd from './appleBusinessChat/metadata/abcCustomMessageMd.json';
import abcDatePickerMd from './appleBusinessChat/metadata/abcDatePickerMd.json';
import abcMetadataRoot from './appleBusinessChat/metadata/abcMetadataRoot.json';
import abcQuickReplyRoot from './appleBusinessChat/quickReply/abcQuickReplyRoot.json';
import abcFormMd from './appleBusinessChat/metadata/abcFormMd.json';
import abcCBBotResponseMd from './appleBusinessChat/metadata/abcCBBotResponseMd.json';
import abcBotResponse from './appleBusinessChat/metadata/abcBotResponse.json';

import viberBodyRoot from './viber/bodies/viberBodyRoot.json';
import viberClickMetadata from './viber/bodies/basics/clickOperations/viberClickMetadata.json';
import viberClickOperations from './viber/bodies/basics/clickOperations/viberClickOperations.json';
import viberClickActionPublishText from './viber/bodies/basics/clickOperations/viberClickActionPublishText.json';
import viberClickActionLink from './viber/bodies/basics/clickOperations/viberClickActionLink.json';
import viberButton from './viber/bodies/basics/viberButton.json';
import viberImage from './viber/bodies/basics/viberImage.json';
import viberTitle from './viber/bodies/basics/viberTitle.json';
import viberSubtitle from './viber/bodies/basics/viberSubtitle.json';
import viberCard from './viber/bodies/cards/viberCard.json';
import viberCarousel from './viber/bodies/viberCarousel.json';
import viberQuickReplyRoot from './viber/quickReply/viberQuickReplyRoot.json';
import viberQuickReplyActions from './viber/quickReply/viberQuickReplyActions.json';
import viberQuickReplyButton from './viber/quickReply/viberQuickReplyButton.json';
import viberElementStyle from './viber/bodies/basics/viberElementStyle.json';

import action from './web/action.json';
import basic from './web/basic.json';
import button from './web/button.json';
import buttonList from './web/buttonList.json';
import card from './web/card.json';
import carousel from './web/carousel.json';
import checkbox from './web/checkbox.json';
import checklist from './web/checklist.json';
import displaySettings from './web/displaySettings.json';
import image from './web/image.json';
import keyValuePair from './web/keyValuePair.json';
import linkPreview from './web/linkPreview.json';
import list from './web/list.json';
import map from './web/map.json';
import webBodyRoot from './web/rich_content.json';
import section from './web/section.json';
import sectionList from './web/sectionList.json';
import specialAction from './web/specialAction.json';
import style from './web/style.json';
import submitButton from './web/submitButton.json';
import template from './web/template.json';
import text from './web/text.json';
import quickReplies from './web/quickReplies.json';

import { gbmSchemasBody, gbmSchemasQuickReply, gbmSchemasMetadata } from './gbm';

import { whatsappSchemasBody, whatsappSchemasQuickReply, whatsappSchemasMetadata } from './whatsapp';

interface IChannelSchemas {
  [Types.BDY]: { BodyRoot: object; [additionalKeys: string]: object };
  [Types.MTD]: { MetadataRoot: object; [additionalKeys: string]: object };
  [Types.QUR]?: { QuickReplyRoot: object; [additionalKeys: string]: object };
}

interface IAllSchemas {
  [Channels.ABC]: IChannelSchemas;
  [Channels.FB]: IChannelSchemas;
  [Channels.LINE]: IChannelSchemas;
  [Channels.RBM]: IChannelSchemas;
  [Channels.WEB]: IChannelSchemas;
  [Channels.GBM]: IChannelSchemas;
  [Channels.WA]: IChannelSchemas;
  [Channels.VIBER]: IChannelSchemas;
}

const fbSchemas: IChannelSchemas = {
  [Types.BDY]: {
    BodyRoot: fbBodyRoot,
    fbButton,
    fbImage,
    fbCarousel,
    fbClickActionLink,
    fbClickActionNavigate,
    fbClickActionPublishText,
    fbClickMetadata,
    fbClickOperations,
    fbTextButtonCard,
    fbTextGenericCard,
    fbCardButton,
    fbCardButtonElementOrder1,
    fbCardButtonElementOrder2,
    fbCardGenericCarousel,
    fbCardGenericElementOrder1,
    fbCardGenericElementOrder2,
    fbCardGenericElementOrder3,
    fbCardGenericElementOrder4,
    fbCardGenericStandalone,
  },
  [Types.MTD]: { MetadataRoot: fbMetadataRoot },
  [Types.QUR]: {
    QuickReplyRoot: fbQuickReplyRoot,
    fbQuickReplyActions,
    fbQuickReplyButton,
  },
};

const lineSchemas: IChannelSchemas = {
  [Types.BDY]: {
    BodyRoot: lineBodyRoot,
    lineCarousel,
    lineClickActionLink,
    lineClickActionPublishText,
    lineClickMetadata,
    lineClickOperations,
    lineButton,
    lineImage,
    lineSubtitleLong,
    lineSubtitleShort,
    lineTitle,
    lineCardElementOrder1,
    lineCardElementOrder2,
    lineCardElementOrder3,
    lineCardInCarousel,
    lineDisplaySettings,
    lineCardStandAlone,
    lineButtonTemplateElementOrder1,
    lineButtonTemplateElementOrder2,
    lineButtonTemplateElementOrder3,
  },
  [Types.MTD]: { MetadataRoot: lineMetadataRoot },
  [Types.QUR]: {
    QuickReplyRoot: lineQuickReplyRoot,
    lineQuickReplyButton,
    lineQuickReplyActions,
  },
};

const rbmSchemas: IChannelSchemas = {
  [Types.BDY]: {
    BodyRoot: rbmBodyRoot,
    rbmClickActionLink,
    rbmClickActionNavigate,
    rbmClickActionPublishText,
    rbmClickMetadata,
    rbmClickOperations,
    rbmButton,
    rbmImage,
    rbmSubtitle,
    rbmTitle,
    rbmCard,
    rbmCard1,
    rbmCard2,
    rbmCardElementOrder1,
    rbmCardElementOrder2,
    rbmCardElementOrder3,
    rbmCardElementOrder4,
    rbmCardElementOrder5,
    rbmCarousel,
  },
  [Types.MTD]: { MetadataRoot: rbmMetadataRoot },
  [Types.QUR]: {
    QuickReplyRoot: rbmQuickReplyRoot,
    rbmQuickReplyActions,
    rbmQuickReplyButton,
  },
};

const abcSchemas: IChannelSchemas = {
  [Types.BDY]: {
    BodyRoot: abcBodyRoot,
    abcFuturePatternIso8601,
    abcClickMetadataBusinessEvent,
    abcClickOperationsDatePicker,
    abcButtonDatePicker,
    abcDatePicker,
    abcDatePickerButtonContainer,
    abcClickActionLink,
    abcClickMetadata,
    abcClickActionPublishText,
    abcClickOperationsListPicker,
    abcClickOperationsRichLink,
    abcButtonListPicker,
    abcButtonForm,
    abcButtonRichLink,
    abcImage,
    abcStyle,
    abcSubtitle,
    abcText,
    abcTitle,
    abcListPickerEntry,
    abcListPickerEntryDefinition,
    abcListPickerEntryDefinitionElementOrder1,
    abcListPickerEntryDefinitionElementOrder2,
    abcListPickerEntryDefinitionElementOrder3,
    abcListPickerEntryDefinitionElementOrder4,
    abcListPickerEntryDefinitionElementOrder5,
    abcListPickerEntryWithImage,
    abcListPickerEntryWithoutImage,
    abcListPickerSection,
    abcListPickerSectionWithText,
    abcListPickerSectionWithoutText,
    abcListPicker,
    abcRichLinkCard,
    abcRichLinkCardElementOrder1,
    abcRichLinkCardElementOrder2,
    abcRichLinkCardElementOrder3,
    abcForm,

    /*  If a body in ABC is neither 'listPicker', 'datePicker' nor a 'richLink'-Card it gets validated as
    a web-body. (Because then the body is only used to display something to the agent in the
    Conversational Cloud and not in ABC) Therefore an ABC validator also needs the web-schemas. */
    // eslint-disable-next-line @typescript-eslint/camelcase
    abcWebPlaceholder: webBodyRoot,
    action,
    basic,
    button,
    buttonList,
    card,
    carousel,
    checkbox,
    checklist,
    displaySettings,
    image,
    keyValuePair,
    linkPreview,
    list,
    map,
    section,
    sectionList,
    specialAction,
    style,
    submitButton,
    template,
    text,
  },
  [Types.MTD]: {
    MetadataRoot: abcMetadataRoot,
    abcConnectorAuthenticationRequestMd,
    abcConnectorPaymentRequestMd,
    abcCustomMessageMd,
    abcChatMessageMd,
    abcDatePickerMd,
    abcFormMd,
    abcCBBotResponseMd,
    abcBotResponse,
  },
  [Types.QUR]: {
    QuickReplyRoot: abcQuickReplyRoot,
    abcButtonQuickReply,
  },
};

const webSchemas: IChannelSchemas = {
  [Types.BDY]: {
    BodyRoot: webBodyRoot,
    action,
    basic,
    button,
    buttonList,
    card,
    carousel,
    checkbox,
    checklist,
    displaySettings,
    image,
    keyValuePair,
    linkPreview,
    list,
    map,
    section,
    sectionList,
    specialAction,
    style,
    submitButton,
    template,
    text,
  },
  [Types.MTD]: {
    MetadataRoot: {},
  },
  [Types.QUR]: {
    QuickReplyRoot: quickReplies,
    button,
    style,
    action,
    keyValuePair,
  },
};

const gbmSchemas: IChannelSchemas = {
  [Types.BDY]: gbmSchemasBody,
  [Types.MTD]: gbmSchemasMetadata,
  [Types.QUR]: gbmSchemasQuickReply,
};

const whatsappSchemas: IChannelSchemas = {
  [Types.BDY]: whatsappSchemasBody,
  [Types.MTD]: whatsappSchemasMetadata,
  [Types.QUR]: whatsappSchemasQuickReply,
};

const viberSchemas: IChannelSchemas = {
  [Types.BDY]: {
    BodyRoot: viberBodyRoot,
    viberClickActionLink,
    viberClickActionPublishText,
    viberClickMetadata,
    viberClickOperations,
    viberButton,
    viberImage,
    viberSubtitle,
    viberTitle,
    viberCard,
    viberCarousel,
    viberElementStyle,
  },
  [Types.MTD]: {
    MetadataRoot: {},
  },
  [Types.QUR]: {
    QuickReplyRoot: viberQuickReplyRoot,
    viberQuickReplyActions,
    viberQuickReplyButton,
  },
};

const allSchemas: IAllSchemas = {
  [Channels.ABC]: abcSchemas,
  [Channels.FB]: fbSchemas,
  [Channels.LINE]: lineSchemas,
  [Channels.RBM]: rbmSchemas,
  [Channels.WEB]: webSchemas,
  [Channels.GBM]: gbmSchemas,
  [Channels.WA]: whatsappSchemas,
  [Channels.VIBER]: viberSchemas,
};

export default allSchemas;
