// /!\ Do not modify this file /!\

import { LaunchOptions } from "@playwright/test";
const browserOptions: LaunchOptions = {
  headless: false,
  slowMo: 0,
  args: [
    "--use-fake-ui-for-media-stream",
    "--use-fake-device-for-media-stream",
    "--start-fullscreen",
    "--start-maximized",
  ],
};

export const config = {
  browser: "chromium",
  browserOptions,
  screenshot: "only-on-failure",
};
