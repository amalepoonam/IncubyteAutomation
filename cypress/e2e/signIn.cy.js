import { createAccountPage } from "../POM/createAccountPage";
import { signInPage } from "../POM/signInPage";
import { MyAccountPage } from "../POM/myAccountPage";


describe('create new user account',()=>{
    const page = new createAccountPage();
    const signPageData= new signInPage();
    const myAccountData = new MyAccountPage();


beforeEach(()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
})

it("create new user account",()=>{
   
    page.clickToCreatAccountLink();
    page.enterFirstName();

    page.enterLastName();
    // page.enterEmailId();
    page.enterUniqueEmailId();
    page.enterPassword();
    page.enterConfirmPassword();
    page.clickCreateAccountBtn();
    myAccountData.myAccountPageTitleVisible();
    myAccountData.registeredEmailIdVisible();
    myAccountData.verifyThankYouMsgForRegister();
    myAccountData.registeredEmailIdVisible()
    cy.readFile("cypress/fixtures/create.json").then((readData) => {
        cy.log("Read value: " + readData.registeredEmail); // Log the value read from the file
             // cy.get("#email_address").type(readData.registeredEmail);
     myAccountData.registeredEmailIdVisible(readData.registeredEmail);
    })
})

it("sign in ",()=>{
    signPageData.clickToSignInLink();
    cy.readFile("cypress/fixtures/create.json").then((readData) => {
        cy.log("Read value: " + readData.registeredEmail); // Log the value read from the file
        // cy.get("#email_address").type(readData.registeredEmail);
       signPageData.enterUserEmailId(readData.registeredEmail);
        // pageObj.createAccountObj.enterEmailId(readData.registeredEmail);
    });
    signPageData.enterUserPassword();
    signPageData.clickSignInBtn();
    
})
})

