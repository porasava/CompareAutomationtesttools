describe('TC12AdminDeleteCustomerSuccess', () => {
  it('TC12 Admin Delete Customer Success', () => {
    cy.visit('http://192.168.3.111:8042/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya')
    cy.get('#AdminPassword').type("Tanya123")
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(3) > a').click()
    cy.get(':nth-child(3) > :nth-child(6) > a').click()
    cy.get('.btn').click()   
    cy.get('div[class="container body-content"] h2').contains("Customer List")
    cy.screenshot()
   // cy.get('#logoutForm > a').click()
  })
})