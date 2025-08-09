const { test, expect } = require('@playwright/test');
const { RegistroPage } = require('../selectores/registro.page');

test('Registro de nuevo usuario', async ({ page }) => {
    const registroPage = new RegistroPage(page);

    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await registroPage.irARegistro();

    await registroPage.completarFormulario({
        userId: 'Lucilu',
        newPassword: 'j2ee',
        repeatPassword: 'j2ee',
        firstName: 'Luciana',
        lastName: 'Calvi',
        email: 'luci@example.com',
        phone: '123456789',
        addressUno: 'Calle Falsa 123',
        addressDos: 'Depto 4B',
        city: 'Mendoza',
        state: 'Mendoza',
        zip: '5500',
        country: 'Argentina'
    });

    //await expect(page.locator('#WelcomeContent')).toContainText('Welcome');
});
