class LoginPage {
    constructor(page) {
        this.page = page;

        this.buttonSignIn = page.locator('#MenuContent > a:nth-child(3)');
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('[name="password"]');
        this.buttonLogin = page.locator('[name="signon"]');
        this.msj = page.locator('#Content > ul');
        this.msj2 = page.locator('#WelcomeContent');
    }

    async clickSignIn() {
        await this.buttonSignIn.click();
    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        
    }

    async clickLogin() {
        await this.buttonLogin.click();
    }
}

module.exports = { LoginPage };
