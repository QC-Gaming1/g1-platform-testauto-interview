// /!\ Do not modify this file /!\

import { ITestController } from "./runner";
import { config } from "./playwright";
import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { chromium, ChromiumBrowser, ConsoleMessage } from "@playwright/test";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";

let browser: ChromiumBrowser;

declare global {
  let browser: ChromiumBrowser;
}

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch(config.browserOptions);
});

Before(async function (
  this: ITestController,
  { pickle }: ITestCaseHookParameter
) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, "-");
  // customize the [browser context](https://playwright.dev/docs/next/api/class-browser#browsernewcontextoptions)
  this.context = await browser.newContext({
    acceptDownloads: true,
    recordVideo: undefined,
    viewport: null,
  });

  await this.context.tracing.start({ screenshots: true, snapshots: true });
  this.page = await this.context.newPage();
  this.page.on("console", async (msg: ConsoleMessage) => {
    if (msg.type() === "log") {
      await this.attach(msg.text());
    }
  });
  this.feature = pickle;
});

After(async function (this: ITestController) {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
