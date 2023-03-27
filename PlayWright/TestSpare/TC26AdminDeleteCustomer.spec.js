const {test, expect} = require('@playwright/test');
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