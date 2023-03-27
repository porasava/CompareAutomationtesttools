const {test, expect} = require('@playwright/test');
test('TC02AdminAddProductSuccess',async ({page})=>{
  await page.goto("http://192.168.3.111:8042/Product");
  await page.title()
  console.log(await page.title());
  await expect(page).toHaveTitle("_AdminLayout - Admin Online Pet Store");
  await page.locator('#AdminUsername').type('Tananya')
  await page.locator('#AdminPassword').type("Tanya123")
  await page.locator('[type="submit"]').click()
  await page.locator('.navbar-collapse > :nth-child(1) > :nth-child(1) > a').click()
  await page.locator('#CategoryId').selectOption('        14')
  await page.locator('#ItemCode').type('Adidas 001')
  await page.locator('#ItemName').type('Adidas')
  await page.locator('#Description').type('Adidas 001')
  await page.locator('#ItemPrice').type('20')
  await page.setInputFiles('#ImagePath',__dirname+'\\adidas_shoe.jfif');
  await page.locator('#btnSave').click()
  page.on('dialog', async (dialog) => {
      expect(dialog.message()).toEqual('Item is added Successfully.')
      await dialog.accept()
    })
});