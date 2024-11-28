const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  defaultCommandTimeout: 8000,

  e2e: {
    specPattern: "**/e2e/BDD/**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
}); 
