describe('TC11CutomerLogoutSuccess', () => {
  it('TC11 Cutomer Logout Success', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('input[value="Login"]').click()
    cy.get('#logoutForm > a').click()
    cy.get('div[class="container body-content"] h2').contains("Customer Login")
    cy.screenshot()
  })
})