const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('./support/pages/LoginPage.cjs');

Before(async function () {
    
    this.browser = await chromium.launch({ 
        headless: false,
        slowMo: 1000  // Adiciona delay de 1 segundo entre ações para visualizar melhor
    });
    this.page = await this.browser.newPage();
    this.loginPage = new LoginPage(this.page); 
    await this.loginPage.goto();
    
});

After(async function () {
    await this.browser.close();
    
});