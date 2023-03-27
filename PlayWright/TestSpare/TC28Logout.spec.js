const {test, expect} = require('@playwright/test');
test('TC28Logout',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`#logoutForm`).click()
    page.locator('div[class="container body-content"] h2')
    .click.toString(`Admin Login`)
});