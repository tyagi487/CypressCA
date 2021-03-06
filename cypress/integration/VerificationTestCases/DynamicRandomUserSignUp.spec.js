import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

let UserData;
let UserEmailID;
let UserFirstName;
let UserLastName;
//Randomly Generated UserData coming from PageObject
const Rs = new RandomString();
UserData = Rs.getRandomUser();
UserEmailID = UserData.Useremail;
UserFirstName = UserData.UserFirstName;
UserLastName = UserData.UserLastName;

describe("Sign up for a New User", function () {
  this.beforeAll(() => {
    debugger;
    //Generating Dynamic Json file at RumTime
    cy.writeFile("cypress/fixtures/VerificationTestCasesData/UserData.json", {
      Fname: UserFirstName,
      Lname: UserLastName,
      UserEmail: UserEmailID,
      Password: "1234567Aa",
    });
    
    cy.log("Data has been write to json");
    cy.log(UserEmailID);
    cy.log(UserFirstName);
    cy.log(UserLastName);
  });

  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      debugger;
      cy.fixture("VerificationTestCasesData/UserData").then(function (
        JsonData
      ) {
        this.Credentials = JsonData;
        cy.log(this.Credentials.UserEmail);
        cy.log(this.Credentials.Fname);
        cy.log(this.Credentials.Lname);
      });
    }
  );

  it.only("New User Sign up", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.visit();
    cy.wait(3000);
    cy.url().should("include", "app.ca-test.com/Public/Login?ReturnUrl=%2F");
    sp.SignUpbtn();
    cy.url().should("include", "Register/Create");
    //Sign Up detalis commands coming from command.js
    cy.SignUpUserFirstName(this.Credentials.Fname);
    cy.SignUpUserLastName(this.Credentials.Lname);
    cy.SignUpUserEmail(this.Credentials.UserEmail);
    cy.ConfirmEmailAddress(this.Credentials.UserEmail);
    cy.SignUpUserPassword(this.Credentials.Password);
    cy.ConfirmPassword(this.Credentials.Password);
    cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    cy.get('[name="ContactInformation.CompanyType"]').select(
      "Facility Management"
    );
    //Click on Submit to Create the user
    cy.get(".icon:nth-child(1)").click();
    cy.wait(5000);
    cy.log("New User has been signed up successfully");
    //Assertion
    cy.get(".login-message").should(
      "have.text",
      "An email has been sent to you to verify the email address you provided with a link to activate your account."
    );
    cy.wait(5000);
    cy.get(".icon").click();
    cy.url().should("include", "/Public/Login");
    cy.wait(3000);
  });
});
