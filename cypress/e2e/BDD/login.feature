Feature: Create an account and singIn with same account
Background:
        Given User navigate to LUMA application
Scenario: Verify Create an Account functionality
Given User click on create my account link
When User enter first name 
And User enter last name 
And User enter emailID
And User enter password
And User enter confirm password
And User click on Create Account button 
Then My Account page title should display
And Thank you message should be visible
And existing user details should be visible

Scenario: Verify login functionality
Given User click on SignIn link
When User enter emailId 
And User enter resitered password
And User click on signIn button
Then User navigate to user account and Welcome text should be display