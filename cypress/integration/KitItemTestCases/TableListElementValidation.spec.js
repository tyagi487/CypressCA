import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate TableList Element for Created Kit Type on UI", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visit();
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt"
    );
  });

  this.beforeEach("KitType Data", function () {
    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      DataEleValues
    ) {
      this.KitData = DataEleValues;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it.only("Open Created Kit type As List View", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.KitName).scrollIntoView({ force: true });
    cy.wait(5000);
    cy.contains(this.KitName.KitName).click({ force: true });
    cy.wait(10000);
  });

  it("Validate table View Result URL Elements", function () {
    cy.wait(3000);
    cy.contains(this.KitData.Url + ":" + " " + this.KitItemData.Url).should(
      "be.visible"
    );
    cy.log(this.KitData.Url + "has been Validate for kitItem Results Elements");
    cy.wait(2000);
  });

  it("Validate table View Result Text Elements", function () {
    cy.contains(this.KitData.Text + ":" + " " + this.KitItemData.Text).should(
      "be.visible"
    );
    cy.log(
      this.KitData.Text + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Telephone Elements", function () {
    cy.contains(
      this.KitData.Telephone + ":" + " " + this.KitItemData.Telphone
    ).should("be.visible");
    cy.log(
      this.KitData.Telephone + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result TextAera Elements", function () {
    cy.contains(
      this.KitData.TextAera + ":" + " " + this.KitItemData.TextAera
    ).should("be.visible");
    cy.log(
      this.KitData.Text + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Currency Elements", function () {
    cy.contains(
      this.KitData.Currency + ":" + " " + this.KitItemData.Currency
    ).should("be.visible");
    cy.log(
      this.KitData.Currency + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Measure Elements", function () {
    cy.contains(
      this.KitData.Measure + ":" + " " + this.KitItemData.Measure
    ).should("be.visible");
    cy.log(
      this.KitData.Measure + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Email Elements", function () {
    cy.contains(this.KitData.Email + ":" + " " + this.KitItemData.Email).should(
      "be.visible"
    );

    cy.log(
      this.KitData.Email + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Address Elements", function () {
    cy.contains(
      "Address: Dubai, Hawai, AabuDhabi, Alaska, 201002, United States"
    ).should("be.visible");
    cy.log(
      this.KitData.Address + ":" + " " + this.KitItemData.Address,
      +" " + this.KitItemData.Addressline,
      +" " + this.KitItemData.City,
      +" " + this.KitItemData.ZipCode,
      +" " + this.KitItemData.Country
    );

    cy.contains(
      this.KitData.Address + ":" + " " + this.KitItemData.Address,
      +" " + this.KitItemData.Addressline,
      +" " + this.KitItemData.City,
      +" " + this.KitItemData.ZipCode,
      +" " + this.KitItemData.Country
    ).should("be.visible");

    cy.log(
      this.KitData.Address + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Number Elements", function () {
    cy.contains(
      this.KitData.Number + ":" + " " + this.KitItemData.Number
    ).should("be.visible");
    cy.log(
      this.KitData.Number + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result SelectList Elements", function () {
    cy.contains(
      this.KitData.SelectList + ":" + " " + this.KitItemData.SelectListValue
    ).should("be.visible");
    cy.log(
      this.KitData.SelectList + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result RadioSelect Elements", function () {
    cy.contains(
      this.KitData.RadioSelect + ":" + " " + this.KitItemData.RadioSelect
    ).should("be.visible");
    cy.log(
      this.KitData.RadioSelect + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result CheckboxSelect Elements", function () {
    //coz checkbox can have multiple values so modify accordingly

    cy.contains(
      this.KitData.CheckboxSelect +
        ":" +
        " " +
        this.KitItemData.CheckboxSelectValue2
    ).should("be.visible");
    cy.log(
      this.KitData.CheckboxSelect + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });


  it("Validate table View Result UserSelector Elements", function () {
    cy.contains(
      this.KitData.UserSelector + ":" + " " + this.KitItemData.UserSelectorName
    ).should("be.visible");
    cy.log(
      this.KitData.UserSelector + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result ContactSelector Elements", function () {
    cy.contains(
      this.KitData.ContactSelector + ":" + " " + this.KitItemData.ContactSelectorName
    ).should("be.visible");
    cy.log(
      this.KitData.ContactSelector + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Inspection Elements", function () {
    cy.contains(
      this.KitData.Inspection + ":" + " " + this.KitItemData.InspectionValue
    ).should("be.visible");
    cy.log(
      this.KitData.Inspection + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it.only("Validate table View Result Stepper Elements", function () {
    cy.contains(
      this.KitData.Stepper + ":" + " " + this.KitItemData.StepperValue
    ).should("be.visible");
    cy.log(
      this.KitData.Stepper + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it.only("Validate table View Result Assigning Elements", function () {
    cy.contains(
      this.KitData.Assigning + ":" + " " + this.KitItemData.AssigningName
    ).should("be.visible");
    cy.log(
      this.KitData.Assigning + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });








  it("Click on Filter btn", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.wait(3000);
  });

  it("Validate the Filter Url Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Url"]').last().scrollIntoView({ force: true });
    cy.get('[name="Url"]').last().should("be.visible");
    cy.log(this.KitData.Url + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Text Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Text"]').last().scrollIntoView({ force: true });
    cy.get('[name="Text"]').last().should("be.visible");
    cy.log(this.KitData.Text + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Telephone Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Telephone"]').last().scrollIntoView({ force: true });
    cy.get('[name="Telephone"]').last().should("be.visible");
    cy.log(this.KitData.Telephone + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter TextAera Element", function () {
    //Validation for Filer Elements
    cy.get('[name="TextAera"]').last().scrollIntoView({ force: true });
    cy.get('[name="TextAera"]').last().should("be.visible");
    cy.log(this.KitData.TextAera + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Slider, Currency, Measure and Number Element", function () {
    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").should("exist");
    cy.log(
      "This class is Validate Slider, Currency, Measure and Number Data Elements in Filters"
    );
  });

  it("Validate the Filter Email Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Email"]').last().scrollIntoView({ force: true });
    cy.get('[name="Email"]').last().should("be.visible");
    cy.log(this.KitData.Email + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Address Element", function () {
    cy.get('[name="Address"]').last().scrollIntoView({ force: true });
    cy.get('[name="Address"]').last().should("be.visible");
    cy.log(this.KitData.Address + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Time Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]').should("be.visible");
    cy.log(this.KitData.Time + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Date Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').should("be.visible");
    cy.log(this.KitData.Date + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Toggle Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Toggle).should("exist");
    cy.log(this.KitData.Toggle + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter SelectList Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.SelectList).should("exist");
    cy.log(this.KitData.SelectList + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter RadioSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.RadioSelect).should("exist");
    cy.log(this.KitData.RadioSelec + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter CheckboxSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.CheckboxSelect).should("exist");
    cy.log(
      this.KitData.CheckboxSelect + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Stepper Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Stepper).should("exist");
    cy.log(this.KitData.Stepper + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter UserSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.UserSelector).scrollIntoView({ force: true });
    cy.contains(this.KitData.UserSelector).should("exist");
    cy.log(
      this.KitData.UserSelector + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter ContactSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.ContactSelector).should("exist");
    cy.log(
      this.KitData.ContactSelector + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Assigning Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Assigning).should("exist");
    cy.log(this.KitData.Assigning + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Inspection Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Inspection).last().should("exist");
    cy.log(this.KitData.Inspection + " Data Element has been exist in Filters");
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
});