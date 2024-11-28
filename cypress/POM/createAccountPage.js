
export class createAccountPage{
    data=require('../fixtures/userData.json')
    clickToCreatAccountLink(){
        cy.get(".panel.header a[href*='/account/create']").click();
    }
    enterFirstName() {
        cy.get("#firstname").type(this.data.firstName);
    }

    enterLastName() {
        cy.get("#lastname").type(this.data.lastName);
    }

    enterPassword() {
        cy.get("input#password").type(this.data.userPwd);
    }

    enterConfirmPassword() {
        cy.get("#password-confirmation").type(this.data.confirmPwd);
    }
    generateUniqueEmail() {
        const timestamp = Date.now(); // Generate a unique timestamp
        const randomPart = Math.random().toString(36).substring(2, 7); // Generate a random string
    
       const email =`poonam${timestamp}_${randomPart}@example.com`; // Construct a unique email address
        cy.writeFile("cypress/fixtures/create.json", {
            registeredEmail: email
        })
      }
      enterUniqueEmailId() {
        this.generateUniqueEmail();
        cy.readFile("cypress/fixtures/create.json").then((readData) => {
            cy.log("Read value: " + readData.registeredEmail); // Log the value read from the file
            cy.get("#email_address").type(readData.registeredEmail);

            // pageObj.createAccountObj.enterEmailId(readData.registeredEmail);
        });
        // const uniqueEmail = this.generateUniqueEmail();
        // cy.get("#email_address").type(uniqueEmail);

      }

    enterEmailId() {
        cy.get("#email_address").type(this.data.emailId);
    }

    clickCreateAccountBtn() {
        cy.contains('button','Create an Account').click();
    }
}
  

