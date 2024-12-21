import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 10000,
    defaultCommandTimeout: 10000,
    baseUrl: 'https://formy-project.herokuapp.com/form',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    staging_loginurl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    dev_loginurl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    username: 'Admin',
    password: 'admin123'
  }
});
