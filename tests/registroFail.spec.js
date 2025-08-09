const { test, expect } = require('@playwright/test');
const { RegistroPage } = require('../selectores/registro.page');

test('Registro de nuevo usuario', async ({ page }) => {
    const registroPage = new RegistroPage(page);

    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await registroPage.irARegistro();

    await registroPage.completarFormulario({
        userId: 'Luci123',
        newPassword: ' ',
        repeatPassword: ' ',
        firstName: 'Luciana',
        lastName: 'Calvi',
        email: ' ',
        phone: '123456789',
        addressUno: 'Calle Falsa 123',
        addressDos: 'Depto 4B',
        city: 'Mendoza',
        state: 'Mendoza',
        zip: '5500',
        country: ' '
    });

    //await expect(page.locator('#WelcomeContent')).toContainText('Welcome');
});