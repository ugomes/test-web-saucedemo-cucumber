const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('./support/pages/LoginPage.js'); // Mantenha o .js se o LoginPage for ESM, ou remova se for CJS

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
    this.loginPage = new LoginPage(this.page); 
    await this.loginPage.goto();
});

After(async function () {
    if (this.page) {
        await this.page.close();
    }
    if (this.browser) {
        await this.browser.close();
    }
});

