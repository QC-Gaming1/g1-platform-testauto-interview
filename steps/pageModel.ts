// This file will be used to define the selectors that will be used in your tests
// Locator documentation : https://playwright.dev/docs/api/class-locator
// Example of locator usage : page.locator("CSS selector").click()

import { ITestController } from "../runnerConfiguration/runner";

export const createPageModel = (testController: ITestController) => {
  const page = testController.page!;

  return {
    myWebSite: {
      home: {
        loginButton: page.locator("CSS selector").click(),
      },
      loginForm: {
        usernameInput: page.locator("CSS selector"),
        passwordInput: page.locator("CSS selector"),
      },
    },
  };
};
