const {test, expect} = require('@playwright/test');
test('TC10CheckCartPage',async ({page})=>{
    await page.goto("http://192.168.3.111:8042");
    await page.title()
    console.log(await page.title());
    await expect(page).toHaveTitle("Index - Online Pet Store");
    await page.locator('#loginlink').click()
    await page.locator('#UserName').type('TananyaTest')
    await page.locator('#Password').type('1234')
    await page.locator('input[value="Login"]').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(5) > input:nth-child(1)').click()
    await page.locator('#cartItem').click()
    await page.locator('[style="text-align: center"] > h3').check.toString('112.00 NZD')
    });
