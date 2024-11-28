import { createAccountPage } from "./createAccountPage";
// const page = new createAccountPage();
 export class MyAccountPage {
clickToCustomerMenu(){
    cy.get("[data-action='customer-menu-toggle']").click();
}

    myAccountPageTitleVisible() {
        cy.get(".page-title").invoke('text').then((actText) => {
            const trimmedText = actText.trim();
            expect(trimmedText).to.equal("My Account");
        })
    }

    verifyThankUMsgForRegister() {
        cy.wait(3000);
       const thankYouMsg= "Thank you for registering with Main Website Store."
        cy.get(".message-success > div", {timeout:30000}).invoke('text').then((actText) => {
            const trimmedText = actText.trim();
            expect(trimmedText).to.equal(thankYouMsg);
        })
    }

    registeredEmailIdVisible(uniqueEmailId) {
        cy.get(".box-content p").should("contain", uniqueEmailId);
    }
}
