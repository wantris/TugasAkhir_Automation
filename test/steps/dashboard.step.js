const { Given, When, Then, BeforeStep} = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const DashboardPage = require('../pages/dashboard.page');
const LoginPage = require('../pages/login.page');
const baseConf = require('../../config/base-config.json');

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
let isLoggedIn = false;

const typeCard = {
    "Nama Toko": baseConf.validAccount.name,
    "Penjualan": "penjualan",
    "Pembelian": "pembelian",
    "Laba Kotor": "laba kotor",
    "Total Penjualan": "total penjualan",
    "Total Pembelian": "total pembelian"
};

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

Given('I am on the dashboard page', async () => {
    await checkLogin();
    await dashboardPage.open(`${baseConf.baseUrl}/dashboard`, isLoggedIn);
});

When('I view {string} card on the dashboard', async (type) => {
    await dashboardPage.viewCard(type);
});

Then('I should see the correct {string} displayed in the card', async (type) => {
    const cardLabel = await dashboardPage.cardLabelText(type);
    expect(cardLabel).to.equal(typeCard[type] || (() => { throw new Error(`Unknown card type: ${type}`); })());
});

Then('I should see that the {string} amount is a number', async (type) => {
    const amountText = await dashboardPage.cardAmountText(type);
    const isValidInteger = /^\d+$/.test(amountText.trim());
    expect(isValidInteger).to.be.true;
});

Then('I should see precentage in {string} card', async (type) => {
    const getText = await dashboardPage.cardPrecentageText(type);
    
    let percentageText;
    if (getText.includes('decreased by')) {
        percentageText = getText.split('decreased by')[1].trim();
    } else if (getText.includes('increased by')) {
        percentageText = getText.split('increased by')[1].trim();
    }
    const percentageMatch = percentageText.match(/\d+%/);
    const expectedText = `${percentageMatch ? percentageMatch[0] : ''} dibanding kemarin`;
    expect(percentageText).to.equal(expectedText);
});