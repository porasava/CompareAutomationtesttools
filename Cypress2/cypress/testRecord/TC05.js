describe('TC05', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('TC05', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://192.168.3.111:8042/');
    cy.get('#loginlink').click();
    cy.get('td > #loginlink').click();
    cy.get('#FirstName').clear('T');
    cy.get('#FirstName').type('TananyaTest1');
    cy.get('#LastName').clear();
    cy.get('#LastName').type('Asava');
    cy.get('#UserName').clear();
    cy.get('#UserName').type('TananyaTest1');
    cy.get('#Password').clear();
    cy.get('#Password').type('Tanya123');
    cy.get('#ConfirmPassword').clear();
    cy.get('#ConfirmPassword').type('Tanya123');
    cy.get('#Email').clear();
    cy.get('#Email').type('por.asava@hotmail.com');
    cy.get('.btn').click();
    cy.get(':nth-child(10) > .col-md-offset-2').click();
    /* ==== End Cypress Studio ==== */
  });
})