/* call function from node module */
const {Builder, By, Key, unit, wait}=require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const path = require('path');
const assert = require("assert");

/* let {Builder} = require('selenium-webdriver'); */

/* let options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(options=options) */
/* async clickElement(element, elementName, timeout = 10000) {
    await this.checkElementClickable(element, elementName, timeout);
    return element.click(); */
var caps = { browserName: 'chrome', unexpectedAlertBehaviour: 'ignore' };
var driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .withCapabilities(caps)
    .build();

    async function fileUpload() {
        try{
             await driver.findElement(By.xpath(`/html[1]/body[1]/div[2]/div[1]/div[6]/div[1]/input[1]`))
             .sendKeys(__dirname+"\\adidas_shoe.jfif");

        } catch (error){
            console.log(error);
        }
    }



async function TC2AdminAddProductSuccess() {
    await driver.get("http://192.168.3.111:8042/User/AdminLogin");
    driver.manage().window().maximize();
    await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya");
    await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
    await driver.findElement(By.css(`input[value="Login"]`)).click();
    await driver.findElement(By.css(`a[href="/Item"]`)).click();
    await driver.findElement(By.xpath(`//select[@id="CategoryId"]`)).click();
    await driver.findElement(By.xpath(`//select[@id="CategoryId"]/option[@value='        14']`)).click();
    await driver.findElement(By.css(`input[name="ItemCode"]`)).sendKeys("Adidas 001");
    await driver.findElement(By.css(`input[name="ItemName"]`)).sendKeys("Adidas");
    await driver.findElement(By.css(`input[name="Description"]`)).sendKeys("Adidas 001");
    await driver.findElement(By.css(`input[value="0"]`)).clear("");
    await driver.findElement(By.css(`input[value="0"]`)).sendKeys("200");
    try{
        await driver.findElement(By.xpath(`/html[1]/body[1]/div[2]/div[1]/div[6]/div[1]/input[1]`))
        .sendKeys(__dirname+"\\adidas_shoe.jfif");
        
   } catch (error){
       console.log(error);
   }
/*    await driver.findElement(By.xpath(`//input[@id="btnSave"]`)).click(); */
   await driver.takeScreenshot().then(
    function (image) {
        require('fs').writeFileSync('./result/TC2AdminAddProductSuccess.png', image, 'base64')
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
 
/*         await driver.sleep(5000); */
 
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

    await driver.findElement(By.xpath(`//input[@id="btnSave"]`)).click();
    await driver.sleep(2000);
    try{
    await driver.findElement(By.linkText('Item is added Successfully')).click();

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

        //assert
        let todoText = await driver.findElement(By.xpath("//tbody/tr[2]/td[2]")).getText().then(function(value){
            return value
        });
        assert.strictEqual(todoText,"Adidas 001"); 
/*     await driver.quit();  */
}
TC2AdminAddProductSuccess() 

 
 
