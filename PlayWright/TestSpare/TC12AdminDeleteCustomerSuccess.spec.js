const {test, expect} = require('@playwright/test');
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