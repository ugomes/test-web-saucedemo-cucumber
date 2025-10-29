import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'


setDefaultTimeout(60 * 1000)

Given('que estou na página de login', async function () {
    // Hook já faz o goto
})

When('preencho o usuario {string} e a senha {string}', async function (username, password) {
    await this.loginPage.fillUsername(username)
    await this.loginPage.fillPassword(password)
})

When('clicar no botao de login', async function () {
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
