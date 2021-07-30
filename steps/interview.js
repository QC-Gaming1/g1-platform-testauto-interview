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
  const { targetSite } = await require('../configuration.json');
  await t.navigateTo(targetSite);
});

/* WHENS */

When(/the user navigates to (.+)/, async (t, [site]) => {
  await t.navigateTo(sites[site]);
});

When(/the user opens the login form/, async (t) => {
  const page = createPage(t);
  // TODO: see Task 2
});

/* THENS */

Then(/(google|facebook) should be displayed/, async (t, [site]) => {
  const url = await getPageUrl(t);
  await t.expect(url).contains(sites[site]);
});
