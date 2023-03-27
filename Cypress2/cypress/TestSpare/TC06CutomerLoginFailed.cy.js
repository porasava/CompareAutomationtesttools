describe('TC6CutomerLoginFailed', () => {
  it('TC6 Cutomer Login Failed', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('12345')
    cy.get('input[value="Login"]').click()
    cy.get('.field-validation-error').click.toString(`Wrong Username or Password`)
    cy.screenshot()
   // cy.get('#logoutForm > a').click()
  })
})