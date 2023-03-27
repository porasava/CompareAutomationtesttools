describe('TC10', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('TC10', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://192.168.3.111:8042/');
    cy.get('#loginlink').click();
    cy.get('#UserName').clear('TananyaTest1');
    cy.get('#UserName').type('TananyaTest1');
    cy.get('#Password').clear('T');
    cy.get('#Password').type('Tanya123');
    cy.get('[type="submit"]').click();
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('#cartItem').click();
    /* ==== End Cypress Studio ==== */
  });
})