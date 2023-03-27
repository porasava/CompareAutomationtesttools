import { test, expect } from '@playwright/test';

/* test('TC09', async ({ page }) => {

  await page.goto('http://192.168.3.111:8042/User/CustomerLogin');

  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('TananyaPW');

  await page.getByLabel('Username').press('Tab');

  await page.getByLabel('Password').fill('Tanya123');
  await page.locator('input[value="Login"]').click()
/*   await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/'); /

  await page.locator('#btnAddToCart').first().click();

  await page.locator('div:nth-child(3) > div:nth-child(5) > #btnAddToCart').click();

  await page.locator('div:nth-child(4) > div:nth-child(5) > #btnAddToCart').click();

  await page.locator('div:nth-child(4) > div:nth-child(5) > #btnAddToCart').click();

  await page.locator('div:nth-child(5) > div:nth-child(5) > #btnAddToCart').click();

  await page.getByText('Cart(4) Log Out } >').click();

}); */