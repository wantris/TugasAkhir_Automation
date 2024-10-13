Feature: Register
    Scenario: Success registration account with valid credential
        Given I am on the KasirAja register page
        When I input valid credentials account
        And I click the register button
        Then I should registration process successfully

    Scenario: Failed registration account caused Email is already in use
        Given I am on the KasirAja register page
        When I input valid credentials account
        And I click the register button
        Then I should show error message "Email sudah digunakan"

    Scenario: Fail registration account caused doesn't input Nama Toko
        Given I am on the KasirAja register page
        When I input credentials without "Nama Toko"
        And I click the register button
        Then I should show error message "\"name\" is not allowed to be empty"
    
    Scenario: Fail registration account caused doesn't input Email
        Given I am on the KasirAja register page
        When I input credentials without "Email"
        And I click the register button
        Then I should show error message "\"email\" is not allowed to be empty"
    
    Scenario: Fail registration account caused doesn't input Password
        Given I am on the KasirAja register page
        When I input credentials without "Password"
        And I click the register button
        Then I should show error message "\"password\" is not allowed to be empty"

    Scenario: Fail registration account caused invalid email
        Given I am on the KasirAja register page
        When I input credentials with invalid email
        And I click the register button
        Then I should show error message "\"email\" must be a valid email"
