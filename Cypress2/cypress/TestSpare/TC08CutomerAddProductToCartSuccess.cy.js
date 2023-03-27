describe('TC8CutomerAddProductToCartSuccess', () => {
  it('TC8 Cutomer Add Product To Cart Success', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('input[value="Login"]').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get("#cartItem").click.toString("Cart(1)")
    cy.screenshot()
  //  cy.get('#logoutForm > a').click()
  })
})