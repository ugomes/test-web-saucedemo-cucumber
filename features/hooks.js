import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import LoginPage from './support/pages/LoginPage.js';

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
