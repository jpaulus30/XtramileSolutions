Feature: Logout

  Scenario: Logout from application
    Given user is logged in
    When user logs out
    Then user should be redirected to login page
