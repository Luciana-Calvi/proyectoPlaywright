//import { test, expect } from '@playwright/test';


const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../selectores/login.page');

test('Login en la web', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

    await loginPage.clickSignIn();
    await loginPage.login('Lucilu','j2ee');
    await loginPage.clickLogin();
    await expect(loginPage.msj2).toBeVisible({ timeout: 10000 });
});



