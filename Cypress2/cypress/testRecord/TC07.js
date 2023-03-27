describe('TC07', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('TC07', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://192.168.3.111:8042/');
    cy.get('#loginlink').click();
    cy.get('#UserName').clear('TananyaTest1');
    cy.get('#UserName').type('TananyaTest1');
    cy.get('#Password').clear('T');
    cy.get('#Password').type('Tanya123');
    cy.get('[type="submit"]').click();
    /* ==== End Cypress Studio ==== */
  });
})