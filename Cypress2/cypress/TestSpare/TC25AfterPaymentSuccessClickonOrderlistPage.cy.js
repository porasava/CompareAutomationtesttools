describe('TC25AfterPaymentSuccessClickonOrderlistPage', () => {
  it('TC25 After Payment Success Click on Order list Page', () => {
    cy.visit('http://localhost:8044/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya1')
    cy.get('#AdminPassword').type('Tanya123')
    cy.get(`input[value="Login"]`).click()
    cy.get(`select[name="Customer"]`).select("Customer C")
    cy.get(`select[name="Item"]`).select("1 - Signature Tonkotsu Chashu Ramen")
    cy.get(`#txtQuantity`).clear("")
    cy.get(`#txtQuantity`).type("1")
    cy.get(`#txtDiscount`).type("0")
    cy.get(`#btnAddToList`).click()
    cy.get(`select[name="Item"]`).select("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    cy.get(`#txtQuantity`).clear("")
    cy.get(`#txtQuantity`).type("2")
    cy.get(`#txtDiscount`).type("0")
    cy.get(`#btnAddToList`).click()
    cy.get(`select[name="Item"]`).select("3 - Nostalgic Japanese Soy Chicken Ramen")
    cy.get(`#txtQuantity`).clear("")
    cy.get(`#txtQuantity`).type("3")
    cy.get(`#txtDiscount`).type("0")
    cy.get(`#btnAddToList`).click()
    cy.get(`#btnCheckOut`).click()
    cy.get(`#txtPaymentAmount`).clear("")
    cy.get(`#txtPaymentAmount`).type("106.40")
    cy.get(`#txtReturnTotal`).type("00")
    cy.get(`#btnPayment`).click()
    cy.get(`a[href="/Order/OrderIndex"]`).click()
    cy.viewport(1350, 700)
    cy.get('tbody tr:nth-child(2) td:nth-child(5)')
    .click.toString(`123.40`)
    cy.screenshot()
   // cy.get(`#logoutForm`).click()
  })
})