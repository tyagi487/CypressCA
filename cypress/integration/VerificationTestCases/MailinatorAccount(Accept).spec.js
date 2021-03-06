import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Activation Mailinator Account for Random New Sign up User for Accept Request Test Case ", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      //debugger;

      cy.fixture("VerificationTestCasesData/AcceptRequestUserData").then(
        function (Email) {
          this.Credentials = Email;
          cy.log(Email);
          cy.log(this.Credentials.UserEmail);
        }
      );
    }
  );

  it("Verifying New User Email on Mailinator site for Accept Request", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.mailinatorSite();
    cy.url().should("include", "mailinator.com");
    sp.EnterMailinatorEmail(this.Credentials.UserEmail);
    cy.log("User Email has been Entered");
    //Click on Go
    sp.Go();
    cy.wait(3000);
    cy.contains("Common Areas - Account Activation").click();
    //debugger
    cy.wait(5000);
    //New Sign up user Account Verification on mailinator
    sp.ActiveAccount();
    cy.wait(5000);
    cy.log("New user Account has been verified successfully on Mailinator");
  });
});
