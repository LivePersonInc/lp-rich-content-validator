Feature: Exporting the Schemas as one file

  Scenario: Exporting rich content-bodies and -metadata schemas for ABC
    Given I have a Rich Content validator for ABC
    When I try to export the schemas for rich content-bodies and -metadata
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Trying to export quickreplies schemas for ABC
    Given I have a Rich Content validator for ABC
    When I try to export the schemas for quickreplies
    Then I receive an Error stating that ABC has no schemas for that rich content-type

  Scenario: Exporting All FB schemas
    Given I have a Rich Content validator for FB
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All Twitter schemas
    Given I have a Rich Content validator for Twitter
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All Instagram schemas
    Given I have a Rich Content validator for Instagram
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All Line schemas
    Given I have a Rich Content validator for ABC
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All RBM schemas
    Given I have a Rich Content validator for RBM
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All Web schemas
    Given I have a Rich Content validator for Web
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All GBM schemas
    Given I have a Rich Content validator for GBM
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All Viber schemas
    Given I have a Rich Content validator for Viber
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested

  Scenario: Exporting All WhatsApp schemas
    Given I have a Rich Content validator for WhatsApp
    When I try to export the schemas for rich content-bodies, -metadata and -quickreplies
    Then I receive one correct schema file for each of the rich content-types I requested
