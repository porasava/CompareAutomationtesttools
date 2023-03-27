/* import { test, expect } from '@playwright/test';

test('TC05', async ({ page }) => {

  await page.goto("http://192.168.3.111:8042");

  await page.locator('#loginlink').click()
  await page.locator('td > #loginlink').click()

  await page.getByLabel('FirstName').click();

  await page.getByLabel('FirstName').fill('TananyaPW');

  await page.getByLabel('FirstName').press('Tab');

  await page.getByLabel('LastName').fill('Asava');

  await page.getByLabel('LastName').press('Tab');

  await page.getByLabel('Username').fill('TananyaPW');

  await page.getByLabel('Username').press('Tab');

  await page.getByRole('textbox', { name: 'Password' }).fill('Tanya123');

  await page.getByRole('textbox', { name: 'Password' }).press('Tab');

  await page.getByLabel('Confirm Password').fill('Tanya123');

  await page.getByLabel('Confirm Password').press('Tab');

  await page.getByLabel('Email').fill('por.asa@hotmail.com');

  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/User/AddorEdit');
  await page.locator('.label-success').check.toString(`Registration successful.`)
/*   await page.locator('div:has-text("Registration successful.")').nth(3).click(); /

}); */