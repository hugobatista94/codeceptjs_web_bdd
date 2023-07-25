Feature: Login
  I as a user
  I want to login to the application
  to do orders

  Scenario: Login with success
    Given I am on the login screen
    When I fill the email field with "hugo@gmail.com"
    And I fill the password filed with "123456"
    And I click on Sign In
    When I see "Hugo Batista"

    Scenario: Login with wrong email
    Given I am on the login screen
    When I fill the email field with "hugo1234@gmail.com"
    And I fill the password filed with "121212"
    And I click on Sign In
    When I see "Authentication failed."
