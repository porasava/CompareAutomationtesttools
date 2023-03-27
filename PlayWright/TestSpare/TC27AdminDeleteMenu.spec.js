const {test, expect} = require('@playwright/test');
test('TC27AdminDeleteMenu',async ({page})=>{
    await page.goto("http://localhost:8044/User/AdminLogin");
    await page.locator('#AdminUsername').type('Tananya1')
    await page.locator('#AdminPassword').type('Tanya123')
    await page.locator('input[value="Login"]').click()
    await page.locator(`a[href="/Order/ItemIndex"]`).click()
    await page.locator(':nth-child(14) > :nth-child(4) > a').click()
    await page.locator(`input[value="Delete"]`).click()
    page.locator(':nth-child(13) > :nth-child(2)')
    .click.toString(`12 - Coke Zero Sugar`)
    await page.locator(`#logoutForm`).click()
});