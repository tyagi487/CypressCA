import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("TestCase For Invalid Email Format", function () {
  this.beforeEach(function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    //debugger;
    cy.fixture("NegativeLoginTestData/Invalid_Email_Format").then(function (
      LoginData
    ) {
      this.Credentials = LoginData;
    });
  });

  it("Login into the appLication With Invalid Email Format", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseBuild();
    //Login Assertions
    cy.get(".page-main-title").should("be.visible");
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword(this.Credentials.Password);
    //log Password
    cy.log(this.Credentials.Password);
    lp.Submit();
    cy.wait(2000);
    //Assertion for Invalid Email Format
    cy.get(".field-validation-error").should("be.visible");
    cy.get(".field-validation-error").should(
      "have.text",
      "Invalid username or password."
    );
    cy.log("Please Enter a Valid Email Id");
  });
});
