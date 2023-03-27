import { test, expect } from '@playwright/test';

test('TC01', async ({ page }) => {

  await page.goto('http://192.168.3.111:8042/User/AdminLogin');

  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('Tananya');

  await page.getByLabel('Username').press('Tab');

  await page.getByLabel('Password').fill('Tanya123');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Product');

  await page.getByRole('link', { name: 'Add New Item' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Item');

  await page.locator('input[name="ItemCode"]').click();

  await page.locator('input[name="ItemCode"]').fill('aaa');

  await page.locator('input[name="ItemCode"]').press('Tab');

  await page.locator('input[name="ItemName"]').fill('aaa');

  await page.locator('input[name="ItemName"]').press('Tab');

  await page.locator('input[name="Description"]').fill('aaa');

  await page.locator('input[name="Description"]').press('Tab');

  await page.locator('input[name="ItemPrice"]').fill('20');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('link', { name: 'Item List' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Product');

});


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
  });


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
    /*   await expect(page).toHaveURL('http://192.168.3.111:8042/Product/DeleteItem/59a99be0-7bca-4b57-aff5-77de70ae3bae'); */
    
    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(page).toHaveURL('http://192.168.3.111:8042/Product');
    
    });


    test('TC04', async ({ page }) => {

        await page.goto("http://192.168.3.111:8042");
        await page.getByRole('link', { name: 'Customer Login' }).click();
        await expect(page).toHaveURL('http://192.168.3.111:8042/User/CustomerLogin');
      
        await page.getByRole('link', { name: 'Customer Register' }).click();
        await expect(page).toHaveURL('http://192.168.3.111:8042/User/AddorEdit');
      
        await page.getByLabel('FirstName').click();
      
        await page.getByLabel('FirstName').fill('TananyaAAA');
      
        await page.getByLabel('FirstName').press('Tab');
      
        await page.getByLabel('LastName').fill('Asava');
      
        await page.getByLabel('LastName').press('Tab');
      
        await page.getByLabel('Username').fill('TananyaPW');
      
        await page.getByLabel('Username').press('Tab');
      
        await page.getByRole('textbox', { name: 'Password' }).fill('Tanya123');
      
        await page.getByRole('textbox', { name: 'Password' }).press('Tab');
      
        await page.getByLabel('Confirm Password').fill('Tanya1234');
      
        await page.getByLabel('Confirm Password').press('Tab');
      
        await page.getByLabel('Email').fill('por.asa@hotmail.com');
      
        await page.getByRole('button', { name: 'Submit' }).click();
      
      });

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
      /*   await page.locator('div:has-text("Registration successful.")').nth(3).click(); */
      
      });


      test('TC06', async ({ page }) => {

        await page.goto('http://192.168.3.111:8042/User/CustomerLogin');
      
        await page.getByLabel('Username').click();
      
        await page.getByLabel('Username').fill('TananyaPW');
      
        await page.getByLabel('Username').press('Tab');
      
        await page.getByLabel('Password').fill('Tanya');
      
        await page.goto('http://192.168.3.111:8042/User/Autherize');
      
      /*   await page.getByText('Customer Login Username Password Wrong Username or Password Login Customer Regis').click(); */
      
      });
      
      
      test('TC07', async ({ page }) => {

        await page.goto('http://192.168.3.111:8042/User/CustomerLogin');
      
        await page.getByLabel('Username').click();
      
        await page.getByLabel('Username').fill('TananyaPW');
      
        await page.getByLabel('Username').press('Tab');
      
        await page.getByLabel('Password').fill('Tanya123');
        await page.locator('input[value="Login"]').click()
      /* มีปัญหากับปุ่ม */
      /*   await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('http://192.168.3.111:8042/'); */
      
        await page.getByRole('heading', { name: 'Pet Product List' }).click();
      
      });


      test('TC08', async ({ page }) => {

        await page.goto('http://192.168.3.111:8042/User/CustomerLogin');
      
        await page.getByLabel('Username').click();
      
        await page.getByLabel('Username').fill('TananyaPW');
      
        await page.getByLabel('Username').press('Tab');
      
        await page.getByLabel('Password').fill('Tanya123');
        await page.locator('input[value="Login"]').click()
      /*   await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('http://192.168.3.111:8042/'); */
      
        await page.locator('#btnAddToCart').first().click();
      
      });


      test('TC09', async ({ page }) => {

        await page.goto('http://192.168.3.111:8042/User/CustomerLogin');
      
        await page.getByLabel('Username').click();
      
        await page.getByLabel('Username').fill('TananyaPW');
      
        await page.getByLabel('Username').press('Tab');
      
        await page.getByLabel('Password').fill('Tanya123');
        await page.locator('input[value="Login"]').click()
      /*   await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('http://192.168.3.111:8042/'); */
      
        await page.locator('#btnAddToCart').first().click();
      
        await page.locator('div:nth-child(3) > div:nth-child(5) > #btnAddToCart').click();
      
        await page.locator('div:nth-child(4) > div:nth-child(5) > #btnAddToCart').click();
      
        await page.locator('div:nth-child(4) > div:nth-child(5) > #btnAddToCart').click();
      
        await page.locator('div:nth-child(5) > div:nth-child(5) > #btnAddToCart').click();
      
        await page.getByText('Cart(4) Log Out } >').click();
      
      });




test('TC10', async ({ page }) => {

  await page.goto('http://192.168.3.111:8042/User/CustomerLogin');

  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('TananyaPW');

  await page.getByLabel('Username').press('Tab');

  await page.getByLabel('Password').fill('Tanya123');
  await page.locator('input[value="Login"]').click();
/*   await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/'); */

  await page.locator('#btnAddToCart').first().click();

  await page.locator('div:nth-child(3) > div:nth-child(5) > #btnAddToCart').click();

  await page.locator('div:nth-child(4) > div:nth-child(5) > #btnAddToCart').click();

  await page.locator('div:nth-child(4) > div:nth-child(5) > #btnAddToCart').click();

  await page.locator('div:nth-child(5) > div:nth-child(5)').click();

  await page.getByRole('link', { name: 'Cart(4)' }).click();
  await expect(page).toHaveURL('http://192.168.3.111:8042/Shopping/ShoppingCart?Length=8');

/*   await page.getByRole('heading', { name: '292.00 NZD' }).click(); */

});


test('TC11', async ({ page }) => {

    await page.goto('http://192.168.3.111:8042/User/CustomerLogin');
  
    await page.getByLabel('Username').click();
  
    await page.getByLabel('Username').fill('Tanya123');
  
    await page.getByLabel('Username').press('Tab');
  
    await page.getByLabel('Password').fill('Tanya1234');
    await page.locator('input[value="Login"]').click()
  /*   await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('http://192.168.3.111:8042/'); */
  
    await page.getByRole('heading', { name: 'Pet Product List' }).click();
    await page.locator('#logoutForm > a').click();
  /*   await page.getByRole('link', { name: 'Log Out' }).click();
    await expect(page).toHaveURL('http://192.168.3.111:8042/User/CustomerLogin'); */
  
    await page.getByRole('heading', { name: 'Customer Login' }).click();
  
  });


  test('TC12', async ({ page }) => {
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
    await expect(page).toHaveURL('http://192.168.3.111:8042/User/DeleteCustomer/3047'); */
    await page.locator('.btn').click() 
  /*   await page.getByText('CustomerId 3047 FirstName TananyaPW LastName Asava Username TananyaPW Email por.').click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(page).toHaveURL('http://192.168.3.111:8042/User/CustomerList'); */
  
    await page.locator('form:has-text("Log Out")').click();
  
    await page.getByRole('link', { name: 'Log Out' }).click();
    await expect(page).toHaveURL('http://192.168.3.111:8042/User/AdminLogin');
  
  });

