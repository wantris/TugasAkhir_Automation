Feature: Dashboard
  Scenario: Valdate "Nama Toko" is displayed correctly in the card 
    Given I am on the dashboard page
    When I view "Nama Toko" card on the dashboard
    Then I should see the correct "Nama Toko" displayed in the card

  Scenario: Validate "Penjualan" card is displayed correctly
    Given I am on the dashboard page
    When I view "Penjualan" card on the dashboard
    Then I should see the correct "Penjualan" displayed in the card
    And I should see that the "Penjualan" amount is a number
    And I should see precentage in "Penjualan" card

  Scenario: Validate "Pembelian" card is displayed correctly
    Given I am on the dashboard page
    When I view "Pembelian" card on the dashboard
    Then I should see the correct "Pembelian" displayed in the card
    And I should see that the "Pembelian" amount is a number
    And I should see precentage in "Pembelian" card

  Scenario: Validate "Laba Kotor" card is displayed correctly
    Given I am on the dashboard page
    When I view "Laba Kotor" card on the dashboard
    Then I should see the correct "Laba Kotor" displayed in the card
    And I should see that the "Laba Kotor" amount is a number

  Scenario: Validate "Total Penjualan" card is displayed correctly
    Given I am on the dashboard page
    When I view "Total Penjualan" card on the dashboard
    Then I should see the correct "Total Penjualan" displayed in the card
    And I should see that the "Total Penjualan" amount is a number

  Scenario: Validate "Total Pembelian" card is displayed correctly
    Given I am on the dashboard page
    When I view "Total Pembelian" card on the dashboard
    Then I should see the correct "Total Pembelian" displayed in the card
    And I should see that the "Total Pembelian" amount is a number