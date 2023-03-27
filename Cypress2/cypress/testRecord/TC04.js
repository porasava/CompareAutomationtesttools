describe('TC04', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('TC04', function() {
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
    cy.get('#ConfirmPassword').type('Tanya');
    cy.get('.form-horizontal').click();
    cy.get('#Email').clear();
    cy.get('#Email').type('por.asava@hotmail.com');
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
  });
})