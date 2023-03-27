const {test, expect} = require('@playwright/test');
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