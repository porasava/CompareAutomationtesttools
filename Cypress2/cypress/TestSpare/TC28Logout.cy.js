describe('TC28Logout', () => {
  it('TC28 Logout', () => {
    cy.visit('http://localhost:8044/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya1')
    cy.get('#AdminPassword').type('Tanya123')
    cy.get(`input[value="Login"]`).click()
    cy.get(`#logoutForm`).click()
    cy.get(`div[class="container body-content"] h2`)
    .click.toString(`Admin Login`)
    cy.viewport(1350, 700)
    cy.screenshot()
  })
})