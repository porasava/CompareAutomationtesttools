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
                  //  await driver.quit();
        });
    });


    // discribe block
describe ("TC2AdminAddProductSuccess", function(){
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
            it("TC2 success to added a product", async function(){
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
   // await driver.quit(); 
});
});


describe ("TC3AdminDeleteProductSuccess", function(){
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
it("TC3 success to deleted a product", async function(){
try{
await driver.get("http://192.168.3.111:8042/User/AdminLogin");
await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya");
await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
await driver.findElement(By.css(`input[value="Login"]`)).click();
await driver.findElement(By.xpath(`//a[normalize-space()="Item List"]`)).click();
await driver.findElement(By.xpath(`(//a[contains(text(),'Delete')])[1]`)).click();
await driver.findElement(By.css(`input[value="Delete"]`)).click();
/* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
console.log(error);
}
await driver.findElement(By.css(`a[href="/Product"]`)).click();
/*         await driver.sleep(500);  */
    //assert
    let todoText = await driver.findElement(By.css("tbody tr:nth-child(2) td:nth-child(3)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"Bravecto"); 
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
//await driver.quit();
});
});



describe ("TC4CutomerRegisterFailed", function(){
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
it("TC4 A Cutomer Register Failed", async function(){
try{
await driver.get("http://192.168.3.111:8042");
await driver.manage().window().maximize();
await driver.findElement(By.css(`#loginlink`)).click();
await driver.findElement(By.xpath(`(//a[normalize-space()='Customer Register'])[1]`)).click();
await driver.findElement(By.css(`#FirstName`)).sendKeys("TananyaTest")
await driver.findElement(By.css(`#LastName`)).sendKeys("AsaTest")
await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
await driver.findElement(By.css(`#Password`)).sendKeys("1234")
await driver.findElement(By.css(`#ConfirmPassword`)).sendKeys("12345")
await driver.findElement(By.css(`#Email`)).sendKeys("AsaTest@hotmail.com")
await driver.findElement(By.xpath(`//input[@value="Submit"]`)).click();
/* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
console.log("Error before Screenshot: " +error);
}
    //assert
    let todoText = await driver.findElement(By.css("#ConfirmPassword-error")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"'Confirm Password' and 'Password' do not match."); 
await driver.takeScreenshot().then(
function (image) {
    require('fs').writeFileSync('./result/TC4CutomerRegisterFailed.png', image, 'base64')
});
try {
var _height = 0, _width = 0, _left = 0, _top = 0;
driver.findElement(By.css('label[for="FirstName"]'))
    .getLocation().then(location => {
        _left = location.x;
        _top = location.y;
    });
driver.findElement(By.css('label[for="FirstName"]'))
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
            if (err) console.log("Error inside Screenshot: "+err);
        });
}());
}
catch (err) {
console.log("Error Screenshot: " + err);
};
//await driver.quit();
});
});



describe ("TC5CutomerRegisterSuccess", function(){
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
it("TC5 A Cutomer Register Success", async function(){
try{
await driver.get("http://192.168.3.111:8042");
await driver.findElement(By.css(`#loginlink`)).click();
await driver.findElement(By.xpath(`(//a[normalize-space()='Customer Register'])[1]`)).click();
await driver.findElement(By.css(`#FirstName`)).sendKeys("TananyaTest")
await driver.findElement(By.css(`#LastName`)).sendKeys("AsaTest")
await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
await driver.findElement(By.css(`#Password`)).sendKeys("1234")
await driver.findElement(By.css(`#ConfirmPassword`)).sendKeys("1234")
await driver.findElement(By.css(`#Email`)).sendKeys("AsaTest@hotmail.com")
await driver.findElement(By.css(`input[value="Submit"]`)).click();
/* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
console.log(error);
}
    //assert
    let todoText = await driver.findElement(By.css(".label-success")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"Registration successful."); 
await driver.takeScreenshot().then(
function (image) {
    require('fs').writeFileSync('./result/TC5CutomerRegisterSuccess.png', image, 'base64')
});
try {
var _height = 0, _width = 0, _left = 0, _top = 0;
driver.findElement(By.xpath('//label[normalize-space()="Email"]'))
    .getLocation().then(location => {
        _left = location.x;
        _top = location.y;
    });
driver.findElement(By.xpath('//label[normalize-space()="Email"]'))
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
//await driver.quit();
});
});



describe ("TC6CutomerLoginFailed", function(){
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
it("TC6 A Cutomer Login Failed", async function(){
try{
await driver.get("http://192.168.3.111:8042");
await driver.manage().window().maximize();
await driver.findElement(By.css(`#loginlink`)).click();
await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
await driver.findElement(By.css(`#Password`)).sendKeys("12345")
await driver.findElement(By.css(`input[value="Login"]`)).click();
/* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
console.log(error);
}
    //assert
    let todoText = await driver.findElement(By.css(".field-validation-error")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"Wrong Username or Password"); 
await driver.takeScreenshot().then(
function (image) {
    require('fs').writeFileSync('./result/TC6CutomerLoginFailed.png', image, 'base64')
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
//await driver.quit();
});
});



describe ("TC7CutomerLoginSuccess", function(){
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
it("TC7 A Cutomer Login success", async function(){
try{
await driver.get("http://192.168.3.111:8042");
await driver.findElement(By.css(`#loginlink`)).click();
await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
await driver.findElement(By.css(`#Password`)).sendKeys("1234")
await driver.findElement(By.css(`input[value="Login"]`)).click();

/* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
console.log(error);
}
    //assert
    let todoText = await driver.findElement(By.css(".text-center")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"Pet Product List"); 
await driver.takeScreenshot().then(
function (image) {
    require('fs').writeFileSync('./result/TC7CutomerLoginSuccess.png', image, 'base64')
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
await driver.findElement(By.xpath(`//a[normalize-space()="Log Out"]`)).click();
//await driver.quit();
});
});


// discribe block
describe ("TC8CutomerAddProductToCartSuccess", function(){
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
    it("TC8 Cutomer Added Product To CartSuccess", async function(){
    try{
    await driver.get("http://192.168.3.111:8042");
    driver.manage().window().maximize();
/*     driver.viewport(1350, 700) */
 /*    driver.document.body.style.zoom('0.8'); */
/*     js.executeScript(document.body.style.transform='scale(0.8, 0.8)'); */
/* js.executeScript("document.body.style.zoom='110%'");  */
    await driver.findElement(By.css(`#loginlink`)).click();
    await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
    await driver.findElement(By.css(`#Password`)).sendKeys("1234")
    await driver.findElement(By.css(`input[value="Login"]`)).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[1]`)).click();
    /* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
    console.log(error);
}
        //assert
        let todoText = await driver.findElement(By.xpath(`//a[@id="cartItem"]`)).getText().then(function(value){
            return value
        });
        assert.strictEqual(todoText,"Cart(1)"); 
await driver.takeScreenshot().then(
    function (image) {
        require('fs').writeFileSync('./result/TC8CutomerAddProductToCartSuccess.png', image, 'base64')
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
await driver.findElement(By.xpath(`//a[normalize-space()="Log Out"]`)).click();
//await driver.quit();
});
});


// discribe block
describe ("TC9CutomerAddProductsToCartSuccess", function(){
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
    it("TC9 Cutomer Added Products To CartSuccess", async function(){
    try{
    await driver.get("http://192.168.3.111:8042");
    await driver.findElement(By.css(`#loginlink`)).click();
    await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
    await driver.findElement(By.css(`#Password`)).sendKeys("1234")
    await driver.findElement(By.css(`input[value="Login"]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[1]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[2]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[3]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[4]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[4]`)).click();
    /* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
    console.log(error);
}
        //assert
        let todoText = await driver.findElement(By.css(`#cartItem`)).getText().then(function(value){
            return value
        });
        assert.strictEqual(todoText,"Cart(4)"); 
await driver.takeScreenshot().then(
    function (image) {
        require('fs').writeFileSync('./result/TC9CutomerAddProductsToCartSuccess.png', image, 'base64')
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
await driver.findElement(By.xpath(`//a[normalize-space()="Log Out"]`)).click();
//await driver.quit();
});
});



   // discribe block
   describe ("TC10CheckCartPage", function(){
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
    it("TC10 Check Cart Page", async function(){
    try{
    await driver.get("http://192.168.3.111:8042");
    await driver.findElement(By.css(`#loginlink`)).click();
    await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
    await driver.findElement(By.css(`#Password`)).sendKeys("1234")
    await driver.findElement(By.css(`input[value="Login"]`)).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[1]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[2]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[3]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[4]`)).click();
    await driver.findElement(By.xpath(`(//input[@id='btnAddToCart'])[4]`)).click();
    await driver.findElement(By.xpath(`//a[@id="cartItem"]`)).click();
    /* Verify product is gone!! */
/*     await driver.quit(); */
} catch (error){
    console.log(error);
}
        //assert
        let todoText = await driver.findElement(By.css("tbody tr td:nth-child(2) h3:nth-child(1)")).getText().then(function(value){
            return value
        });
        assert.strictEqual(todoText,"116.00 NZD"); 
await driver.takeScreenshot().then(
    function (image) {
        require('fs').writeFileSync('./result/TC10CheckCartPage.png', image, 'base64')
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
await driver.findElement(By.xpath(`//a[normalize-space()="Log Out"]`)).click();
//await driver.quit();
});
});





        // discribe block
        describe ("TC11CutomerLogoutSuccess", function(){
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
            it("TC11 Cutomer Logout Success", async function(){
            try{
                await driver.get("http://192.168.3.111:8042");
                await driver.findElement(By.css(`#loginlink`)).click();
                await driver.findElement(By.css(`#UserName`)).sendKeys("TananyaTest")
                await driver.findElement(By.css(`#Password`)).sendKeys("1234")
                await driver.findElement(By.css(`input[value="Login"]`)).click();
            await driver.findElement(By.xpath(`//a[normalize-space()="Log Out"]`)).click();
            /* Verify product is gone!! */
        /*     await driver.quit(); */
        } catch (error){
            console.log(error);
        }
                //assert
                let todoText = await driver.findElement(By.xpath(`//h2[normalize-space()="Customer Login"]`)).getText().then(function(value){
                    return value
                });
                assert.strictEqual(todoText,"Customer Login"); 
        await driver.takeScreenshot().then(
            function (image) {
                require('fs').writeFileSync('./result/TC11CutomerLogoutSuccess.png', image, 'base64')
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
        //await driver.quit();
        });
        });





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






