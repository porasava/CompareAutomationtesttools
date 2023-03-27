/* call function from node module */
const {Builder, By, Key, unit, wait}=require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const path = require('path');
/* Mocha */
/* const {assert} = 'mocha-webdriver'; */
/* const sharp = require('sharp'); */
const assert = require("assert");
const { isTypedArray } = require('util/types');
var addContext= require("mochawesome/addContext")

/* let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build(); */

    let driver = new Builder().forBrowser("firefox").build();

// discribe block
describe ("TC25AfterPaymentSuccessClickonOrderlistPage", function(){
    afterEach(function(){
        if(this.currentTest.state=='failed'){
            let imageFileName = this.currentTest.title + '.jpeg';
            driver.takeScreenshot().then(
              function(image){
                require('fs').writeFileSync('./screenshots/' + imageFileName,image,'base64')
              } 
            )
            addContext(this, 'Following comes the failed test image')
            addContext(this,'../screenshots/' + imageFileName)
        } 
    })
// it block
    it("TC25 After Payment Success Click on Order list Page", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`#Customer`)).click();
        await driver.findElement(By.css(`select[name="Customer"]`)).sendKeys("Customer E");
        await driver.findElement(By.css(`#Item`)).click();
        await driver.findElement(By.css(`select[name="Item"]`)).sendKeys("1 - Signature Tonkotsu Chashu Ramen");
        await driver.findElement(By.css(`#txtQuantity`)).clear("");
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("1");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("0");
        await driver.findElement(By.css(`#btnAddToList`)).click();
        await driver.findElement(By.css(`#Item`)).click();
        await driver.findElement(By.css(`select[name="Item"]`)).sendKeys("2 - Oh my HOT!! Tonkotsu Chashu Ramen");
        await driver.findElement(By.css(`#txtQuantity`)).clear("");
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("2");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("0");
        await driver.findElement(By.css(`#btnAddToList`)).click();
        await driver.findElement(By.css(`#Item`)).click();
        await driver.findElement(By.css(`select[name="Item"]`)).sendKeys("3 - Nostalgic Japanese Soy Chicken Ramen");
        await driver.findElement(By.css(`#txtQuantity`)).clear("");
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("4");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("0");
        await driver.findElement(By.css(`#btnAddToList`)).click();
        await driver.findElement(By.css(`#btnCheckOut`)).click();   
        await driver.findElement(By.css(`#txtPaymentAmount`)).clear("");
        await driver.findElement(By.css(`#txtPaymentAmount`)).sendKeys("123.40");
        await driver.findElement(By.css(`#txtReturnTotal`)).sendKeys("0.00");
        await driver.findElement(By.css(`#btnPayment`)).isEnabled(true); 
        await driver.findElement(By.css(`#btnPayment`)).click();   

        await driver.sleep(1000);
/*             try{
        await driver.findElement(By.linkText('Order has been Successfully Placed')).click();
        // Wait for the alert to be displayed
        await driver.wait(until.alertIsPresent());
            // Store the alert in a variable
        let alert = await driver.switchTo().alert();
            //Store the alert text in a variable
        let alertText = await alert.getText();
            //Press the OK button
        await alert.accept();
    }catch(err2) {
        console.log("Error2: " + err2);
    }; */
    let alert = await driver.switchTo().alert();
    await alert.accept();
    await driver.sleep(1000);
    await driver.findElement(By.css(`a[href="/Order/OrderIndex"]`)).click();   

    //assert
    let todoText = await driver.findElement(By.css("tbody tr:nth-child(2) td:nth-child(5)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"123.40"); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC25AfterPaymentSuccessClickonOrderlistPage.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('div[class="container body-content"] h2'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('div[class="container body-content"] h2'))
            .getSize().then(size => {
                _width = size.width;
                _height = size.height;
            });               
        (async function () {
                     await driver.sleep(5000);
                     sharp('image_li6.png')
                .extract({ left: parseInt(_left), top: parseInt(_top), width: parseInt(_width), height: parseInt(_height) })
                .toFile('image_li6_crop.png')
                .then(function (new_file_info) {
                    console.log("Image cropped and saved");
                })
                .catch(function (err) {
                    if (err) console.log(err);
                });
                 }());
    }
    catch (err) {
        console.log("Error: " + err);
    };
    await driver.findElement(By.css(`#logoutForm`)).click();
                await driver.quit();
    });
});