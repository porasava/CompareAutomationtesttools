// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TC10CheckCartPage', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TC10CheckCartPage', async function() {
    // Test name: TC10CheckCartPage
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://192.168.3.111:8042")
    // 2 | setWindowSize | 1680x737 | 
    await driver.manage().window().setRect({ width: 1680, height: 737 })
    // 3 | click | id=loginlink | 
    await driver.findElement(By.id("loginlink")).click()
    // 4 | click | id=UserName | 
    await driver.findElement(By.id("UserName")).click()
    // 5 | type | id=UserName | Tanya1232
    await driver.findElement(By.id("UserName")).sendKeys("Tanya1232")
    // 6 | type | id=Password | Tanya123
    await driver.findElement(By.id("Password")).sendKeys("Tanya123")
    // 7 | click | name=name | 
    await driver.findElement(By.name("name")).click()
    // 8 | click | id=btnAddToCart | 
    await driver.findElement(By.id("btnAddToCart")).click()
    // 9 | click | css=.col-md-4:nth-child(3) #btnAddToCart | 
    await driver.findElement(By.css(".col-md-4:nth-child(3) #btnAddToCart")).click()
    // 10 | click | css=.col-md-4:nth-child(4) #btnAddToCart | 
    await driver.findElement(By.css(".col-md-4:nth-child(4) #btnAddToCart")).click()
    // 11 | click | id=btnAddToCart | 
    await driver.findElement(By.id("btnAddToCart")).click()
    // 12 | click | id=cartItem | 
    await driver.findElement(By.id("cartItem")).click()
    // 13 | click | css=tr:nth-child(1) > td:nth-child(2) | 
    await driver.findElement(By.css("tr:nth-child(1) > td:nth-child(2)")).click()
    // 14 | click | css=tr:nth-child(2) > td:nth-child(2) | 
    await driver.findElement(By.css("tr:nth-child(2) > td:nth-child(2)")).click()
    // 15 | click | css=tr:nth-child(3) > td:nth-child(2) | 
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).click()
    // 16 | click | linkText=Log Out | 
    await driver.findElement(By.linkText("Log Out")).click()
    // 17 | close |  | 
    await driver.close()
  })
})
