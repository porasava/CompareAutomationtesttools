const {test, expect} = require('@playwright/test');
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