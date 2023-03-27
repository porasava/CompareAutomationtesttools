import { test, expect } from '@playwright/test';

/* test('TC12', async ({ page }) => {
  await page.goto('http://192.168.3.111:8042/User/AdminLogin');
  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('Tananya');

  await page.getByLabel('Username').press('Tab');

  await page.getByLabel('Password').fill('Tanya123');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Product');

  await page.getByRole('link', { name: 'Customer List List' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/User/CustomerList');

  await page.getByRole('cell', { name: 'TananyaPW' }).first().click();
  await page.locator(':nth-child(3) > :nth-child(6) > a').click()
/*   await page.getByRole('row', { name: '3047 TananyaPW Asava TananyaPW por.asa@hotmail.com Delete' }).getByRole('link', { name: 'Delete' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/User/DeleteCustomer/3047'); /
  await page.locator('.btn').click() 
/*   await page.getByText('CustomerId 3047 FirstName TananyaPW LastName Asava Username TananyaPW Email por.').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/User/CustomerList'); /

  await page.locator('form:has-text("Log Out")').click();

  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/User/AdminLogin');

}); */