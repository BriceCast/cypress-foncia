const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://fr.foncia.com/",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
