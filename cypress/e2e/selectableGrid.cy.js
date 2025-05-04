import { SelectablePage } from "../support/pageObjects/SelectablePage";

const selectablePage = new SelectablePage();

describe("Selectable Grid Test", () => {
  before(() => {
    cy.visit("https://demoqa.com/selectable");
  });

  it("Clicks Grid and selects 2, 4, 6, 8", () => {
    selectablePage.clickGridTab();
    selectablePage.selectItems(["Two", "Four", "Six", "Eight"]);
    selectablePage.validateSelected(["Two", "Four", "Six", "Eight"]);
    selectablePage.validateNotSelected(["One", "Three", "Five", "Seven", "Nine"]);
  });
});
