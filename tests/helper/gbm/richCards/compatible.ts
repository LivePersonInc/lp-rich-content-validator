import { Channels, ITestJson, Types } from '../../../../src/types';
import actionButtonsJson from './json/actionButtons.json';
import differentButtonsJson from './json/differentButtons.json';
import displayCompactJson from './json/displayCompact.json';
import displayTallJson from './json/displayTall.json';
import maxButtonsJson from './json/maxButtons.json';
import multiActionButtonJson from './json/multiActionButton.json';
import onlyImageJson from './json/onlyImage.json';
import onlyTextJson from './json/onlyText.json';
import onlyTitleJson from './json/onlyTitle.json';
import standardJson from './json/standard.json';

export function richContentCard(): ITestJson {
  return {
    description: 'richContentCard',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: standardJson,
  };
}

export function richContentCardDifferentButtons(): ITestJson {
  return {
    description: 'richContentCardDifferentButtons',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: differentButtonsJson,
  };
}

export function richContentCardActionButtonsJson(): ITestJson {
  return {
    description: 'richContentCardActionButtonsJson',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: actionButtonsJson,
  };
}

export function richContentCardDisplayCompact(): ITestJson {
  return {
    description: 'richContentCardDisplayCompact',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: displayCompactJson,
  };
}

export function richContentCardDisplayTall(): ITestJson {
  return {
    description: 'richContentCardDisplayTall',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: displayTallJson,
  };
}

export function richContentCardMaxButtons(): ITestJson {
  return {
    description: 'richContentCardMaxButtons',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: maxButtonsJson,
  };
}

export function richContentCardMultiActionButton(): ITestJson {
  return {
    description: 'richContentCardMultiActionButton',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: multiActionButtonJson,
  };
}

export function richContentCardOnlyImage(): ITestJson {
  return {
    description: 'richContentCardOnlyImage',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: onlyImageJson,
  };
}

export function richContentCardOnlyText(): ITestJson {
  return {
    description: 'richContentCardOnlyText',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: onlyTextJson,
  };
}

export function richContentCardOnlyTitle(): ITestJson {
  return {
    description: 'richContentCardOnlyTitle',
    richContentType: Types.BDY,
    channel: Channels.GBM,
    channelCompatibility: {
      [Channels.FB]: undefined,
      [Channels.ABC]: undefined,
      [Channels.LINE]: undefined,
      [Channels.RBM]: undefined,
      [Channels.GBM]: true,
      [Channels.WEB]: undefined,
    },
    json: onlyTitleJson,
  };
}
