describe('TC01', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('TC01', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://192.168.3.111:8042/Product');
    cy.get('#AdminUsername').clear('Tananya');
    cy.get('#AdminUsername').type('Tananya');
    cy.get('#AdminPassword').clear('T');
    cy.get('#AdminPassword').type('Tanya123');
    cy.get('[type="submit"]').click();
    cy.get('.navbar-collapse > :nth-child(1) > :nth-child(1) > a').click();
    cy.get('#ItemCode').clear('a');
    cy.get('#ItemCode').type('aaa');
    cy.get('#ItemName').clear('a');
    cy.get('#ItemName').type('aaa');
    cy.get('#Description').clear('a');
    cy.get('#Description').type('aaa');
    cy.get(':nth-child(5) > .from-group').click();
    cy.get('#ItemPrice').clear();
    cy.get('#ItemPrice').type('20');
    cy.get('#btnSave').click();
    /* ==== End Cypress Studio ==== */
  });
})