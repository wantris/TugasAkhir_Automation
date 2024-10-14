const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const CategoryPage = require('../pages/category.page');
const LoginPage = require('../pages/login.page');
const baseConf = require('../../config/base-config.json');
const categoryPage = new CategoryPage();
const loginPage = new LoginPage();

let isLoggedIn = false;

async function checkLogin() {
    if (!isLoggedIn) {
        await loginPage.open(`${baseConf.baseUrl}/login`);
        await loginPage.inputEmailField(baseConf.validAccount.email);
        await loginPage.inputPasswordField(baseConf.validAccount.password);
        await loginPage.clickLoginButton();
        await browser.pause(5000);
        isLoggedIn = true;
    }
}

Given('I am on the category page', async () => {
    await checkLogin();
    await categoryPage.open();
});

When('I click the Add Category link', async () => {
    await categoryPage.addCategoryLink();
});

When('I enter valid details', async () => {
    await categoryPage.inputNameField(`${baseConf.category.name}`);
    await categoryPage.inputDescriptionField(`${baseConf.category.description}`);
});

When('I save category without {string}', async (field) => {
    if(field == "name"){
        await categoryPage.inputDescriptionField(`${baseConf.category.description}`);
    } else if(field == "description"){
        await categoryPage.inputNameField(`${baseConf.category.name}`);
    }

    await categoryPage.saveCategoryButton();
});

When('I click the Save Category button', async () => {
    await categoryPage.saveCategoryButton();
});

Then('I should see a success toast the category has been saved', async () => {
    const toastMessage = await categoryPage.successToastMessage();
    await expect(toastMessage.type).to.equal('success');
    await expect(toastMessage.msg).to.equal('item ditambahkan');
});

Then('I should see the error message: {string}', async (expectedMessage) => {
    const errorMessage = await categoryPage.showErrorMessage();
    await expect(errorMessage).contain(expectedMessage);
});

