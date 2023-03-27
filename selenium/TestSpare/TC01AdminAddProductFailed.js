/* call function from node module */
const {Builder, By, Key, unit, wait}=require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const path = require('path');
/* Mocha */
/* const {assert} = 'mocha-webdriver'; */
/* const {sharp} = require('Sharp'); */
const assert = require("assert");
const { isTypedArray } = require('util/types');
var addContext= require("mochawesome/addContext");

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();
// discribe block
describe ("TC1AdminAddProductFailed", function(){
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
    it("TC1 Failed to add product", async function(){

        await driver.get("http://192.168.3.111:8042/User/AdminLogin");
        driver.manage().window().maximize();
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`a[href="/Item"]`)).click();
        await driver.findElement(By.xpath(`//select[@id="CategoryId"]`)).click();
        await driver.findElement(By.xpath(`//select[@id="CategoryId"]/option[@value='        14']`)).click();
        await driver.findElement(By.css(`input[name="ItemCode"]`)).sendKeys("Item Code");
        await driver.findElement(By.css(`input[name="ItemName"]`)).sendKeys("Item Name");
        await driver.findElement(By.css(`input[name="Description"]`)).sendKeys("Description");
        await driver.findElement(By.css(`input[value="0"]`)).clear("");
        await driver.findElement(By.css(`input[value="0"]`)).sendKeys("2000");

  
            await driver.findElement(By.xpath(`//input[@id="btnSave"]`)).click();
        await driver.sleep(500); 
    try{
        await driver.findElement(By.linkText('There is some problem to add Item')).click();
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
        
    };
    await driver.findElement(By.css(`a[href="/Product"]`)).click();
/*         await driver.sleep(500);  */
    //assert
    let todoText = await driver.findElement(By.css("tbody tr:nth-child(2) td:nth-child(3)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"Bravecto"); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC1AdminAddProductFailed.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('#ItemPrice'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('#ItemPrice'))
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
                await driver.quit();
    });
});