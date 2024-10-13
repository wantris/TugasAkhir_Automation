const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const LoginPage = require('../pages/login.page');
const baseConf = require('../../config/base-config.json');
const loginPage = new LoginPage();

Given('I am on the login page', async () => {
    await loginPage.open(`${baseConf.baseUrl}/login`);
});

When('I input valid credentials', async () => {
    await loginPage.inputEmailField(`${baseConf.validAccount.email}`);
    await loginPage.inputPasswordField(`${baseConf.validAccount.password}`);
});

When('I input invalid credentials', async () => {
    await loginPage.inputEmailField(`${baseConf.invalidAccount.email}`);
    await loginPage.inputPasswordField(`${baseConf.validAccount.password}`);
});

When('I input empty {string} field', async (param) => {
    if (param === "email") {
        await loginPage.inputEmailField('');
        await loginPage.inputPasswordField(baseConf.validAccount.password);
    } else if (param === "password") {
        await loginPage.inputEmailField(baseConf.validAccount.email);
        await loginPage.inputPasswordField('');
    }
});

When('I click the login button', async () => {
    await loginPage.clickLoginButton();
});

Then('I should be redirected to the correct URL', async () => {
    const currentUrl = await loginPage.dashboardUrl();
    await expect(currentUrl).to.equal(`${baseConf.baseUrl}/dashboard`);
});

Then('I should show error message {string}', async (expectedMessage) => {
    const errorMessage = await loginPage.showErrorMessage();
    await expect(errorMessage).contain(expectedMessage);
});