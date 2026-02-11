Feature: Checkout

  Scenario: Complete checkout flow
    Given user is logged in and on products page
    And user has item in cart
    When user completes checkout
    Then order should be completed successfully