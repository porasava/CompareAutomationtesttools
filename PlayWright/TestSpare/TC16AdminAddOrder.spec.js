const {test, expect} = require('@playwright/test');
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