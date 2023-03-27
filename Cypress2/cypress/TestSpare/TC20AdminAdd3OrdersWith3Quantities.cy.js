describe('TC20AdminAdd3OrdersWith3Quantities', () => {
  it('TC20 Admin Add 3 Orders With 3 Quantities', () => {
    cy.visit('http://localhost:8044/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya1')
    cy.get('#AdminPassword').type('Tanya123')
    cy.get(`input[value="Login"]`).click()
    cy.get(`select[name="Customer"]`).select("Customer Z")
    cy.get(`select[name="Item"]`).select("1 - Signature Tonkotsu Chashu Ramen")
    cy.get(`#txtQuantity`).clear("")
    cy.get(`#txtQuantity`).type("1")
    cy.get(`#txtDiscount`).clear("")
    cy.get(`#txtDiscount`).type("4")
    cy.get(`#btnAddToList`).click()
    cy.get(`select[name="Item"]`).select("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    cy.get(`#txtQuantity`).clear("")
    cy.get(`#txtQuantity`).type("2")
    cy.get(`#txtDiscount`).clear("")
    cy.get(`#txtDiscount`).type("5")
    cy.get(`#btnAddToList`).click()
    cy.get(`select[name="Item"]`).select("3 - Nostalgic Japanese Soy Chicken Ramen")
    cy.get(`#txtQuantity`).clear("")
    cy.get(`#txtQuantity`).type("3")
    cy.get(`#txtDiscount`).clear("")
    cy.get(`#txtDiscount`).type("20")
    cy.get(`#btnAddToList`).click()
    cy.get('body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(2) > td:nth-child(6)')
    .click.toString(`13.80`)
    cy.get("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(3) > td:nth-child(6)")
    .click.toString(`32.60`)
    cy.get("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(4) > td:nth-child(6)")
    .click.toString(`31.00`)
    cy.viewport(1350, 700)
    cy.screenshot()
   // cy.get(`#logoutForm`).click()
  })
})