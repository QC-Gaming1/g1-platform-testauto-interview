import { Given, When, Then } from '@cucumber/cucumber';
import { ClientFunction } from 'gherkin-testcafe';
import { createPage } from './pageModel';

const sites = {
  google: 'https://www.google.be/',
  facebook: 'www.facebook.com',
};

const getPageUrl = (t) =>
  ClientFunction(() => window.location.href).with({ boundTestRun: t })();

/* GIVENS */

Given(/the user opened my site/, async (t) => {
  /* 
  Use configuration.json to define whatever url you'd like

  Some site may use captcha or other weird behaviors when they detect that the
  browser is being controlled by scripts, don't waste your time with these and
  pick another site

  => GitHub is recommended 
   */
  const { targetSite } = require('../configuration.json');
  await t.navigateTo(targetSite);
});

/* WHENS */

When(/the user navigates to (.+)/, async (t, [site]) => {
  await t.navigateTo(sites[site]);
});

When(/the user opens the login form/, async (t) => {
  const page = createPage(t);
  // TODO: see Task 2
  // See TestCafe TestController and its function
  // https://testcafe.io/documentation/402833/guides/basic-guides/interact-with-the-page
});

/* THENS */

Then(/(google|facebook) should be displayed/, async (t, [site]) => {
  const url = await getPageUrl(t);
  await t.expect(url).contains(sites[site]);
});
