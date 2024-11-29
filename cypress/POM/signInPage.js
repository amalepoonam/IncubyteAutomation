
// import createAccountPage from './createAccountPage';

export class signInPage {
    user = require('../fixtures/userData.json')
    clickToSignInLink() {
        cy.get(".panel.header a[href*='/account/login']").click();
    }
    enterUserEmailId(uniqueEmailId) {

        cy.get("#email").type(uniqueEmailId);

    }
    enterUserPassword() {
        cy.wait(3000);
        cy.get("input[name='login[password]']").type(this.user.userPwd);
    }
    clickSignInBtn() {
        cy.contains('button', 'Sign In').click();
    }

    welcomeTextVisibility() {

        const welcomeMsg = "Welcome, Poonam Amale!"
        cy.get("div[class='panel header'] span[class='logged-in']").invoke('text').then((actText) => {
            const Text = actText.trim();
            expect(welcomeMsg).include(Text);
        })
    }
}



