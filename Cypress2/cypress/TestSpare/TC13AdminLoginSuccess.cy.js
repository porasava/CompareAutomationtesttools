describe('TC13AdminLoginSuccess', () => {
  it('TC13 Admin Login Success', () => {
    cy.visit('http://localhost:8044/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya1')
    cy.get('#AdminPassword').type('Tanya123')
    cy.get(`input[value="Login"]`).click()
    cy.get('body > div:nth-child(2) > fieldset:nth-child(4) > legend:nth-child(1)').click.toString(`Restaurant`)
    cy.screenshot()
   // cy.get(`#logoutForm`).click()
  })
})