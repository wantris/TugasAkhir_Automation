Feature: Login
  Scenario: User login in with invalid credentials
    Given I am on the login page
    When I input invalid credentials
    And I click the login button
    Then I should show error message "Kredensial yang Anda berikan salah"

  Scenario: User login in with empty email field
    Given I am on the login page
    When I input empty "email" field
    And I click the login button
    Then I should show error message "\"email\" is not allowed to be empty"

  Scenario: User login in with empty password field
    Given I am on the login page
    When I input empty "password" field
    And I click the login button
    Then I should show error message "\"password\" is not allowed to be empty"
  
  Scenario: User login in with valid credentials
    Given I am on the login page
    When I input valid credentials
    And I click the login button
    Then I should be redirected to the correct URL