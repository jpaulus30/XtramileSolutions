Feature: Login

  Scenario Outline: Login with multiple credentials
    Given user is on login page
    When user logs in with "<username>" and "<password>"
    Then login result should be "<result>"

    Examples:
      | username        | password        | result  |
      | standard_user   | secret_sauce    | success |
      | locked_out_user | secret_sauce    | error   |
      | standard_user   | wrong_password  | error   |