describe('TC4CutomerRegisterFailed', () => {
  it('TC4 Cutomer Register Failed', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('td > #loginlink').click()
    cy.get('#FirstName').type('TananyaTest')
    cy.get('#LastName').type('AsaTest')
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('#ConfirmPassword').type('12345')
    cy.get('#Email').type('AsaTest@hotmail.com')
    cy.get('[type="submit"]').click()
    cy.get('.btn').click()    
    cy.get('#ConfirmPassword-error').check.toString(`'Confirm Password' and 'Password' do not match.`)
    cy.viewport(1000, 660);
    cy.screenshot()
   // cy.get('#logoutForm > a').click()
  
  })
})