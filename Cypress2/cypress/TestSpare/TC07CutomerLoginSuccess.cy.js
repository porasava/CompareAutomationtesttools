describe('TC7CutomerLoginSuccess', () => {
  it('TC7 Cutomer Login Success', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('input[value="Login"]').click()
    cy.get(".text-center").click.toString("Pet Product List")
    cy.screenshot()
    //cy.get('#logoutForm > a').click()
  })
})