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

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();
// discribe block
describe ("TC15AdminCreateNewCustomer", function(){
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
    it("TC15 Admin Create a New Customer", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`a[href="/Order/CustomerIndex"]`)).click();
        await driver.findElement(By.css(`a[href="/User/AddorEdit"]`)).click();
        await driver.findElement(By.css(`#CustomerName`)).sendKeys("Customer Z");
        await driver.findElement(By.css(`input[value="Create"]`)).click();
        await driver.findElement(By.css(`div[class="container body-content"] div a`)).click();
        /*         await driver.sleep(500);  */
    //assert
    let todoText = await driver.findElement(By.xpath("//table[@class='table']/tbody[1]/tr[2]/td[1]")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"Customer Z"); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC15AdminCreateNewCustomer.png', image, 'base64')
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