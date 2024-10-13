const LoginSelector = require("./selectors/login.selector");
const loginSelector = new LoginSelector();

class LoginPage {
    async open(baseUrl) {
        await browser.url(baseUrl);
    }

    async inputEmailField(email){
        await loginSelector.emailInput.setValue(email);
    }

    async inputPasswordField(password){
        await loginSelector.passwordInput.setValue(password);
    }

    async clickLoginButton(){
        await loginSelector.loginButton.click();
    }

    async dashboardUrl(){
        await browser.pause(6000);
        const url = await browser.getUrl();
        
        //await this.clickLogoutButton();
        return url;
    }

    async showErrorMessage(){
        return await loginSelector.errorMessage.getText();
    }

    async clickLogoutButton(){
        await loginSelector.profileButton.click();
        
        await loginSelector.logoutButton.click();
    }
}

module.exports = LoginPage;