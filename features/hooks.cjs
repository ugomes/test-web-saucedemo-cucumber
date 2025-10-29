const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('./support/pages/LoginPage.cjs');

Before(async function () {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
    this.loginPage = new LoginPage(this.page); 
    await this.loginPage.goto();
});

After(async function () {
    this.browser.close();
});