
// import createAccountPage from './createAccountPage';

 export class signInPage {
    user = require('../fixtures/userData.json')
    clickToSignInLink() {
        cy.get(".panel.header a[href*='/account/login']").click();
    }
    enterUserEmailId(uniqueEmailId) {
        
        cy.get("#email").type(uniqueEmailId);

    }
    enterRegisterUserPassword() {
    cy.get("#pass[title]").type("Poonam@789");
    }
    clickSignInBtn() {
        cy.contains('button', 'Sign In').click();
    }
    
    welcomeTextvisible() {
        cy.wait(2000);
        const welcomeMsg= "Welcome"
        cy.get('greet.welcome .logged-in').eq(0).invoke('text').then((actText) => {
            const text = actText.trim();
            expect(text).include(welcomeMsg);
        })
    }
}



