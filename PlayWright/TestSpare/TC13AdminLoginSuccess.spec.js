const {test, expect} = require('@playwright/test');
test('TC13AdminLoginSuccess',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator('body > div:nth-child(2) > fieldset:nth-child(4) > legend:nth-child(1)').click.toString("Restaurant")
    await page.locator(`#logoutForm`).click()
});