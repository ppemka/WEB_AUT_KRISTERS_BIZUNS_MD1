export class SelectablePage {
    clickGridTab() {
      cy.contains("Grid").click();
    }
  
    selectItems(items) {
      items.forEach(item => {
        cy.contains(".list-group-item", item).click();
      });
    }
  
    validateSelected(items) {
      items.forEach(item => {
        cy.contains(".list-group-item", item).should("have.class", "active");
      });
    }
  
    validateNotSelected(items) {
      items.forEach(item => {
        cy.contains(".list-group-item", item).should("not.have.class", "active");
      });
    }
  }
  