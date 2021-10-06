import { Selector } from 'gherkin-testcafe';

/**
 *
 * @param {*} t Returns an object that describes the page
 *
 * The whole point of this object is to have a structure that is similar to the
 * structure of the page itself.
 *
 * If a button is in the form, and the form is in the page, then the pagemodel
 * should look like
 * ```ts
 * page: {
 *   form: {
 *     button: getSelector("css selector")
 *   }
 * }
 * ```
 */
export const createPage = (t = undefined) => {
  /**
   *
   * @param selectorString standard CSS selector for target element
   *
   * _You can easily export the CSS selector for any component from the debug
   * console of the browser_
   * @returns the element Selector
   */
  const getSelector = (selectorString) =>
    Selector(selectorString).with({
      boundTestRun: t,
    });

  /**
   * Get an element by its data-testid attribute. If an array is passed,
   * the rightmost element will be looked for in its previous element context
   * @param t the testController instance, provided by the test() function
   * @param testId a test id or an array of test id (from parent to child)
   * @param rootElement a selector as the base search context
   */
  const getByTestId = (testId, rootElement = undefined) => {
    const testIds = Array.isArray(testId) ? testId : [testId];
    if (!testIds.length) {
      throw new Error('Empty selector array provided');
    }
    const parent =
      rootElement ||
      Selector(`[data-testid="${testIds[0]}"]`).with({
        boundTestRun: t,
      });
    if (testIds.length === 1 && !rootElement) {
      return parent;
    }

    return testIds
      .slice(rootElement ? 0 : 1)
      .reduce((acc, id) => acc.find(`[data-testid="${id}"]`), parent);
  };

  const mySite = {
    // feel free to add more selectors for any component that you need
    // HOWEVER take care to organize them logically
    home: {
      loginButton: getSelector('CSS Selector for the login button'),
    },
    login: {
      usernameInput: getSelector('css selector'),
      passwordInput: getSelector('css selector'),
      // Task 3: add missing selector(s)
    },
  };

  // see Task 5: how testids make everything simpler!
  const luckygames = {
    topnav: { tournaments: getByTestId('topnav-tournaments') },
  };

  return { luckygames, mySite };
};
