// This file will be used to define the expected behavior of every steps you'll define.

import { ITestController } from "../runnerConfiguration/runner";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { defineParameterType } from "@cucumber/cucumber";
import { WEBSITE_INFORMATION } from "../configuration";
import { createPageModel } from "../pageModel/pageModel";

type WebSiteUrls = {
  [key: string]: string;
};

defineParameterType({
  name: "website",
  regexp: /google|facebook/,
  transformer: (website) => website,
});

const webSitesUrl: WebSiteUrls = {
  google: "https://www.google.be/",
  facebook: "https://fr-fr.facebook.com/",
};

/* GIVENS */

Given(
  "the user opened my website",
  async function (this: ITestController): Promise<void> {
    const page = this.page!;
    await page.goto(WEBSITE_INFORMATION.URL);
  }
);

/* WHENS */

When(
  "the user navigates to {website}",
  async function (this: ITestController, website: string): Promise<void> {
    const page = this.page!;
    await page.goto(webSitesUrl[website]);
  }
);

When(
  "the user opens the login form",
  async function (this: ITestController): Promise<void> {
    const pageModel = createPageModel(this);
  }
);

/* THENS */

Then(
  "{website} should be displayed",
  async function (this: ITestController, website: string): Promise<void> {
    const page = this.page!;
    await expect(page).toHaveURL(webSitesUrl[website]);
  }
);
