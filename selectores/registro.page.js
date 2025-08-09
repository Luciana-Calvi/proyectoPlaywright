// registro.page.js
class RegistroPage {
    constructor(page) {
        this.page = page;

        this.buttonSignIn = page.locator('#MenuContent > a:nth-child(3)');
        this.buttonRegisterNow = page.locator('#Catalog > a');
        this.userId = page.locator('input[name="username"]');
        this.newPassword = page.locator('#Catalog > form > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]');
        this.repeatPassword = page.locator('#Catalog > form > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]');
        this.firstName = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]');
        this.lastName = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]');
        this.email = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]');
        this.phone = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input[type=text]');
        this.addressUno = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input[type=text]');
        this.addressDos = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input[type=text]');
        this.city = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(7) > td:nth-child(2) > input[type=text]');
        this.state = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(8) > td:nth-child(2) > input[type=text]');
        this.zip = page.locator('input[name="account.zip"]');
        this.country = page.locator('#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(10) > td:nth-child(2) > input[type=text]');
        // this.buttonFavouriteCategory = page.locator('//*[@id="Catalog"]/form/table[3]/tbody/tr[2]/td[2]/select'); // XPath si es necesario
        // this.selectorDogs = page.locator('option[value="DOGS"]');
        this.buttonSaveAccountInformation = page.locator('[name="newAccount"]');
    }

    async irARegistro() {
        await this.buttonSignIn.click();
        await this.buttonRegisterNow.click();
    }

    async completarFormulario(datos) {
        await this.userId.fill(datos.userId);
        await this.newPassword.fill(datos.newPassword);
        await this.repeatPassword.fill(datos.repeatPassword);
        await this.firstName.fill(datos.firstName);
        await this.lastName.fill(datos.lastName);
        await this.email.fill(datos.email);
        await this.phone.fill(datos.phone);
        await this.addressUno.fill(datos.addressUno);
        await this.addressDos.fill(datos.addressDos);
        await this.city.fill(datos.city);
        await this.state.fill(datos.state);
        await this.zip.fill(datos.zip);
        await this.country.fill(datos.country);
        await this.buttonSaveAccountInformation.click();
    }
}

module.exports = { RegistroPage };

