import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Search List View Filters Element Validation On UI for created kit type", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.get(".page-main-title").should("be.visible");
    //Enter credentials
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.log("User has been Logged In into the application");

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("KitBuilderValidationTestData/SearchListFilterValidation").then(
      function (KitName) {
        this.KitName = KitName;
      }
    );

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeName
    ) {
      this.CreateNewKT = KitTypeName;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });
  });

  it("Navigating to UI for KitType's New Form", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.KitName.SearchListEleValidation);
    cy.wait(3000);
    //This is class to open searched kit type after clicking + iocn and type kit name in search
    cy.get(".truncate-special").first().click({ force: true });
    //KTP.OpenKitType(this.KitName.SearchListEleValidation);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("exist");
    cy.log("New Item created and Kit Type has been Opened");
    cy.wait(5000);
  });

  it("Open Search View(LINK ITEM) Elements Validation", function () {
    cy.contains("LINK ITEM").first().click({ force: true });
    cy.wait(3000);
  });

  it("Validate the Filter Url Element", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .should("be.visible");
    cy.log(this.DataType2.Url + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Text Element", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .eq(1)
      .should("be.visible");
    cy.log(this.DataType2.Text + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Telephone Element", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .eq(1)
      .should("be.visible");
    cy.log(
      this.DataType2.Telephone + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter TextAera Element", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .should("be.visible");
    cy.log(this.DataType2.TextAera + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Slider, Currency, Measure and Number Element", function () {
    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").should("exist");
    cy.log(
      this.DataType2.Slider +
        " " +
        this.DataType2.Currency +
        " " +
        this.DataType2.Measure +
        " " +
        this.DataType2.Number +
        " has been exist in DOM and This class is Validate all these four Data Elements in Filters"
    );
  });

  it("Validate the Filter Email Element", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .should("be.visible");
    cy.log(this.DataType2.Email + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Address Element", function () {
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .eq(1)
      .should("be.visible");
    cy.log(this.DataType2.Address + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Time Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]').eq(0).should("be.visible");
    cy.log(this.DataType2.Time + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Date Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').eq(0).should("be.visible");
    cy.log(this.DataType2.Date + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Toggle Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Toggle).should("exist");
    cy.log(this.DataType2.Toggle + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter SelectList Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.SelectList).should("exist");
    cy.log(
      this.DataType2.SelectList + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter RadioSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.RadioSelect).should("exist");
    cy.log(
      this.DataType2.RadioSelec + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter CheckboxSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.CheckboxSelect).should("exist");
    cy.log(
      this.DataType2.CheckboxSelect + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Stepper Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Stepper).should("exist");
    cy.log(this.DataType2.Stepper + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter UserSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.UserSelector).scrollIntoView({ force: true });
    cy.contains(this.DataType2.UserSelector).should("exist");
    cy.log(
      this.DataType2.UserSelector + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter ContactSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.ContactSelector).should("exist");
    cy.log(
      this.DataType2.ContactSelector + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Assigning Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Assigning).should("exist");
    cy.log(
      this.DataType2.Assigning + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Inspection Element", function () {
    //Validation for Filer Elements

    cy.get("[name" + "=" + this.DataType2.Inspection + "]")
      .first()
      .scrollIntoView({ force: true });

    cy.get("[name" + "=" + this.DataType2.Inspection + "]")
      .first()
      .should("exist");
    //cy.contains(this.DataType2.Inspection).last().should("exist");
    cy.log(
      this.DataType2.Inspection + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Default filter Created On", function () {
    cy.get('[placeholder="Created On"][type="text"]').should("exist");
    cy.log("Created On Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Created By", function () {
    cy.get('[placeholder="Created By"][type="text"]').should("exist");
    cy.log("Created By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Modified By", function () {
    cy.get('[placeholder="Modified By"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.get('[placeholder="Modified By"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Modified On", function () {
    cy.get('[placeholder="Modified On"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Item Id", function () {
    cy.get('[placeholder="Item Id"]').last().scrollIntoView({ force: true });
    cy.get('[placeholder="Item Id"]').last().should("exist");
    cy.log("Default filter Item Id has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Distance", function () {
    cy.get('[name="Location(GPS)"][placeholder="Distance"]').should("exist");
    cy.log("Default filter Distance has been exist in Filters");
    cy.wait(2000);
  });
});
