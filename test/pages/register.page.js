const RegisterSelector = require("./selectors/register.selector");
const registerSelector = new RegisterSelector();

class RegisterPage {
    async open(baseUrl) {
        await browser.url(baseUrl);
    }

    async inputNameField(name){
        await registerSelector.nameInput.setValue(name)
    }

    async inputEmailField(email){
        await registerSelector.emailInput.setValue(email);
    }

    async inputPasswordField(password){
        await registerSelector.passwordInput.setValue(password);
    }

    async clickRegisterLink(){
        await registerSelector.registerLink.click();
    }

    async clickRegisterButton(){
        await registerSelector.registerButton.click();
    }

    async successToastMessage(){
       return await registerSelector.successToastMsg.getText();
    }

    async showErrorMessage(){
        return await registerSelector.errorMessage.getText();
    }
}

module.exports = RegisterPage;