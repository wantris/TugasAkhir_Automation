const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const RegisterPage = require('../pages/register.page');
const baseConf = require('../../config/base-config.json');
const registerPage = new RegisterPage();

Given('I am on the KasirAja register page', async () => {
    await registerPage.open(`${baseConf.baseUrl}`);
    await registerPage.clickRegisterLink();
});

When('I input valid credentials account', async () => {
    await registerPage.inputNameField(`${baseConf.validAccount.name}`);
    await registerPage.inputEmailField(`${baseConf.validAccount.email}`);
    await registerPage.inputPasswordField(`${baseConf.validAccount.password}`);
});

When('I input credentials without {string}', async (field) => {
    if (field === "Nama Toko") {
        await registerPage.inputEmailField(`${baseConf.validAccount.email}`);
        await registerPage.inputPasswordField(`${baseConf.validAccount.password}`);
    } else if (field === "Email") {
        await registerPage.inputNameField(`${baseConf.validAccount.name}`);
        await registerPage.inputPasswordField(`${baseConf.validAccount.password}`);
    } else if (field === "Password") {
        await registerPage.inputNameField(`${baseConf.validAccount.name}`);
        await registerPage.inputEmailField(`${baseConf.validAccount.email}`);
    } else {
        throw new Error(`Unknown card type: ${field}`);
    }    
});

When('I input credentials with invalid email', async () => {
    await registerPage.inputNameField(`${baseConf.validAccount.name}`);
    await registerPage.inputEmailField(`${baseConf.registerInvalidCredential.invalidEmail}`);
    await registerPage.inputPasswordField(`${baseConf.validAccount.password}`);
});

When('I click the register button', async () => {
    await registerPage.clickRegisterButton();
});

Then('I should registration process successfully', async () => {
    const toastMessage = await registerPage.successToastMessage();
    await expect(toastMessage).to.equal('anda dapat menggunakan login sekarang');
});

Then('Should show error message {string}', async (expectedMessage) => {
    const errorMessage = await registerPage.showErrorMessage();
    await expect(errorMessage).contain(expectedMessage);
});