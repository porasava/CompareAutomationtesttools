/* call function from node module */
const {Builder, By, Key, unit, wait}=require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
const path = require('path');

/* let {Builder} = require('selenium-webdriver'); */

/* let options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(options=options) */
/* async clickElement(element, elementName, timeout = 10000) {
    await this.checkElementClickable(element, elementName, timeout);
    return element.click(); */

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();

    async function fileUpload() {
        try{
             await driver.findElement(By.xpath(`/html[1]/body[1]/div[2]/div[1]/div[6]/div[1]/input[1]`))
             .sendKeys(__dirname+"\\adidas_shoe.jfif");

        } catch (error){
            console.log(error);
        }
    }



async function TC3AdminDeleteProductSuccess() {
    try{
    await driver.get("http://192.168.3.111:8042/User/AdminLogin");
    await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya");
    await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
    await driver.findElement(By.css(`input[value="Login"]`)).click();
    await driver.findElement(By.xpath(`//a[normalize-space()="Item List"]`)).click();
/*     const removeItem = (arr,item)=> {    
    let newArray = [...arr];
    const index = newArray.findIndex((item) === "zz");
    if(index !== -1) {
        newArray.splice(index,1);
        return newArray;
    } */

    await driver.findElement(By.xpath(`(//a[contains(text(),'Delete')])[1]`)).click();
    await driver.findElement(By.css(`input[value="Delete"]`)).click();
    /* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
    console.log(error);
}

await driver.takeScreenshot().then(
    function (image) {
        require('fs').writeFileSync('./result/TC3AdminDeleteProductSuccess.png', image, 'base64')
    });

try {
 
    var _height = 0, _width = 0, _left = 0, _top = 0;
 
    driver.findElement(By.css('input[value="0"]'))
        .getLocation().then(location => {
            _left = location.x;
            _top = location.y;
        });
    driver.findElement(By.css('input[value="0"]'))
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
}
TC3AdminDeleteProductSuccess() 

 
 
