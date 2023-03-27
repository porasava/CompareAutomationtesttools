describe('TC2AdminAddProductSuccess', () => {
  it('TC2 Admin Add Product Success', () => {
    cy.visit('http://192.168.3.111:8042/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya')
    cy.get('#AdminPassword').type("Tanya123")
    cy.get('[type="submit"]').click()
    cy.get('.navbar-collapse > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('#CategoryId').select('        14').should('have.value','        14')
    cy.get('#ItemCode').type('Adidas 001')
    cy.get('#ItemName').type('Adidas')
    cy.get('#Description').type('Adidas 001')
    cy.get('#ItemPrice').type('200')
    cy.get('#ImagePath').selectFile(__dirname+'\\adidas_shoe.jfif')
    cy.get('#btnSave').click()
          cy.on('window:alert',(str)=>
    {
      //Mocha
      expect(str).to.equal('Item is added Successfully.')
    })
    cy.screenshot()
  })
})