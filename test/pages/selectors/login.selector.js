class LoginSelector{
    get emailInput() {
        return $('#email');
    } 

    get passwordInput() {
        return $('#password');
    } 

    get loginButton() {
        return $('button[type="submit"].chakra-button');
    }

    get profileButton() {
        return $('#menu-button-8');
    }

    get logoutButton() {
        return $('#menu-list-8-menuitem-6');
    }

    get errorMessage(){
        return $('div[role="alert"].chakra-alert.css-qwanz3');
    }
};

module.exports = LoginSelector;