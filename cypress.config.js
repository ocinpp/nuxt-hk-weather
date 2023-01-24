const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    projectId: 'wfmeii',
    baseUrl: 'http://localhost:3000',
    pageLoadTimeout: 60000,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/my-test-output-[hash].xml',
    },
  },
})
