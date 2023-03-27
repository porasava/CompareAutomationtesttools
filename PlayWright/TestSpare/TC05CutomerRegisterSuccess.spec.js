const {test, expect} = require('@playwright/test');
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
