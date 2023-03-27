const {test, expect} = require('@playwright/test');
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