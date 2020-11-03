describe("First test", () => {
    it("Connect to PBI", () => {
      cy.visit("/");
      cy.get('#items > p:nth-child(1) > a')
        .should('have.attr', 'href')
        .then((href) => {
        cy.visit(href)
        })
      cy.get("#ribbonContainer > div.ribbonTopBarContainer > button").click()
    });
    
  });
  