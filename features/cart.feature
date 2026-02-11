Feature: Cart

  Scenario: Add and remove item from cart
    Given user is logged in
    When user adds item to cart
    Then cart badge should show "1"
    When user removes item from cart
    Then cart badge should not be visible