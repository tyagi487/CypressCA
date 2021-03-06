import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";
import RandomString from "../PageObject/RandomString";

//One To Many Relation Control Variables
let APIData;
let OTMAPIName;
let OTMRelatedAPIName;
let OTMReverseEleAPIName;

//One To One Relation Control Variables
let APIData1;
let OTOApiName;
let OTORelatedApiName;
let OTOReverseEleApiName;

//Squared Card Relation Control Variables
let APIData2;
let SQApiName;
let SQatedApiName;
let SQReverseEleApiName;

//Randomly Generated APINames for OneTOMany Relation Control Elements coming from PageObject(RandomString Class)
const Rs = new RandomString();
APIData = Rs.OTMRandomAPIName1();
OTMAPIName = APIData.APIName;
OTMRelatedAPIName = APIData.RelatedAPIName;
OTMReverseEleAPIName = APIData.ReverseEleAPIName;

//Randomly Generated APINames for OneToOne Relation Control Elements coming from PageObject(RandomString Class)
const Rs1 = new RandomString();
APIData1 = Rs1.OTORandomAPIName2();
OTOApiName = APIData1.OTOAPIName;
OTORelatedApiName = APIData1.OTORelatedAPIName;
OTOReverseEleApiName = APIData1.OTOReverseEleAPIName;

//Randomly Generated APINames for SquareCard Relation Control Elements coming from PageObject(RandomString Class)
const Rs2 = new RandomString();
APIData2 = Rs2.SQRandomAPIName3();
SQApiName = APIData2.SQAPIName;
SQatedApiName = APIData2.SQatedAPIName;
SQReverseEleApiName = APIData2.SQReverseEleAPIName;

describe("Kit Builder Data Types Details", function () {
  this.beforeAll(function () {
    //Creating Dynamic Json file at RumTime for API Names
    cy.writeFile("cypress/fixtures/KitBuilderTestData/APINames.json", {
      APIName: OTMAPIName,
      RelatedAPIName: OTMRelatedAPIName,
      ReverseEleAPIName: OTMReverseEleAPIName,
      OTOAPIName: OTOApiName,
      OTORelatedAPIName: OTORelatedApiName,
      OTOReverseEleAPIName: OTOReverseEleApiName,
      SQAPIName: SQApiName,
      SQRelatedAPIName: SQatedApiName,
      SQReverseEleAPIName: SQReverseEleApiName,
    });

    cy.log(
      "OneToMany API Names Data has been write to json file for API Names"
    );
    cy.log(OTMAPIName);
    cy.log(OTMRelatedAPIName);
    cy.log(OTMReverseEleAPIName);

    cy.log("OneToOne API Names Data has been write to json file for API Names");
    cy.log(OTOApiName);
    cy.log(OTORelatedApiName);
    cy.log(OTOReverseEleApiName);

    cy.log(
      "SquareCard API Names Data has been write to json file for API Names"
    );
    cy.log(SQApiName);
    cy.log(SQatedApiName);
    cy.log(SQReverseEleApiName);

    //Page Object
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (data) {
      this.data = data;
    });

    //API Names fixtures file
    cy.fixture("KitBuilderTestData/APINames").then(function (APIName) {
      this.APIData = APIName;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (data1) {
      this.data1 = data1;
    });
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it.only("Navigating to New Form of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.KitBuilderUrl();
    // kb.AdminUrl();
    // cy.wait(5000);
    // kb.ClickOnKitBuilder();
    cy.wait(3000);
    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);

  });

  it("Input Section Data Elements", function () {
    cy.contains("Inputs").click({ force: true });
    cy.wait(2000);
  });

  it("Url Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Url"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Url(this.DataType.Url);
    cy.wait(5000);
  });

  it("Text Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Text"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Text(this.DataType.Text);
    cy.wait(5000);
  });

  it("File Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="File"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.File(this.DataType.File);
    cy.wait(5000);
  });

  it("Telephone Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Telephone"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Telephone(this.DataType.Telephone);
    cy.wait(5000);
  });

  it("TextAera Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Text Area"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.TextAera(this.DataType.TextAera);
    cy.wait(5000);

  });

  it("Slider Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Slider"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Slider(this.DataType.Slider);
    cy.wait(5000);
    
  });

  it("Currency Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Currency"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Currency(this.DataType.Currency);
    cy.wait(5000);
  });

  it("Measure Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Measure"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Measure(this.DataType.Measure);
    cy.wait(5000);
  });

  it("Email Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Email"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Email(this.DataType.Email);
    cy.wait(5000);
  });

  it("Address Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Address"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Address(this.DataType.Address);
    cy.wait(5000);
  });

  it("Section Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Section"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Section(this.DataType.Section);
    cy.wait(5000);
  });

  it("Number Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Number"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Number(this.DataType.Number);
    cy.wait(5000);

  });

  it("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click();
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });

  it("Date & Time Section Data Elements", function () {
    cy.contains("Date & Time").click({ force: true });
    cy.wait(2000);
  });

  it("Time Data Type", function () {

    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Time"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Time(this.DataType.Time);
    cy.wait(5000);
  });

  it("Date Data Type", function () {

    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Add Date"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Date(this.DataType.Date);
    cy.wait(5000);

  });

  it("Reminder Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Reminder"]').dblclick({ force: true });
    cy.wait(1000);
    const DataType = new KitBuilderDataTypes();
    DataType.Reminder(this.DataType.ReminderName);
  });

  it("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click();
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });

  it("Choice Pickers Section Data Elements", function () {
    cy.contains("Choice Pickers").click({ force: true });
    cy.wait(2000);
  });

  it("Toggle Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Toggle"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Toggle(this.DataType.Toggle);
    cy.wait(5000);
  });

  it("SelectList Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Select List"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.SelectList(
      this.DataType.SelectList,
      this.DataType.SelectListName,
      this.DataType.SelectListValue1,
      this.DataType.SelectListValue2,
      this.DataType.SelectListValue3,
      this.DataType.SelectListValue4,
      this.DataType.SelectListValue5

    );
    cy.wait(5000);
  });

  it("RadioSelect Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Radio Select"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.RadioSelect(
      this.DataType.RadioSelect,
      this.DataType.RadioSelectName,
      this.DataType.RadioSelectValue1,
      this.DataType.RadioSelectValue2,
      this.DataType.RadioSelectValue3,
      this.DataType.RadioSelectValue4,
      this.DataType.RadioSelectValue5

    );
    cy.wait(5000);
  });

  it("CheckboxSelect Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Checkbox Select"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.CheckboxSelect(
      this.DataType.CheckboxSelect,
      this.DataType.CheckboxSelectName,
      this.DataType.CheckboxSelectValue1,
      this.DataType.CheckboxSelectValue2,
      this.DataType.CheckboxSelectValue3,
      this.DataType.CheckboxSelectValue4,
      this.DataType.CheckboxSelectValue5
    );
    cy.wait(5000);
  });

  // it("Kit Builder Save and Publish", function () {
  //   //Kit Builder Save
  //   cy.get(".ca-button-green:nth-child(1)").click();
  //   cy.get(".v-btn__content > .theme--dark").click();
  //   cy.log("Kit builder(New Form) has been Saved");
  //   //Click on  Publish
  //   cy.contains("Publish").click({ force: true });
  //   //cy.get(".v-btn__content > .theme--dark").click();
  //   cy.log("Kit builder(New Form) has been Published");
  //   cy.wait(2000);
  // });

  it("Content Section Data Elements", function () {
    cy.contains("Content").click({ force: true });
    cy.wait(2000);
  });

  it.only("OneToManyRelation Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Relation 1-N"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToManyRelation(
      this.DataType.OneToManyRelation,
      this.DataType.KitToBeRelated,
      this.APIData.APIName,
      this.APIData.RelatedAPIName,
      this.APIData.ReverseEleAPIName,
      this.DataType.RelatedTableView,
      this.DataType.RelatedEle_1,
      this.DataType.RelatedEle_2,
      this.DataType.RelatedEle_3,
      this.DataType.RelatedEle_4,
      this.DataType.RelatedEle_5,
      this.DataType.OneToManyRelatedNew,
      this.DataType.OneToManyRelatedEdit,
      this.DataType.OneToManyMapView,
      this.DataType.OneToManySearchView
    );

    cy.wait(5000);
  });

  it("Stepper Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Stepper"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Stepper(
      this.DataType.Stepper,
      this.DataType.StepperName,
      this.DataType.StepperValue1,
      this.DataType.StepperValue2,
      this.DataType.StepperValue3,
      this.DataType.StepperValue4,
      this.DataType.StepperValue5
    );
    cy.wait(5000);
  });

  it("UserSelector Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="User Selector"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.UserSelector(this.DataType.UserSelector);
    cy.wait(5000);
  });

  it.only("OneToOneRelation Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Relation 1-1"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToOneRelation(
      this.DataType.OneToOneRelation,
      this.DataType.KitToBeRelate,
      this.APIData.OTOAPIName,
      this.APIData.OTORelatedAPIName,
      this.APIData.OTOReverseEleAPIName,
      this.DataType.ElementToBeRelate,
      this.DataType.OneToOneRelatedNew,
      this.DataType.OneToOneRelatedEdit,
      this.DataType.OneToOneMapView,
      this.DataType.OneToOneSearchView
    );
    cy.wait(5000);
  });

  it("ContactSelector Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Contact Selector"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.ContactSelector(this.DataType.ContactSelector);
    cy.wait(5000);
  });

  it.only("SquareCard Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="SquareCard"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.SquareCard(
      this.DataType.SquareCardName,
      this.DataType.CardKitToBeRelated,
      this.APIData.SQAPIName,
      this.APIData.SQRelatedAPIName,
      this.APIData.SQReverseEleAPIName,
      this.DataType.SquareCardTableView,
      this.DataType.RelateEle_1,
      this.DataType.RelateEle_2,
      this.DataType.RelateEle_3,
      this.DataType.RelateEle_4,
      this.DataType.RelateEle_5,
      this.DataType.CardRelatedNew,
      this.DataType.CardRelatedEdit,
      this.DataType.CardMapView,
      this.DataType.CardSearchView
    );

    cy.wait(5000);
  });

  it("Icon Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Icon"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Icon(this.DataType.Icon);
    cy.wait(5000);
  });

  it("Inspection Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Inspection"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Inspection(
      this.DataType.Inspection,
      this.DataType.InspectionName,
      this.DataType.InspectionValue1,
      this.DataType.InspectionValue2,
      this.DataType.InspectionValue3,
      this.DataType.InspectionValue4,
      this.DataType.InspectionValue5
    );
    cy.wait(5000);
  });

  it("Assigning Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Assigning"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Assigning(this.DataType.Assigning);
    cy.wait(5000);
  });

  /*

  it("Dynamic Controls Section Data Elements", function () {
    cy.contains("Dynamic Controls").click({ force: true });
    cy.wait(2000);
  });

  it("Reactive Control Data type", function () {
    const DataType = new KitBuilderDataTypes();
    DataType.ReactiveControl(this.DataType.RCName);
  });

  */

  it("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click();
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });
});
