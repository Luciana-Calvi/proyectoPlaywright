const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../selectores/login.page');

test('Login en la web', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

    await loginPage.clickSignIn();
    await loginPage.login('Luci123','j2ee');
    await loginPage.clickLogin();
    await expect(loginPage.msj).toBeVisible({ timeout: 10000 });
});