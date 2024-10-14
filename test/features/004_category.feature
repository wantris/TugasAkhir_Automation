Feature: Category
    As a user
    I want to manage categories
    So that I can add, edit, or delete categories in the system

    # Scenario: Add a new category
    Scenario: Successfully add a new category
        Given I am on the category page
        When I click the Add Category link
        And I enter valid details
        And I click the Save Category button
        Then I should see a success toast the category has been saved

    Scenario: Fail to add category due to missing name input
        Given I am on the category page
        When I click the Add Category link
        And I save category without "name"
        Then I should see the error message: "\"name\" is not allowed to be empty"

    Scenario: Successfully add a new category with missing description input
        Given I am on the category page
        When I click the Add Category link
        And I save category without "description"
        Then I should see a success toast the category has been saved
