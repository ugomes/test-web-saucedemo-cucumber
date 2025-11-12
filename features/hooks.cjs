const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('./support/pages/LoginPage.cjs');

Before(async function () {
    try {
        this.browser = await chromium.launch({ 
            headless: true,
        });
        this.page = await this.browser.newPage();
        this.loginPage = new LoginPage(this.page); 
        await this.loginPage.goto();
    } catch (error) {
        console.error('Erro ao inicializar o navegador:', error);
        throw error;
    }
});

After(async function () {
    try {
        if (this.page) {
            await this.page.close();
        }
        
        if (this.browser) {
            await this.browser.close();
        }
    } catch (error) {
        console.error('Erro ao fechar o navegador:', error);
    }
});