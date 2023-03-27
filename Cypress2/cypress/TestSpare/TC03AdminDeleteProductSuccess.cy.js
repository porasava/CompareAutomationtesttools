describe('TC3AdminDeleteProductSuccess', () => {
  it('TC3 Admin Delete Product Success', () => {
    cy.visit('http://192.168.3.111:8042/User/AdminLogin')
    cy.get('#AdminUsername').type('Tananya')
    cy.get('#AdminPassword').type("Tanya123")
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(2) > :nth-child(6) > a').click()
    cy.get('.btn').click()
    cy.get(`a[href="/Product"]`).click()
    cy.get("tbody tr:nth-child(2) td:nth-child(3)").check.toString("Bravecto")
    cy.screenshot()
  })
})