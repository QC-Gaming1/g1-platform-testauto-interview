// /!\ Do not modify this file /!\

const config = {
  requireModule: ['ts-node/register'],
  require: ['steps/**/*.ts','runnerConfiguration/commonHooks.ts'],
  format: ['@cucumber/pretty-formatter'
  ],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
};
export default config;
