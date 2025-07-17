import { defineConfig } from "cypress";

export default defineConfig({
  
  e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/loginnp",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    video: false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  

  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  projectId: "7h8ib8"
});
