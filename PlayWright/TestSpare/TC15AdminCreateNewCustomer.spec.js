const {test, expect} = require('@playwright/test');
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