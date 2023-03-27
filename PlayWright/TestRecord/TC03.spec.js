/* import { test, expect } from '@playwright/test';

test('TC03', async ({ page }) => {
await page.goto("http://192.168.3.111:8042/Product");
await page.getByLabel('Username').click();
await page.getByLabel('Username').fill('tananya');
await page.getByLabel('Username').press('Tab');
await page.getByLabel('Password').fill('Tanya123');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL('http://192.168.3.111:8042/Product');
await page.getByRole('link', { name: 'Item List' }).click();
await expect(page).toHaveURL('http://192.168.3.111:8042/Product');
await page.locator('tbody tr:nth-child(2) td:nth-child(2)').check.toString(`
aaa
`)
await page.locator(':nth-child(2) > :nth-child(6) > a').click()
/*   await page.getByRole('row', { name: '7 aaa aaa aaa 200.00 Delete' }).getByRole('link', { name: 'Delete' }).click(); */
/*   await expect(page).toHaveURL('http://192.168.3.111:8042/Product/DeleteItem/59a99be0-7bca-4b57-aff5-77de70ae3bae'); /

await page.getByRole('button', { name: 'Delete' }).click();
await expect(page).toHaveURL('http://192.168.3.111:8042/Product');

}); */