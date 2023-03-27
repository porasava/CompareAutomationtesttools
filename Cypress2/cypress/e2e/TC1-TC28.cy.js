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
    //cy.get('#logoutForm > a').click()
  })
})



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
    //cy.get('#logoutForm > a').click()
  })
})



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
    //cy.get('#logoutForm > a').click()
  })
})




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
  })
})




describe('TC5CutomerRegisterSuccess', () => {
  it('TC5 Cutomer Register Success', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('td > #loginlink').click()
    cy.get('#FirstName').type('TananyaTest')
    cy.get('#LastName').type('AsaTest')
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('#ConfirmPassword').type('1234')
    cy.get('#Email').type('AsaTest@hotmail.com')
    cy.get('[type="submit"]').click()
    cy.get('.btn').click()    
    cy.get('.label-success').click.toString(`Registration successful.`)
    cy.viewport(1350, 700)
    cy.screenshot()
  })
})





describe('TC6CutomerLoginFailed', () => {
  it('TC6 Cutomer Login Failed', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('12345')
    cy.get('input[value="Login"]').click()
    cy.get('.field-validation-error').click.toString(`Wrong Username or Password`)
    cy.screenshot()
  })
})





describe('TC7CutomerLoginSuccess', () => {
  it('TC7 Cutomer Login Success', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('input[value="Login"]').click()
    cy.get(".text-center").click.toString("Pet Product List")
    cy.screenshot()
    //cy.get('#logoutForm > a').click()
  })
})





describe('TC8CutomerAddProductToCartSuccess', () => {
  it('TC8 Cutomer Add Product To Cart Success', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('input[value="Login"]').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
/*       cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click() */
    cy.get("#cartItem").click.toString("Cart(1)")
    cy.screenshot()
   // cy.get('#logoutForm > a').click()
  })
})





describe('TC9CutomerAddProductsToCartSuccess', () => {
  it('TC9 Cutomer Add Products To Cart Success', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('input[value="Login"]').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get("#cartItem").click.toString("Cart(4)")
    cy.screenshot()
    //cy.get('#logoutForm > a').click()
  })
})




describe('TC10CheckCartPage', () => {
  it('TC10 Check Cart Page', () => {
    cy.visit('http://192.168.3.111:8042')
    cy.get('#loginlink').click()
    cy.get('#UserName').type('TananyaTest')
    cy.get('#Password').type('1234')
    cy.get('input[value="Login"]').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    cy.get('#cartItem').click()
    cy.get('[style="text-align: center"] > h3').contains('111.00 NZD')
    cy.viewport(1350, 700)
    cy.screenshot()
   // cy.get('#logoutForm > a').click()
    })
  })





  describe('TC11CutomerLogoutSuccess', () => {
    it('TC11 Cutomer Logout Success', () => {
      cy.visit('http://192.168.3.111:8042')
      cy.get('#loginlink').click()
      cy.get('#UserName').type('TananyaTest')
      cy.get('#Password').type('1234')
      cy.get('input[value="Login"]').click()
      cy.get('#logoutForm > a').click()
      cy.get('div[class="container body-content"] h2').contains("Customer Login")
      cy.screenshot()
    })
})




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






describe('TC13AdminLoginSuccess', () => {
    it('TC13 Admin Login Success', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get('body > div:nth-child(2) > fieldset:nth-child(4) > legend:nth-child(1)').click.toString(`Restaurant`)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
    })
})


describe('TC14AdminAddNewMenu', () => {
    it('TC14 Admin Add New Menu', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`a[href="/Order/ItemIndex"]`).click()
      cy.get(`a[href="/Order/AddItem"]`).click()
      cy.get('#ItemName').type('13 - Green Tea')
      cy.get(`#ItemPrice`).clear("")
      cy.get(`#ItemPrice`).type("5.00")
      cy.get(`input[value="Create"]`).click()
      cy.get(`div[class="container body-content"] div a`).click()
      cy.get('body > div:nth-child(2) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)')
      .click.toString(`13 - Green Tea`)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
    })
})




describe('TC15AdminCreateNewCustomer', () => {
    it('TC15 Admin Create New Customer', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`a[href="/Order/CustomerIndex"]`).click()
      cy.get(`a[href="/User/AddorEdit"]`).click()
      cy.get(`#CustomerName`).type("Customer Z")
      cy.get(`input[value="Create"]`).click()
      cy.get(`div[class="container body-content"] div a`).click()
      cy.get('tbody tr:nth-child(2) td:nth-child(1)')
      .click.toString(`Customer Z`)
      cy.screenshot()
   //   cy.get(`#logoutForm`).click()
    })
})




describe('TC16AdminAddOrder', () => {
    it('TC16 Admin Add Order', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`select[name="Customer"]`).select("Customer Z")
      cy.get(`select[name="Item"]`).select("1 - Signature Tonkotsu Chashu Ramen")
      cy.get(`#txtQuantity`).clear("")
      cy.get('#txtQuantity').type('2')
      cy.get(`#btnAddToList`).click()
      cy.get('td:nth-child(6)')
      .click.toString(`17.80`)
      cy.viewport(1350, 700)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
    })
})




describe('TC17AdminAdd2OrdersAndCheckout', () => {
    it('TC17 Admin Add 2 Orders And Checkout', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`select[name="Customer"]`).select("Customer Z")
      cy.get(`select[name="Item"]`).select("1 - Signature Tonkotsu Chashu Ramen")
      cy.get(`#txtQuantity`).clear("")
      cy.get(`#txtQuantity`).type("1")
      cy.get(`#btnAddToList`).click()
      cy.get(`select[name="Item"]`).select("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
      cy.get(`#txtQuantity`).clear("")
      cy.get(`#txtQuantity`).type("1")
      cy.get(`#btnAddToList`).click()
      cy.get('td:nth-child(6)')
      .click.toString(`17.80`)
      cy.viewport(1350, 700)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
    })
})





describe('TC18AdminAddOrderDiscount', () => {
    it('TC18 Admin Add Order Discount', () => {
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
      cy.get('td:nth-child(6)')
      .click.toString(`13.80`)
      cy.viewport(1350, 700)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
    })
})





describe('TC19AdminAdd2OrdersDiscount', () => {
    it('TC19 Admin Add 2 Orders Discount', () => {
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
      cy.get('body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(2) > td:nth-child(6)')
      .click.toString(`13.80`)
      cy.get("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(3) > td:nth-child(6)")
      .click.toString(`32.60`)
      cy.viewport(1350, 700)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
    })
})




describe('TC20AdminAdd3OrdersWith3Quantities', () => {
    it('TC20 Admin Add 3 Orders With 3 Quantities', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
     // cy.get(`#Customer`).click()
      cy.get(`select[name="Customer"]`).select("Customer Z")
     // cy.get(`#Item`).click()
      cy.get(`select[name="Item"]`).select("1 - Signature Tonkotsu Chashu Ramen")
      cy.get(`#txtQuantity`).clear("")
      cy.get(`#txtQuantity`).type("1")
      cy.get(`#txtDiscount`).clear("")
      cy.get(`#txtDiscount`).type("4")
      cy.get(`#btnAddToList`).click()
    //  cy.get(`#Item`).click()
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
    //  cy.get(`#logoutForm`).click()
    })
})






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
    //  cy.get(`#logoutForm`).click()
    })
})





describe('TC22AdminReturnMoneyLessThanChangeAmount', () => {
    it('TC22 Admin Return Money Less Than Change Amount', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`select[name="Customer"]`).select("Customer Z")
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
      cy.get(`#txtReturnTotal`).clear("")
      cy.get(`#txtReturnTotal`).type("19.00")
      cy.get(`#btnPayment`).should('be.disabled')
      cy.viewport(1350, 700)
      cy.screenshot()
      cy.get(`#btnClose`).click()
   //   cy.get(`#logoutForm`).click()
    })
})




describe('TC23AdminReturnMoneyMoreThanChangeAmount', () => {
    it('TC23 Admin Return Money More Than Change Amount', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
     // cy.get(`#Customer`).click()
      cy.get(`select[name="Customer"]`).select("Customer C")
     // cy.get(`#Item`).click()
      cy.get(`select[name="Item"]`).select("1 - Signature Tonkotsu Chashu Ramen")
      cy.get(`#txtQuantity`).clear("")
      cy.get(`#txtQuantity`).type("1")
      cy.get(`#txtDiscount`).type("0")
      cy.get(`#btnAddToList`).click()
    //  cy.get(`#Item`).click()
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
      cy.get(`#txtReturnTotal`).clear("")
      cy.get(`#txtReturnTotal`).type("4000.00")
      cy.get(`#btnPayment`).should('be.disabled')
      cy.viewport(1350, 700)
      cy.get('#txtBalance')
      .click.toString(`-1893.60`)
      cy.screenshot()
      cy.get(`#btnClose`).click()
    //  cy.get(`#logoutForm`).click()
    })
})





describe('TC24AdminClickonPaymentbuttonSuccess', () => {
    it('TC24 Admin Click on Payment button Success', () => {
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
      .click.toString(`106.40`)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
   
    })
})





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
     // cy.get(`#btnPayment`).should('be.enabled')
      cy.get(`#btnPayment`).click()
      cy.get(`a[href="/Order/OrderIndex"]`).click()
      cy.viewport(1350, 700)
      cy.get('tbody tr:nth-child(2) td:nth-child(5)')
      .click.toString(`123.40`)
      cy.screenshot()
     // cy.get(`#logoutForm`).click()
    })
})




describe('TC26AdminDeleteCustomer', () => {
    it('TC26 Admin Delete Customer', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`a[href="/Order/CustomerIndex"]`).click()
      cy.get(':nth-child(2) > :nth-child(3) > a').click()
      cy.get(`input[value="Delete"]`).click()
      cy.get("tbody tr:nth-child(2) td:nth-child(1)")
      .click.toString(`Customer E`)
      cy.viewport(1350, 700)
      cy.screenshot()
    //  cy.get(`#logoutForm`).click()
    })
})





describe('TC27AdminDeleteMenu', () => {
    it('TC27 Admin Delete Menu', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`a[href="/Order/ItemIndex"]`).click()
      cy.get(':nth-child(14) > :nth-child(4) > a').click()
      cy.get(`input[value="Delete"]`).click()
      cy.get(':nth-child(13) > :nth-child(2)')
      .click.toString(`12 - Coke Zero Sugar`)
      cy.viewport(1350, 700)
      cy.screenshot()
   //   cy.get(`#logoutForm`).click()
    })
})





describe('TC28Logout', () => {
    it('TC28 Logout', () => {
      cy.visit('http://localhost:8044/User/AdminLogin')
      cy.get('#AdminUsername').type('Tananya1')
      cy.get('#AdminPassword').type('Tanya123')
      cy.get(`input[value="Login"]`).click()
      cy.get(`#logoutForm`).click()
      cy.get(`div[class="container body-content"] h2`)
      .click.toString(`Admin Login`)
      cy.viewport(1350, 700)
      cy.screenshot()
    })
})







