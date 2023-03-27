/* call function from node module */
const {Builder, By, Key, unit, wait}=require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const path = require('path');
/* Mocha */
/* const {assert} = 'mocha-webdriver'; */


let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();
// it block


             driver.get("http://192.168.3.111:8042/User/AdminLogin");
             driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya");
             driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
            driver.findElement(By.css(`input[value="Login"]`)).click();