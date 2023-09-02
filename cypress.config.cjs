const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://zangakbookstore.am/'
  },
  env: {
    baseUrl: 'https://zangakbookstore.am/'
  }
});
