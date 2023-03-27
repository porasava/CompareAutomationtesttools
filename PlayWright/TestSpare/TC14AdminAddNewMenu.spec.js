const {test, expect} = require('@playwright/test');
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