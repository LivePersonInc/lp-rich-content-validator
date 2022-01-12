# lp-rich-content-validator

[![Supports VSC-DevContainers](https://img.shields.io/badge/Supports-VSC--DevContainers-informational?logo=visual-studio-code)](#about-the-vsc-devcontainer-setup)

[![Tests](https://github.com/LivePersonInc/rich-content-validator/actions/workflows/runTests.yml/badge.svg)](https://github.com/LivePersonInc/rich-content-validator/actions/workflows/runTests.yml)
[![Tests](https://github.com/LivePersonInc/rich-content-validator/actions/workflows/createRelease.yml/badge.svg)](https://github.com/LivePersonInc/rich-content-validator/actions/workflows/createRelease.yml)

This validator supports checking a JSON to verify that it is one of the three common [LivePerson rich content](https://developers.liveperson.com/getting-started-with-rich-messaging-introduction.html) types ``body``, ``metadata`` or ``quickReply``. The check not only verifies that the JSON is generally valid rich content, but also that it is executable on a particular messaging channel. (**Apple Business Chat**, **Facebook**, **Google Business Messages**, **Line**, **Google RCS Business Messaging** or **Web**) To do this, the channel for which the check is performed must be defined before validation. (see [usage section](#usage-instantiation--methods))

However, the validation result is not just limited to ``true`` or ``false``. If the validation fails, a detailed error messages is returned, which supports the user in correcting the JSON.

The validation itself is [JSON-schema](https://json-schema.org/) based and uses [ajv](https://www.npmjs.com/package/ajv) at the core.

## :exclamation::exclamation:Disclaimer:exclamation::exclamation:

This package aims to support our customers in creating [LivePerson rich content](https://developers.liveperson.com/getting-started-with-rich-messaging-introduction.html), by giving them more transparency why a creation is or is not valid for specific messaging channels.

**However**, even though this package is actively maintained, LivePerson **does not guarantee** the validity of its results. This is mainly because some systems which are involved in the journey of a rich content message are not owned by LivePerson. (see the [contribute section](#how-to-contribute) for more information)

## Downward compatibility

The ``lp-rich-content-validator`` rejects certain JSONs, which can be sent with the Conversational Cloud, but are misrepresented to the recipient. This is to ensure that only rich content is sent that can actually be fully displayed. These cases are listed below, sorted by channel:

1. Facebook:
   - JSONs that contain a map element are rejected because the channel does not display them.
2. RcsBusinessMessaging:
   - JSONs that contain a map element are rejected because the channel does not display them.
   - Cards in carousels may not contain more than two buttons.

## Usage (Instantiation & Methods)

### 1. Instantiation

First add the validator to your project:

```shell
npm install lp-rich-content-validator --save
```

The following parameters can be defined during instantiation:

|       name       | required? | defaultValue |                          description                         | exampleValues  |
|:----------------:|:---------:|:------------:|:------------------------------------------------------------:|---------------|
| channel          |     Y     |       -      | Defines the channel for which the validator should validate. Can either stand for Facebook, AppleBusinessChat, Line, RcsBusinessMessaging or Web.| Channels.FB <br> Channels.ABC <br> Channels.LINE <br> ... |
| declinePastDates |     N     |     false    |Defines whether the validator should reject dates that lie in the past for DatePickers. Currently this is only relevant for the AppleBusinessChat channel.<br> :exclamation:**ATTENTION**:exclamation:<br> This feature is experimental and its reliability is explicitly not guaranteed. Therefore it is disabled by default.| true          |

```ts
const { RichContentValidator, Channels } = require("lp-rich-content-validator");

const config = {
    channel: Channels.FB,
    declinePastDates: false
};

const validator = new RichContentValidator(config);
```

### 2. validator.**getChannelName**()

Returns the channel for which the validator is currently configured.

```ts
const channel = validator.getChannelName();
// ...
```

### 3. validator.**setChannelTo**(config)

Is used to adjust the channel for which a validator validates after instantiation. The ``declinePastDates`` param works as during instantiation and is set to ``false`` by default since the date check feature is experimental.

```ts
const config = { channel: Channels.ABC, declinePastDates: false };

validator.setChannelTo(config);
// ...
```

### 4. validator.**validateBody**(body)

Used to check if a JSON is valid rich content of the type ``body`` on the channel the validator is set to.

```ts
const body = {
    // JSON to validate
};

const result = validator.validateBody(body);
// ...
```

### 5. validator.**validateMetadata**(metadata)

Used to check if a JSON is valid rich content of the type ``metadata`` on the channel the validator is set to.

```ts
const metadata = {
    // JSON to validate
};

const result = validator.validateMetadata(metadata);
// ...
```

### 6. validator.**validateQuickReply**(quickReply)

Used to check if a JSON is valid rich content of the type ``quickReply`` on the channel the validator is set to.

```ts
const quickReply = {
    // JSON to validate
};

const result = validator.validateQuickReply(quickReply);
// ...
```

### 7. validator.**exportSchema**(config)

Creates and returns a JSON-schema object for a specific rich content type/channel depending on the passed parameters. Be aware that the exported schema will only provide correct validation results if the rich content object that should be validated is sorted before. If you are unsure whether this is the case, it is better to use the validation methods 'validateBody', 'validateMetadata' or 'validateQuickReply' instead of exporting.  The ``declinePastDates`` parameter defines whether the schema should reject dates that lie in the past for DatePickers. Currently this is only relevant for the AppleBusinessChat channel and makes only sense if the exported schema is used instantly. The date check is a experimental feature and therefore the parameter is set to ``false`` by default.

```ts
const { Types, Channels } = require("lp-rich-content-validator");

const config = { type: Types.BDY, channel: Channels.WEB };
const webBodySchema = validator.exportSchema(config);
// ...
```

## How to Contribute

### Why is there reason to contribute?

As mentioned in our [disclaimer](#exclamationexclamationdisclaimerexclamationexclamation) LivePerson does not own all systems which are involved in the journey of a rich content message. More specifically we are talking about the APIs of the different messaging providers (like e.g. Facebook) which have their own definitions an limitations what kind of rich content is accepted.

This makes maintaining the LivePerson definition very complex in general. Additionally there can be cases where those external APIs change in a way, where they do not break our tests, but rather just change the visualization of the rich content.

**To sum it up** this means there can be cases where this package validates a JSON, which in the end either is not sendable to the intended messaging channel via the Conversational Cloud at all or is misrepresented. If you noticed such a discrepancy **please contribute** by either [creating an issue](https://github.com/LivePersonInc/rich-content-validator/issues/new/choose) and reaching out to a LivePerson employee, or see below what steps to take if you want to improve the validation yourself.

### Why:exclamation:**not**:exclamation:to contribute to the Web-validation

At LivePerson those validation schemas are handled in a different way than the ones for other channels and should be always up to date.

If you nevertheless noticed a discrepancy in validation results and what gets accepted by the Conversational Cloud, please [create an issue](https://github.com/LivePersonInc/rich-content-validator/issues/new/choose) and reach out to a LivePerson employee and they will take care of it. (***Hint**: If you are a LP-employee who got notified by a customer, check the [maintenance](#maintenance) section for how to proceed.*)

### How to contribute to the ABC/FB/GBM/LINE/RBM/WA-validation

If there is a change to either one of the rich content validations for ABC, FB, GBM, LINE, RBM or WA perform the following steps:<br>

1. Adjust the schemas of the respective channel in the `./schemas`-folder according to the new definition.
2. In case of new schemas add them to the `./schemas/index.ts`-file. If the schema is referenced by another schema, make sure to name the `import` the same way as you do in the `"$ref"`-reference without the `.json`-ending. Best practice is to just use the filename if possible.
3. Define/adjust test cases according to the changes by adding/adjusting them in the `./tests/helper`-folder. Stick to the `ITestJson`-definition and make sure they get exported in the `./tests/helper/index.ts`-file.
4. Use the `npm run test` script to see if everything works. :white_check_mark:
5. Open a PR to the `master`-branch.
6. See if all the checks are passing. :white_check_mark:
7. The PR will be picked up by the LP-maintainers. (additionally reaching out does not hurt though :wink:)

## About the VSC-DevContainer-Setup

> For more general information about VSC-DevContainers see [here](https://code.visualstudio.com/docs/remote/containers).

> __Attention__: For better performance it is recommended to [clone the repository in a volume](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) rather than [opening the folder in the container](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container).

### Features of the setup

- fully __functional and pre-configured Eslint setup__ for consistent file formatting.
- feature rich **[Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) which automatically runs tests in the background** for live feedback.
- other convenient stuff like __more git tooling, spell checker, proper zsh installation, markdown linting, additional preview rendering, etc__

## Maintenance

As a maintainer of this package from LivePerson, see the [internal documentation](https://confluence.liveperson.com/x/eY2iC) for more information on maintenance.
