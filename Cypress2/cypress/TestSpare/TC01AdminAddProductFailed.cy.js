//Cypress - Spec
describe('TC1AdminAddProductFailed', () => {
  it('TC1 Failed to add product', () => {
    cy.visit('http://192.168.3.111:8042/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya')
    cy.get('#AdminPassword').type("Tanya123")
    cy.get('[type="submit"]').click()
    cy.get('.navbar-collapse > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('#CategoryId').select('        14').should('have.value','        14')
    cy.get('#ItemCode').type('Item Code')
    cy.get('#ItemName').type('Item Name')
    cy.get('#Description').type('Description')
    cy.get('#ItemPrice').type('20')
    cy.get('#btnSave').click()
    cy.on('window:alert',(str)=>
    {
      //Mocha
      expect(str).to.equal('There is some problem to add Item.')
    })
    cy.screenshot()
   // cy.get('#logoutForm > a').click()
  })
})