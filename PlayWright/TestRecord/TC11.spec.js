import { test, expect } from '@playwright/test';

/* test('TC11', async ({ page }) => {

  await page.goto('http://192.168.3.111:8042/User/CustomerLogin');

  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('Tanya123');

  await page.getByLabel('Username').press('Tab');

  await page.getByLabel('Password').fill('Tanya1234');
  await page.locator('input[value="Login"]').click()
/*   await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/'); /

  await page.getByRole('heading', { name: 'Pet Product List' }).click();
  await page.locator('#logoutForm > a').click();
/*   await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/User/CustomerLogin'); /

  await page.getByRole('heading', { name: 'Customer Login' }).click();

}); */