/* import { test, expect } from '@playwright/test';

test('TC08', async ({ page }) => {

  await page.goto('http://192.168.3.111:8042/User/CustomerLogin');

  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('TananyaPW');

  await page.getByLabel('Username').press('Tab');

  await page.getByLabel('Password').fill('Tanya123');
  await page.locator('input[value="Login"]').click()
/*   await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/'); /

  await page.locator('#btnAddToCart').first().click();

}); */