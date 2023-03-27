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
    describe ("TC13AdminLoginSuccess", function(){
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
        it("TC13 Admin Login Success", async function(){

            await driver.get("http://localhost:8044/User/AdminLogin");
            await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
            await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
            await driver.findElement(By.css(`input[value="Login"]`)).click();
           
            /*         await driver.sleep(500);  */
        //assert
        let todoText = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(4) > legend:nth-child(1)")).getText().then(function(value){
            return value
        });
        assert.strictEqual(todoText,"Restaurant"); 
        await driver.takeScreenshot().then(
            function (image) {
                require('fs').writeFileSync('./result/TC13AdminLoginSuccess.png', image, 'base64')
            });
                try {
                     var _height = 0, _width = 0, _left = 0, _top = 0;
                     driver.findElement(By.css('#Customer'))
                .getLocation().then(location => {
                    _left = location.x;
                    _top = location.y;
                });
            driver.findElement(By.css('#Customer'))
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
                  //  await driver.quit();
        });
    });





// discribe block
describe ("TC14AdminAddNewMenu", function(){
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
    it("TC14 Admin Add a New Menu", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`a[href="/Order/ItemIndex"]`)).click();
        await driver.findElement(By.css(`a[href="/Order/AddItem"]`)).click();
        await driver.findElement(By.css(`#ItemName`)).sendKeys("13 - Green Tea");
        await driver.findElement(By.css(`#ItemPrice`)).clear("");
        await driver.findElement(By.css(`#ItemPrice`)).sendKeys("5.00");
        await driver.findElement(By.css(`input[value="Create"]`)).click();
        await driver.findElement(By.css(`div[class="container body-content"] div a`)).click();
        /*         await driver.sleep(500);  */
    //assert
    let todoText = await driver.findElement(By.css("body > div:nth-child(2) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"13 - Green Tea"); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC14AdminAddNewMenu.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('body > div:nth-child(2) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('body > div:nth-child(2) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)'))
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
            //    await driver.quit();
    });
});






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
           //     await driver.quit();
    });
});





// discribe block
describe ("TC16AdminAddOrder", function(){
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
    it("TC16 Admin Add Order", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`#Customer`)).click();
        await driver.findElement(By.css(`select[name="Customer"]`)).sendKeys("Customer Z");
        await driver.findElement(By.css(`#Item`)).click();
        await driver.findElement(By.css(`select[name="Item"]`)).sendKeys("1 - Signature Tonkotsu Chashu Ramen");
        await driver.findElement(By.css(`#txtQuantity`)).clear("");
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("1");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("0");
        await driver.findElement(By.css(`#btnAddToList`)).click();
       // await driver.findElement(By.css(`#btnCheckOut`)).click();       

      
        /*         await driver.sleep(500);  */
    //assert
    let todoText = await driver.findElement(By.css("body > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,""); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC16AdminAddOrderAndCheckout.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('.modal-title'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('.modal-title'))
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
             //   await driver.quit();
    });
});





// discribe block
describe ("TC17AdminAdd2OrdersAndCheckout", function(){
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
    it("TC17 Admin Add 2 Orders", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`#Customer`)).click();
        await driver.findElement(By.css(`select[name="Customer"]`)).sendKeys("Customer Z");
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


      
    //assert
    let todoText = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(2) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"17.80"); 
    let todoText2 = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(3) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText2,"37.60"); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC17AdminAdd2OrdersAndCheckout.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('.modal-title'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('.modal-title'))
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
         //       await driver.quit();
    });
});






// discribe block
describe ("TC18AdminAddOrderDiscount", function(){
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
    it("TC18 Admin Add Order Discount", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`#Customer`)).click();
        await driver.findElement(By.css(`select[name="Customer"]`)).sendKeys("Customer Z");
        await driver.findElement(By.css(`#Item`)).click();
        await driver.findElement(By.css(`select[name="Item"]`)).sendKeys("1 - Signature Tonkotsu Chashu Ramen");
        await driver.findElement(By.css(`#txtQuantity`)).clear("");
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("1");
        await driver.findElement(By.css(`#txtDiscount`)).clear("");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("4");
        await driver.findElement(By.css(`#btnAddToList`)).click();
      
    //assert
    let todoText = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(2) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"13.80"); 
    


    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC18AdminAddOrderDiscountAndCheckout.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('.modal-title'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('.modal-title'))
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
            //    await driver.quit();
    });
});




// discribe block
describe ("TC19AdminAdd2OrdersDiscount", function(){
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
    it("TC19 Admin Add 2 Orders, Discount", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`#Customer`)).click();
        await driver.findElement(By.css(`select[name="Customer"]`)).sendKeys("Customer Z");
        await driver.findElement(By.css(`#Item`)).click();
        await driver.findElement(By.css(`select[name="Item"]`)).sendKeys("1 - Signature Tonkotsu Chashu Ramen");
        await driver.findElement(By.css(`#txtQuantity`)).clear("");
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("1");
        await driver.findElement(By.css(`#txtDiscount`)).clear("");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("4");
        await driver.findElement(By.css(`#btnAddToList`)).click();
        await driver.findElement(By.css(`#Item`)).click();
        await driver.findElement(By.css(`select[name="Item"]`)).sendKeys("2 - Oh my HOT!! Tonkotsu Chashu Ramen");
        await driver.findElement(By.css(`#txtQuantity`)).clear("");
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("2");
        await driver.findElement(By.css(`#txtDiscount`)).clear("");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("5");
        await driver.findElement(By.css(`#btnAddToList`)).click();

      
    //assert
    let todoText = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(2) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"13.80"); 

    let todoText2 = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(3) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText2,"32.60"); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC19AdminAdd2OrdersDiscount.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('.modal-title'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('.modal-title'))
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
           //     await driver.quit();
    });
});





// discribe block
describe ("TC20AdminAdd3OrdersWith3Quantities", function(){
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
    it("TC20 Admin Add 3 Orders With 3 Quantities", async function(){

        await driver.get("http://localhost:8044/User/AdminLogin");
        await driver.findElement(By.css(`#AdminUsername`)).sendKeys("Tananya1");
        await driver.findElement(By.css(`#AdminPassword`)).sendKeys("Tanya123");
        await driver.findElement(By.css(`input[value="Login"]`)).click();
        await driver.findElement(By.css(`#Customer`)).click();
        await driver.findElement(By.css(`select[name="Customer"]`)).sendKeys("Customer Z");
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
        await driver.findElement(By.css(`#txtQuantity`)).sendKeys("3");
        await driver.findElement(By.css(`#txtDiscount`)).clear("");
        await driver.findElement(By.css(`#txtDiscount`)).sendKeys("20");
        await driver.findElement(By.css(`#btnAddToList`)).click();
      
    //assert
    let todoText = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(2) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText,"17.80"); 
    let todoText2 = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(3) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText2,"37.60"); 
    let todoText3 = await driver.findElement(By.css("body > div:nth-child(2) > fieldset:nth-child(6) > table:nth-child(2) > tr:nth-child(4) > td:nth-child(6)")).getText().then(function(value){
        return value
    });
    assert.strictEqual(todoText3,"31.00"); 
    await driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('./result/TC20AdminAdd3OrdersWith3Quantities.png', image, 'base64')
        });
            try {
                 var _height = 0, _width = 0, _left = 0, _top = 0;
                 driver.findElement(By.css('.modal-title'))
            .getLocation().then(location => {
                _left = location.x;
                _top = location.y;
            });
        driver.findElement(By.css('.modal-title'))
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
    };            await driver.findElement(By.css(`#logoutForm`)).click();
                await driver.quit();
    });
});