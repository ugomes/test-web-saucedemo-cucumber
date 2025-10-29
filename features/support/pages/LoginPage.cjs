export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.saucedemo.com/';
        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async fillUsername(username) {
        await this.page.fill(this.username, username);
    }

    async fillPassword(password) {
        await this.page.fill(this.password, password);
    }

    async clickLoginButton() {
        await this.page.click(this.loginButton);
    }
}