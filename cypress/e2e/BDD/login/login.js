import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { createAccountPage } from "../../../POM/createAccountPage";
import { MyAccountPage } from "../../../POM/myAccountPage";
import { signInPage } from "../../../POM/signInPage";
const createAccountObj = new createAccountPage();
const myAccountObj = new MyAccountPage();
const signPageObj = new signInPage();

Given("User navigate to LUMA application",()=>{
    cy.visit('https://magento.softwaretestingboard.com/')
})
Given("User click on create my account link", () => {
    // cy.get(".panel.header a[href*='/account/create']").click();
    createAccountObj.clickToCreatAccountLink();
})
When('User enter first name',()=>{
    createAccountObj.enterFirstName();
})
And('User enter last name',()=>{
    createAccountObj.enterLastName();

})
And('User enter emailID',()=>{
    createAccountObj.enterUniqueEmailId();
})
And('User enter password',()=>{
    createAccountObj.enterPassword();
})
And('User enter confirm password',()=>{
    createAccountObj.enterConfirmPassword();
})
And('User click on Create Account button',()=>{
    createAccountObj.clickCreateAccountBtn()
})
Then('My Account page title should display',()=>{
    myAccountObj.myAccountPageTitleVisible();
})
And('Thank you message should be visible',()=>{
    myAccountObj.verifyThankUMsgForRegister();
})
And('existing user details should be visible',()=>{
    cy.readFile("cypress/fixtures/create.json").then((readData) => {
   cy.log("Read value: " + readData.registeredEmail); // Log the value read from the file
        // cy.get("#email_address").type(readData.registeredEmail);
    myAccountObj.registeredEmailIdVisible(readData.registeredEmail);
})
   
})
Given('User click on SignIn link',()=>{
    signPageObj.clickToSignInLink();

})
And('User enter emailId',()=>{
    cy.readFile("cypress/fixtures/create.json").then((readData) => {
        cy.log("Read value: " + readData.registeredEmail); 
    signPageObj.enterUserEmailId(readData.registeredEmail);
    })
})
And('User enter password',()=>{
    signPageObj.enterUserPassword();
})
And('User click on signIn button',()=>{
    signPageObj.clickSignInBtn();
})
 Then('User navigate to user account and Welcome text should be display',()=>{
    signPageObj.welcomeTextvisible();
})