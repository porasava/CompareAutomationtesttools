describe('TC21AdminDidnotReturnMoneyToCustomer', () => {
  it('TC21 Admin Did not Return Money To Customer', () => {
    cy.visit('http://localhost:8044/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya1')
    cy.get('#AdminPassword').type('Tanya123')
    cy.get(`input[value="Login"]`).click()
    cy.get(`select[name="Customer"]`).type("Customer Z")
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
    cy.get(`#txtPaymentAmount`).type("2000.00")
    cy.get(`#btnPayment`).should('be.disabled')
    cy.viewport(1350, 700)
    cy.screenshot()
    cy.get(`#btnClose`).click()
 //   cy.get(`#logoutForm`).click()
  })
})