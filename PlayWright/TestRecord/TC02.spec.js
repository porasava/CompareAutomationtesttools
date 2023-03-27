/* import { test, expect } from '@playwright/test';
test('TC02', async ({ page }) => {
  await page.goto("http://192.168.3.111:8042/Product");
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tananya');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Tanya123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Product');
  await page.getByRole('link', { name: 'Add New Item' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Item');
  await page.locator('input[name="ItemCode"]').click();
  await page.locator('input[name="ItemCode"]').fill('aaa');
  await page.locator('input[name="ItemName"]').click();
  await page.locator('input[name="ItemName"]').fill('aaa');
  await page.locator('input[name="Description"]').click();
  await page.locator('input[name="Description"]').fill('aaa');
  await page.getByText('Item Price:').click();
  await page.locator('input[name="ItemPrice"]').fill('020');
  await page.locator('input[name="ItemPrice"]').press('ArrowLeft');
  await page.locator('input[name="ItemPrice"]').press('ArrowLeft');
  await page.locator('input[name="ItemPrice"]').fill('20');
  await page.setInputFiles('#ImagePath',__dirname+'\\adidas_shoe.jfif');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Item List' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Product');
}); */