/* call function from node module */
const {Builder, By, Key, unit, wait}=require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const path = require('path');
var addContext= require("mochawesome/addContext")
/* const {assert} = 'mocha-webdriver'; */
const assert = require("assert");
let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();
           // discribe block
           describe ("TC12AdminDeleteCustomerSuccess", function(){
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
            it("TC12 Admin Deleted Customer Success", async function(){
            try{
            await driver.get("http://192.168.3.111:8042/User/AdminLogin");
            await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya");
            await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
            await driver.findElement(By.css(`input[value="Login"]`)).click();
            await driver.findElement(By.css(`a[href="/User/CustomerList"]`)).click();
            await driver.findElement(By.xpath(`(//a[contains(text(),'Delete')])[2]`)).click();
            await driver.findElement(By.css(`input[value="Delete"]`)).click();
            await driver.sleep(500);
        } catch (error){
            console.log(error);
        }
                //assert
                let todoText = await driver.findElement(By.xpath(`//h2[normalize-space()="Customer List"]`)).getText().then(function(value){
                    return value
                });
                assert.strictEqual(todoText,"Customer List"); 
        await driver.takeScreenshot().then(
            function (image) {
                require('fs').writeFileSync('./result/TC12AdminDeleteCustomerSuccess.png', image, 'base64')
            });
        try {
            var _height = 0, _width = 0, _left = 0, _top = 0;
            driver.findElement(By.xpath('//th[normalize-space()="CustomerId"]'))
                .getLocation().then(location => {
                    _left = location.x;
                    _top = location.y;
                });
            driver.findElement(By.xpath('//th[normalize-space()="CustomerId"]'))
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
        await driver.findElement(By.xpath(`//a[normalize-space()="Log Out"]`)).click();
        await driver.quit();
        });
        });