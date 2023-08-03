# g1-platform-testauto-interview

This is the documentation regarding the technical test for QC Software Engineer
in Test Automation.

Read it carefully

## Table of contents

- [g1-platform-testauto-interview](#g1-platform-testauto-interview)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Starting the scripts](#starting-the-scripts)
  - [Goals of the test](#goals-of-the-test)
    - [Where to start](#where-to-start)
    - [Familiarization with the tools](#familiarization-with-the-tools)
    - [Comprehension of the documentation](#comprehension-of-the-documentation)
      - [The runner](#the-runner)
    - [Scenario definition](#scenario-definition)
      - [Titles](#titles)
      - [Step order and semantics](#step-order-and-semantics)
    - [Scenario implementation](#scenario-implementation)
  - [Guidelines](#guidelines)
    - [Cucumber](#cucumber)
      - [Scenario organization](#scenario-organization)
      - [Step naming](#step-naming)
    - [TypeScript](#typescript)
      - [Logic reusability](#logic-reusability)

## Installation

To start, you will need:

- [Git bash](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/) (LTS version for stability)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [Visual Studio Code](https://code.visualstudio.com/)

Once you have cloned the repository and installed all the tools, you can open a
terminal and use

```bash
yarn
```

It will install all the required packages.

**/!\\** If you have some of the tools already installed, be sure they have the right version. **/!\\**

## Starting the scripts

In a terminal, start the [e2e script](./package.json#L9) by typing

```bash
yarn e2e
```

All tests will run, but only two tests should pass.

## Goals of the test

This technical test was made to ensure a sufficient understanding of the various
tools that are used in the real product, as well as assess your ability to
learn, adapt, and find information.

### Where to start

Open the [feature file](./features/interview.feature).
There, you'll find your main tasks.

The implementation of the steps defined in the `feature` file is located in the
[step file](./steps/interview.ts).

Finally, the [page model](./steps/pageModel.ts) regroups all the selectors to
make interactions with the page easier to read.

### Familiarization with the tools

This is obvious: by the end of the test, you'll hopefully understand
what it is that we do, why we do it, and how.

This will help us figure out if you are a match for the team, and help you
figure out if this project is a match for you too.

### Comprehension of the documentation

This is also pretty straightforward: are you able to find and use
information in the various documentation at your disposal?

#### The runner

[Playwright](https://playwright.dev/docs/intro) was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.

[Locators](https://playwright.dev/docs/api/class-locator) are used to defined the elements which with the test will interact. They use [CSS selectors](https://www.w3schools.com/cssref/css_selectors.php)

[CucumberJs](https://cucumber.io/docs/guides/) is a tool that supports Behavior-Driven Development(BDD). If you’re new to Behavior-Driven Development read our BDD introduction first.

[Cucumber Expressions](https://github.com/cucumber/cucumber-expressions#readme) are used to define more complex steps with parameters.

[ITestController] is the object that allow the tests to access to the page and it's context.

### Scenario definition

A pretty big part of this step is learning how to define `Cucumber` scenarios.
The main purpose of those scenario are to act as documentation about how the
tested page/feature behaves.

#### Titles

As they can be used as documentation, scenarios are required to have a clear and
explicit title. The real trick is to also keep it as short as possible.

#### Step order and semantics

You are expected to figure out how, why and when to use the different kinds of Steps that
`Cucumber` has to offer. Those steps are `Given`, `When` and `Then`.

### Scenario implementation

Test automation would be worthless without scripting. Aside from getting
familiar with the libraries that are at you disposal in this project, you will
also need to demonstrate some understanding of JavaScript.

## Guidelines

Those guidelines are here to help your work match the existing work from the
rest of the team.

Maintaining consistency and readability is important in any kind of development,
but it is even more so when your test definitions may be used to document how
the tested features work.

### Cucumber

As previously stated, `Cucumber` offers three types of steps.

- `Given` corresponds to the **prerequisites** of your scenario, the starting point of
  the actual test
- `When` corresponds to the **actions** that are going to be taken by the
  user/script, the feature that is being tested
- `Then` corresponds to the **results** that are expected, the output of the test

Several steps of the same type may be linked by replacing their keyword with
`And` or `But`

```gherkin
Given something
And something else
When the user does one thing
But the user doesn't do the other thing
```

#### Scenario organization

As a rule, when building a _set_ of scenarios, it is better to build them on top
of each other.

For instance:

```gherkin
Scenario: Login form accessibility
    Given the website is displayed
    When the user clicks on the login button
    Then the login form should be displayed

Scenario: User login
    Given the login form is displayed
    When the user validates their credentials
    Then the user should be logged
```

The logic used in the first scenario can be reused for the first step of the
second scenario. Furthermore, working that way ensures that most "complicated"
steps are explained in detail by a previous scenario.

However, keep in mind that those two tests are not dependent, they can both run
successfully without the other. Keeping tests _isolated_ is really important.

#### Step naming

One thing that is tricky with `Gherkin`/`Cucumber` is that a step that is
declared in the code as a `Given` can actually be used as any kind of step
(Given, When or Then)

This is explained in the documentation from Cucumber as a way to force
developers to write steps with a name that cannot grammatically be reused with
other kinds of steps.

The result that we reached in our package is that:

- `Prerequisites / Given` describe the state of the page. As such, it should most
  of the time be expressed in the past tense, or the passive voice of the present
  tense.

  ```gherkin
  Given the page is displayed

  # OR

  Given the user opened the page
  ```

- `Actions / When` describe the action that's being tested. As such, it should
  most of the time be expressed in the active voice of the present tense.
  Refrain from using the word "try" because it makes it seem like the
  documentation expects the action to fail (you may use it if the action is
  indeed _supposed_ to fail)

  ```gherkin
  # neutral
  When the user opens the page

  # failure is implicitly expected
  When the user tries to open the page
  ```

- `Results / Then` describe the expected outcome of the action. As such, it
  should most of the time use the cautious form "should" or "shouldn't"

  ```gherkin
  Then the page should be displayed
  ```

### TypeScript

Some common sense is expected when implementing steps.
For instance, the use of at least one
[assertion](https://playwright.dev/docs/test-assertions)
is required in order for the test to be reliable.
The absence of assertion implies that no test is conducted, so a successful test
that contains no assertion is essentially meaningless.

#### Logic reusability

If you were able to build tests as described [here](#scenario-organization), then
the TS implementation should follow the same logic. Use function to avoid
repeating code.
