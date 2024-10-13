class RegisterSelector{
    get nameInput() {
        return $('#name');
    } 

    get emailInput() {
        return $('#email');
    } 

    get passwordInput() {
        return $('#password');
    } 

    get registerLink() {
        return $('a[href="/register"]');
    }

    get registerButton() {
        return $('button[type="submit"].chakra-button');
    }

    get successToastMsg(){
        return $('body.chakra-ui-light:nth-child(2) li.chakra-toast div.chakra-toast__inner div.chakra-alert.css-1hp6ttu div.css-njbp03 > div.chakra-alert__desc.css-zycdy9');
    }

    get errorMessage(){
        return $('div[role="alert"].chakra-alert.css-qwanz3');
    }
}

module.exports = RegisterSelector;