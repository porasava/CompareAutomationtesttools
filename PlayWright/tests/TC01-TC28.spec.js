const {test, expect} = require('@playwright/test');

test('TC01AdminAddProductFailed',async ({page})=>{
    await page.goto("http://192.168.3.111:8042/Product");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("_AdminLayout - Admin Online Pet Store");
    await page.locator('#AdminUsername').type('Tananya')
    await page.locator('#AdminPassword').type("Tanya123")
    await page.locator('[type="submit"]').click()
    await page.locator('.navbar-collapse > :nth-child(1) > :nth-child(1) > a').click()
    await page.locator('#CategoryId').selectOption('        14')
    await page.locator('#ItemCode').type('Item Code')
    await page.locator('#ItemName').type('Item Name')
    await page.locator('#Description').type('Description')
    await page.locator('#ItemPrice').type('20')
    await page.locator('#btnSave').click()
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('There is some problem to add Item.')
        await dialog.accept()
      })
});



test('TC02AdminAddProductSuccess',async ({page})=>{
    await page.goto("http://192.168.3.111:8042/Product");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("_AdminLayout - Admin Online Pet Store");
    await page.locator('#AdminUsername').type('Tananya')
    await page.locator('#AdminPassword').type("Tanya123")
    await page.locator('[type="submit"]').click()
    await page.locator('.navbar-collapse > :nth-child(1) > :nth-child(1) > a').click()
    await page.locator('#CategoryId').selectOption('        14')
    await page.locator('#ItemCode').type('Adidas 001')
    await page.locator('#ItemName').type('Adidas')
    await page.locator('#Description').type('Adidas 001')
    await page.locator('#ItemPrice').type('20')
    await page.setInputFiles('#ImagePath',__dirname+'\\adidas_shoe.jfif');
    await page.locator('#btnSave').click()
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Item is added Successfully.')
        await dialog.accept()
      })
});



test('TC03AdminDeleteProductSuccess',async ({page})=>{
    await page.goto("http://192.168.3.111:8042/Product");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("_AdminLayout - Admin Online Pet Store");
    await page.locator('#AdminUsername').type('Tananya')
    await page.locator('#AdminPassword').type("Tanya123")
    await page.locator('[type="submit"]').click()
    await page.locator(':nth-child(2) > :nth-child(6) > a').click()
    await page.locator('.btn').click()
    await page.locator("tbody tr:nth-child(2) td:nth-child(3)").check.toString("Bravecto")
});



test('TC04CutomerRegisterFailed',async ({page})=>{
    await page.goto("http://192.168.3.111:8042");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("Index - Online Pet Store");
    await page.locator('#loginlink').click()
    await page.locator('td > #loginlink').click()
    await page.locator('#FirstName').type('TananyaTest')
    await page.locator('#LastName').type('AsaTest')
    await page.locator('#UserName').type('TananyaTest')
    await page.locator('#Password').type('1234')
    await page.locator('#ConfirmPassword').type('12345')
    await page.locator('#Email').type('AsaTest@hotmail.com')
    await page.locator('[type="submit"]').click()
    await page.locator('.btn').click()    
    await page.locator('#ConfirmPassword-error').check.toString(`'Confirm Password' and 'Password' do not match.`)
});




test('TC05CutomerRegisterSuccess',async ({page})=>{
    await page.goto("http://192.168.3.111:8042");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("Index - Online Pet Store");
    await page.locator('#loginlink').click()
    await page.locator('td > #loginlink').click()
    await page.locator('#FirstName').type('TananyaTest')
    await page.locator('#LastName').type('AsaTest')
    await page.locator('#UserName').type('TananyaTest')
    await page.locator('#Password').type('1234')
    await page.locator('#ConfirmPassword').type('1234')
    await page.locator('#Email').type('AsaTest@hotmail.com')
    await page.locator('[type="submit"]').click()
    await page.locator('.btn').click()    
    await page.locator('.label-success').check.toString(`Registration successful.`)
});





test('TC06CutomerLoginFailed',async ({page})=>{
    await page.goto("http://192.168.3.111:8042");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("Index - Online Pet Store");
    await page.locator('#loginlink').click()
    await page.locator('#UserName').type('TananyaTest')
    await page.locator('#Password').type('12345')
    await page.locator('input[value="Login"]').click()
    await page.locator('.field-validation-error').check.toString(`Wrong Username or Password`)
});




test('TC07CutomerLoginSuccess',async ({page})=>{
    await page.goto("http://192.168.3.111:8042");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("Index - Online Pet Store");
    await page.locator('#loginlink').click()
    await page.locator('#UserName').type('TananyaTest')
    await page.locator('#Password').type('1234')
    await page.locator('input[value="Login"]').click()
    await page.locator(".text-center").click.toString("Pet Product List")
});




test('TC08CutomerAddProductToCartSuccess',async ({page})=>{
    await page.goto("http://192.168.3.111:8042");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("Index - Online Pet Store");
    await page.locator('#loginlink').click()
    await page.locator('#UserName').type('TananyaTest')
    await page.locator('#Password').type('1234')
    await page.locator('input[value="Login"]').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator("#cartItem").click.toString("Cart(1)")
});



test('TC9CutomerAddProductsToCartSuccess',async ({page})=>{
    await page.goto("http://192.168.3.111:8042");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("Index - Online Pet Store");
    await page.locator('#loginlink').click()
    await page.locator('#UserName').type('TananyaTest')
    await page.locator('#Password').type('1234')
    await page.locator('input[value="Login"]').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator("#cartItem").click.toString("Cart(4)")
    });



    test('TC10CheckCartPage',async ({page})=>{
        await page.goto("http://192.168.3.111:8042");
        await page.title()
        console.log(await page.title());
        await expect(page).toHaveTitle("Index - Online Pet Store");
        await page.locator('#loginlink').click()
        await page.locator('#UserName').type('TananyaTest')
        await page.locator('#Password').type('1234')
        await page.locator('input[value="Login"]').click()
        await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
        await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)').click()
        await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
        await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
        await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(5) > input:nth-child(1)').click()
        await page.locator('#cartItem').click()
        await page.locator('[style="text-align: center"] > h3').check.toString('112.00 NZD')
        });




        test('TC11CutomerLogoutSuccess',async ({page})=>{
            await page.goto("http://192.168.3.111:8042");
            await page.title()
            console.log(await page.title());
            await expect(page).toHaveTitle("Index - Online Pet Store");
            await page.locator('#loginlink').click()
            await page.locator('#UserName').type('Tanya123')
            await page.locator('#Password').type('Tanya1234')
            await page.locator('input[value="Login"]').click()
            await page.locator('#logoutForm > a').click()
            await page.locator("#cartItem").click.toString("Customer Login")
            });




            test('TC12AdminDeleteCustomerSuccess',async ({page})=>{
                await page.goto("http://192.168.3.111:8042/Product");
                await page.title()
                console.log(await page.title());
                await expect(page).toHaveTitle("_AdminLayout - Admin Online Pet Store");
                await page.locator('#AdminUsername').type('Tananya')
                await page.locator('#AdminPassword').type("Tanya123")
                await page.locator('[type="submit"]').click()
                await page.locator(':nth-child(3) > a').click()
                await page.locator(':nth-child(3) > :nth-child(6) > a').click()
                await page.locator('.btn').click() 
                await page.locator('div[class="container body-content"] h2').click.toString("Customer List")
            });



















test('TC13AdminLoginSuccess',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator('body > div:nth-child(2) > fieldset:nth-child(4) > legend:nth-child(1)').click.toString("Restaurant")
    await page.locator(`#logoutForm`).click()
});

test('TC14AdminAddNewMenu',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator('a[href="/Order/ItemIndex"]').click()
    await page.locator('a[href="/Order/AddItem"]').click()
    await page.locator('#ItemName').type('13 - Green Tea')
    await page.locator(`#ItemPrice`).type("5.00")
    await page.locator(`input[value="Create"]`).click()
    await page.locator(`div[class="container body-content"] div a`).click()
    await page.locator('body > div:nth-child(2) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)')
    .click.toString(`13 - Green Tea`)
    await page.locator(`#logoutForm`).click()
});



test('TC15AdminCreateNewCustomer',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`a[href="/Order/CustomerIndex"]`).click()
    await page.locator(`a[href="/User/AddorEdit"]`).click()
    await page.locator(`#CustomerName`).type("Customer Z")
    await page.locator(`input[value="Create"]`).click()
    await page.locator(`div[class="container body-content"] div a`).click()
    await page.locator('tbody tr:nth-child(2) td:nth-child(1)')
    .click.toString(`Customer Z`)
    await page.locator(`#logoutForm`).click()
});



test('TC16AdminAddOrder',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
       await page.locator('td:nth-child(6)')
    .click.toString(`17.80`)
    await page.locator(`#logoutForm`).click()
});



test('TC17AdminAdd2OrdersAndCheckout',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    page.locator('td:nth-child(6)').click.toString(`17.80`)
    await page.locator(`#logoutForm`).click()
});



test('TC18AdminAddOrderDiscount',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtDiscount').type("4")
    await page.locator(`#btnAddToList`).click()
    page.locator('td:nth-child(6)').click.toString(`13.80`)
    await page.locator(`#logoutForm`).click()
});




test('TC19AdminAdd2OrdersDiscount',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator('#txtDiscount').fill("")
    await page.locator('#txtDiscount').type("4")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator('#txtDiscount').fill("")
    await page.locator('#txtDiscount').type("5")
    await page.locator(`#btnAddToList`).click()
    page.locator('td:nth-child(6)').click.toString(`13.80`)
    page.locator("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(3) > td:nth-child(6)")
    .click.toString(`32.60`)
    await page.locator(`#logoutForm`).click()
});




test('TC20AdminAdd3OrdersWith3Quantities',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator('#txtDiscount').fill("")
    await page.locator('#txtDiscount').type("4")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator('#txtDiscount').fill("")
    await page.locator('#txtDiscount').type("5")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("3 - Nostalgic Japanese Soy Chicken Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator('#txtDiscount').fill("")
    await page.locator('#txtDiscount').type("20")
    await page.locator(`#btnAddToList`).click()
    page.locator('td:nth-child(6)').click.toString(`13.80`)
    page.locator("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(3) > td:nth-child(6)")
    .click.toString(`32.60`)
    page.locator("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(4) > td:nth-child(6)")
    .click.toString(`31.00`)
    await page.locator(`#logoutForm`).click()
});




test('TC21AdminDidnotReturnMoneyToCustomer',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("3 - Nostalgic Japanese Soy Chicken Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`#btnCheckOut`).click()
    await page.locator(`#txtPaymentAmount`).type("2000.00")
    await page.locator(`#btnPayment`).isDisabled(true)
    await page.locator(`#btnClose`).click()
    await page.locator(`#logoutForm`).click()
});




test('TC22AdminReturnMoneyLessThanChangeAmount',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("3 - Nostalgic Japanese Soy Chicken Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`#btnCheckOut`).click()
    await page.locator(`#txtPaymentAmount`).type("2000.00")
    await page.locator(`#txtReturnTotal`).type("19.00")
    await page.locator(`#btnPayment`).isDisabled(true)
    await page.locator(`#btnClose`).click()
    await page.locator(`#logoutForm`).click()
});




test('TC23AdminReturnMoneyMoreThanChangeAmount',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("3 - Nostalgic Japanese Soy Chicken Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`#btnCheckOut`).click()
    await page.locator(`#txtPaymentAmount`).type("2000")
    await page.locator(`#txtReturnTotal`).type("4000")
    await page.locator(`#btnPayment`).isDisabled(true)
    await page.locator(`#btnClose`).click()
    await page.locator(`#logoutForm`).click()
});




test('TC24AdminClickonPaymentbuttonSuccess',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
   // await page.waitForTimeout(500)
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("1")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("3 - Nostalgic Japanese Soy Chicken Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`#btnCheckOut`).click()
    await page.locator('#txtPaymentAmount').fill("")
    await page.locator(`#txtPaymentAmount`).type("89.40")
    await page.locator(`#txtReturnTotal`).type("0")
    await page.locator(`#btnPayment`).click()
    await page.locator(`a[href="/Order/OrderIndex"]`).click()
    await page.locator(`#logoutForm`).click()
});




test('TC25AfterPaymentSuccessClickonOrderlistPage',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`select[name="Customer"]`).type("Customer Z")
    await page.locator(`select[name="Item"]`).type("1 - Signature Tonkotsu Chashu Ramen")
    await page.waitForTimeout(500)
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("1")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("2 - Oh my HOT!! Tonkotsu Chashu Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
    await page.locator(`select[name="Item"]`).type("3 - Nostalgic Japanese Soy Chicken Ramen")
    await page.locator('#txtQuantity').fill("")
    await page.locator('#txtQuantity').type("2")
    await page.locator(`#btnAddToList`).click()
   // await page.pause(500)
    await page.locator(`#btnCheckOut`).click()
    await page.locator(`#txtPaymentAmount`).fill("")
    await page.locator(`#txtPaymentAmount`).type("89.40")
    await page.locator(`#txtReturnTotal`).type("0")
    await page.locator(`#btnPayment`).click()
    await page.locator(`a[href="/Order/OrderIndex"]`).click()
    page.locator('tbody tr:nth-child(2) td:nth-child(5)')
    .click.toString(`89.40`)
    await page.locator(`#logoutForm`).click()
});


test('TC26AdminDeleteCustomer',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`a[href="/Order/CustomerIndex"]`).click()
    await page.locator(':nth-child(2) > :nth-child(3) > a').click()
    await page.locator(`input[value="Delete"]`).click()
    page.locator("tbody tr:nth-child(2) td:nth-child(1)")
    .click.toString(`Customer E`)
    await page.locator(`#logoutForm`).click()
});



test('TC27AdminDeleteMenu',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`a[href="/Order/ItemIndex"]`).click()
    await page.locator(':nth-child(14) > :nth-child(4) > a').click()
    await page.locator(`input[value="Delete"]`).click()
    page.locator(':nth-child(13) > :nth-child(2)')
    .click.toString(`12 - Coke Zero Sugar`)
    await page.locator(`#logoutForm`).click()
});


test('TC28Logout',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`#logoutForm`).click()
    page.locator('div[class="container body-content"] h2')
    .click.toString(`Admin Login`)
});









