import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Only One to Many Related Control Element Test Case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    slp.visitCityComTest();
    //cy.visit("https://tm.commonareas.io/Public/Login?ReturnUrl=%2F");

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    //lp.EnterEmail("sam@armyspy.com");
    lp.EnterEmail("citycom@commonareas.work.dev");
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

  this.beforeEach("KitType Data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("SanityPackTestData2/RelatedOneToNData").then(function (
      SanityTCData
    ) {
      this.RelatedKitItemData = SanityTCData;
    });

    // cy.fixture("SanityPackTestData(Prod)/RelatedOneToNData(Prod)").then(
    //   function (SanityTCData) {
    //     this.RelatedKitItemData = SanityTCData;
    //   }
    // );

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    // cy.fixture("SanityPackTestData(Prod)/KitBuilderDataTypes2(Prod)").then(
    //   function (NewDataForElements) {
    //     this.DataType2 = NewDataForElements;
    //   }
    // );

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.ViewName = KitTypeFormViewsNames;
    });
  });

  it.only("Navigating to New form of created Kit type", function () {
    cy.wait(10000);
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.NewKitItemData.KitName);
    cy.wait(3000);
    //This is class to open searched kit type by clicking + iocn
    cy.get(".truncate-special").first().click({ force: true });
    cy.wait(3000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it.only("One to Many Related Control to configure (Related New form)", function () {
    cy.wait(1000);
    //save Kit Item for empty form
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    //kit item Save Assertion for no data
    cy.contains("Nothing to save for " + this.NewKitItemData.KitName).should(
      "be.visible"
    );
    cy.wait(3000);
    cy.log("With No data new kit item saved successfully ");
    cy.wait(2000);

    //Scroll
    cy.get(".ca-item").eq(1).scrollIntoView({ force: true });
    cy.wait(4000);
    //Click on New Item for one to Many Related Control
    cy.get(".ca-item")
      .eq(1)
      .scrollIntoView({ force: true })
      .click({ force: true });
    //New Item Assertion
    cy.contains("New Item created").should("be.visible");
    //Related Kit Assertion
    cy.contains(this.DataType2.KitToBeRelated).should("be.visible");
    cy.wait(4000);

    //save related new with no data
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion for no data
    cy.contains("Nothing to save for " + this.DataType2.KitToBeRelated).should(
      "be.visible"
    );
    cy.wait(3000);
    cy.log("With No data Related New kit item saved successfully ");
    cy.wait(2000);

    //Enter data in Related New
    cy.wait(2000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .type(this.RelatedKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .eq(1)
      .type(this.RelatedKitItemData.Text);
    cy.wait(1000);

    //File
    cy.get(".dropzone-icons-content > .clickable path")
      .eq(0)
      .click({ force: true });
    //cy.get(".link-icon--green > path").last().click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.RelatedKitItemData.RelNewFileName).click({
      force: true,
    });
    //Click on save file
    cy.wait(2000);

    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });
    cy.contains("File saved").should("be.visible");
    cy.log("File Saved");
    cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .eq(1)
      .type(this.RelatedKitItemData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .type(this.RelatedKitItemData.TextAera);
    cy.wait(1000);

    //Slider;
    //Firing Alert pop for manual action
    cy.log("User need to do something").then(() => {
      alert("Set Slider value by clicking slider Bar");
    });
    cy.log(
      "Firing Alert pop for manual action to Set Slider value by clicking slider Bar"
    );
    cy.wait(10000);

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .eq(0)
      .click({ force: true })
      .type(this.RelatedKitItemData.Currency);

    //Measure
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .eq(0)
      .click({ force: true })
      .type(this.RelatedKitItemData.Measure);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .type(this.RelatedKitItemData.Email);
    cy.wait(1000);

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    )
      .eq(0)
      .type(this.RelatedKitItemData.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]')
      .eq(0)
      .type(this.RelatedKitItemData.Addressline2);

    cy.get('[placeholder="City"]').eq(0).scrollIntoView({ force: true });
    cy.wait(1000);

    //City
    cy.get('[placeholder="City"]').eq(0).type(this.RelatedKitItemData.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .eq(0)
      .click({ force: true });
    cy.contains(this.RelatedKitItemData.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .type(this.RelatedKitItemData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .eq(0)
      .type(this.RelatedKitItemData.Number);
    cy.wait(1000);

    //Time Data Element
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]')
      .eq(0)
      .click({ force: true });
    cy.wait(1000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[8]"
    ).click({ force: true });
    cy.wait(1000);
    //Select Value of miniutes
    cy.xpath("//span[contains(text(),'30')]").first().click({ force: true });
    cy.wait(1000);
    //Click on PM
    cy.xpath("//div[contains(text(),'PM')]").click({ force: true });
    //Click on OK to save date
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//button[1]"
    ).click({ force: true });

    //Date Data Element
    //Click on Date to appear Date pop up
    cy.get(
      "div.v-input.no-bottom.date-picker-text-field.date-picker-text-field-direct.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div > div.v-input__slot > div.v-input__prepend-inner > i"
    )
      .eq(0)
      .click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'28')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").eq(0).click({
      force: true,
    });

    //Click on DropDown of SelectList
    cy.wait(3000);
    cy.get(
      "div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner"
    )
      .eq(4)
      .click({ force: true });
    cy.wait(2000);
    //SelectList Value(Values coming form KitItemValues Json File)
    cy.contains(this.RelatedKitItemData.SelectListValue).click({ force: true });
    cy.log("SelectList Value has been set.");

    //RadioSelect
    cy.contains(this.RelatedKitItemData.RadioSelectValue).click({
      force: true,
    });
    cy.log("RadioSelect Value has been set.");

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.RelatedKitItemData.CheckboxSelectValue2).click({
      force: true,
    });

    cy.log("Checkbox Values has been set.");

    cy.wait(5000);
    cy.get(".searchIcon").eq(1).scrollIntoView({ force: true });

    //Stepper
    //getting value form different json file
    cy.contains(this.RelatedKitItemData.StepperValue1).click({ force: true });
    cy.log("Stepper Value has been set.");

    cy.wait(2000);
    //.v-stepper__step:nth-child(1/3/5/7/9)
    // cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
    //   force: true,
    // });

    cy.wait(2000);
    //UserSelector(Values coming form KitItemValues Json File)
    //Click on to open UserSelector Pop up
    cy.get(".searchIcon").eq(0).click({ force: true });
    cy.wait(3000);

    cy.contains(this.RelatedKitItemData.UserSelectorName).click({
      force: true,
    });
    cy.log("UserSelect added");
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(".searchIcon").eq(1).click({ force: true });

    cy.wait(4000);
    cy.contains(this.RelatedKitItemData.ContactSelectorName).click({
      force: true,
    });
    cy.log("ContactSelecto added");
    cy.wait(4000);

    //getting value form different json file
    cy.wait(2000);
    //Icon
    //Click on + icon of ICON Element
    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path")
      .eq(0)
      .click({
        force: true,
      });
    cy.wait(2000);
    //Click on Icon Tittle and  select Icon logo
    //Give numeric no from 1 in child(1,2,3...)
    cy.get(".thumb-container:nth-child(4) .selected-icon").click({
      force: true,
    });
    cy.wait(2000);
    //Icon Save
    cy.get(".button-pop-ups").click({ force: true });
    cy.wait(2000);

    //IcozSize
    cy.get(
      "div.row.wrapper-kit-control.align-center > div > div.fill-height.border-right.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .eq(0)
      .click({ force: true });
    cy.wait(2000);
    cy.contains(this.RelatedKitItemData.LargeiconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]')
      .eq(0)
      .type(this.RelatedKitItemData.IconLabel);

    //Inspection(Values coming form KitItemValues Json File)
    //Inspection
    cy.contains(this.DataType2.Inspection).scrollIntoView({
      force: true,
    });

    cy.wait(3000);
    //child 1 for 1st value &&&& child 2 for 2nd value-child 3 for 3rd value......
    //"These are the index value of div child":"use according to select inspection value",
    cy.get(
      "div.v-slide-group__wrapper > div > span:nth-child(" +
        this.RelatedKitItemData.InspectionValue1 +
        ") > span"
    )
      .eq(0)
      .click({ force: true });

    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.wait(7000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.RelatedKitItemData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //Assigning creation assertion
    cy.contains("Item shared").should("be.visible");
    cy.log("Assigning added");
    cy.wait(5000);

    //save related new
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //Related kit item Save Assertion
    cy.contains(this.DataType2.KitToBeRelated + " has been saved").should(
      "be.visible"
    );
    cy.log(this.DataType2.KitToBeRelated + " related new has been Saved");

    //Related kit item created assertion
    cy.contains(
      " Relation on " +
        this.DataType2.OneToManyRelation +
        " for " +
        this.NewKitItemData.KitName +
        " created"
    ).should("be.visible");

    //close the Kit Item
    cy.wait(5000);
    //Close Kit type
    cy.get(".subheader--button-icon-wrapper path").first().click({
      force: true,
    });
    cy.contains(this.NewKitItemData.KitName).should("be.visible");
    cy.log("Related new has been Close");
    cy.wait(5000);
  });

  it.only("Validate One to Many added Element(Releated New)", function () {
    //Scroll
    cy.contains(this.DataType2.OneToManyRelation).scrollIntoView({
      force: true,
    });
    //scroll
    cy.get(".ca-item").eq(1).scrollIntoView({ force: true });

    cy.get(".btn-load .inline-svg").eq(0).scrollIntoView({
      force: true,
    });

    cy.wait(2000);
    //Create one kititem validation
    cy.get(
      ".grid-body:nth-child(1) > td:nth-child(1) > .v-list-item__subtitle"
    ).should("exist");

    cy.wait(5000);

    //Firing Alert pop for manual action
    cy.log("User need to do something").then(() => {
      alert(
        "Scroll Horizontal Scroll Bar to look on OneToMany Relation Elements"
      );
    });
    cy.log(
      "Firing Alert pop for manual action to scroll horizontal scroll Bar"
    );
    cy.wait(10000);

    //Related element existance asseritons
    cy.contains(this.RelatedKitItemData.Url).should("exist");
    cy.contains(this.RelatedKitItemData.Text).should("exist");
    cy.contains(this.RelatedKitItemData.Telephone).should("exist");
    cy.wait(1000);
    cy.contains(this.RelatedKitItemData.TextAera).should("exist");
    cy.contains(this.RelatedKitItemData.Email).should("exist");
    cy.contains(this.RelatedKitItemData.Number).should("exist");
    cy.contains(this.RelatedKitItemData.Measure).should("exist");
    cy.contains(this.RelatedKitItemData.Currency).should("exist");

    cy.log(
      "One to many related new elements has been exist(before kit item saved)"
    );
    cy.wait(4000);

    //save Kit item  (new form)
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    // kit item Save Assertion
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.log("Kit Item has been saved");
    //Refresh one to many elements
    cy.get(".btn-load .inline-svg").eq(0).click({ force: true });
    cy.log("Refresh one to many");
    cy.wait(6000);

    //Scroll
    cy.contains(this.DataType2.OneToManyRelation).scrollIntoView({
      force: true,
    });
    //scroll
    cy.get(".ca-item").eq(1).scrollIntoView({ force: true });
    cy.wait(2000);
    //Create one kititem validation
    cy.get(
      ".grid-body:nth-child(1) > td:nth-child(1) > .v-list-item__subtitle"
    ).should("exist");

    //Firing Alert pop for manual action
    cy.log("User need to do something").then(() => {
      alert(
        "Scroll Horizontal Scroll Bar to look on OneToMany Relation Elements"
      );
    });
    cy.log(
      "Firing Alert pop for manual action to scroll horizontal scroll Bar"
    );
    cy.wait(10000);

    //After kit item save
    //Related element existance asseritons
    cy.contains(this.RelatedKitItemData.Url).should("exist");
    cy.contains(this.RelatedKitItemData.Text).should("exist");
    cy.contains(this.RelatedKitItemData.Telephone).should("exist");
    cy.wait(1000);
    cy.contains(this.RelatedKitItemData.TextAera).should("exist");
    cy.contains(this.RelatedKitItemData.Email).should("exist");
    cy.contains(this.RelatedKitItemData.Number).should("exist");
    cy.contains(this.RelatedKitItemData.Measure).should("exist");
    cy.contains(this.RelatedKitItemData.Currency).should("exist");
    cy.log(
      "One to many related new elements has been exist(after kit item saved)"
    );
    cy.wait(4000);

    //Again save Kit item(new form)
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion for nothing
    cy.contains("Nothing to save for " + this.NewKitItemData.KitName).should(
      "be.visible"
    );
    cy.log("There is nothing to save for Kit Item");
  });

  it.only("Link Existing Item for OneToMany Related Control", function () {
    cy.wait(3000);
    //Click on New Item for one to Many Related Control
    cy.get(".ca-item")
      .eq(0)
      .scrollIntoView({ force: true })
      .click({ force: true });
    //Search List view pop up assertion
    cy.contains(this.ViewName.SearchView).should("be.visible");
    //Selct the to be linked kit item
    cy.get(".thumb-selected-icon").eq(0).click();
    cy.get(".thumb-selected-icon").eq(1).click();
    cy.wait(2000);
    //Click on select btn
    cy.get(".button-pop-ups > .v-btn__content").click({ force: true });

    cy.contains(
      "Relation on " +
        this.DataType2.OneToManyRelation +
        " for " +
        this.NewKitItemData.KitName +
        " linked "
    ).should("be.visible");

    cy.wait(3000);
    cy.get(
      ".grid-body:nth-child(1) > td:nth-child(1) > .v-list-item__subtitle"
    ).scrollIntoView({ force: true });
    cy.wait(2000);
    cy.get(
      ".grid-body:nth-child(1) > td:nth-child(1) > .v-list-item__subtitle"
    ).should("exist");
    cy.get(
      ".grid-body:nth-child(2) > td:nth-child(1) > .v-list-item__subtitle"
    ).should("exist");
    cy.get(
      ".grid-body:nth-child(3) > td:nth-child(1) > .v-list-item__subtitle"
    ).should("exist");

    cy.log("Existing item linked");
    cy.wait(3000);

    //save Kit item  (new form)
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    // kit item Save Assertion
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.log("Kit Item has been saved");
  });
});
