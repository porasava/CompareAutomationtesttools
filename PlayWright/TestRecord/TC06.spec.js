/* import { test, expect } from '@playwright/test';

test('TC06', async ({ page }) => {

  await page.goto('http://192.168.3.111:8042/User/CustomerLogin');

  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('TananyaPW');

  await page.getByLabel('Username').press('Tab');

  await page.getByLabel('Password').fill('Tanya');

  await page.goto('http://192.168.3.111:8042/User/Autherize');

/*   await page.getByText('Customer Login Username Password Wrong Username or Password Login Customer Regis').click(); /

}); */