describe('TC12', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('TC12', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://192.168.3.111:8042/Product');
    cy.get('#AdminUsername').clear('Tananya');
    cy.get('#AdminUsername').type('Tananya');
    cy.get('#AdminPassword').clear('T');
    cy.get('#AdminPassword').type('Tanya123');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(3) > a').click();
    cy.get(':nth-child(3) > :nth-child(6) > a').click();
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
  });
})