const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const LoginPage = require('../pages/LoginPage.cjs');

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000); 

Given('que estou na página de login', async function () {
    // Este step agora apenas garante que estamos na página,
    // a navegação já é feita no hook Before.
    // Se precisar de uma verificação extra, pode ser adicionada aqui.
});

When('preencho o usuario {string} e a senha {string}', async function (username, password) {
    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);
});

When('clicar no botao de login',{timeout:20000}, async function () {
    await this.loginPage.clickLoginButton()
})

Then('vou para a página {string} e vejo {string}', async function (expectedUrlPart, expectedText) {
    
    const errorLocator = this.page.locator('[data-test="error"]')
    if (await errorLocator.isVisible()) {
        const errorMessage = await errorLocator.textContent()
        if (!errorMessage.includes('locked out')) {
            throw new Error('Usuário bloqueado deveria mostrar mensagem de erro')
        }
        return
    }

   
    let attempts = 0
    while (attempts < 5) {
        const currentUrl = this.page.url()
        if (currentUrl.includes(expectedUrlPart)) {
            break
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
        attempts++
    }

    // Verifica texto na página
    const selector = this.page.locator(`text=${expectedText}`)
    await selector.first().waitFor({ state: 'visible' })
})

Then('vejo a mensagem de erro {string}', async function (expectedErrorMessage) {
    const errorLocator = this.page.locator('[data-test="error"]')
    await errorLocator.waitFor({ state: 'visible', timeout: 5000 })
    
    const errorMessage = await errorLocator.textContent()
    expect(errorMessage).toContain(expectedErrorMessage)
})
