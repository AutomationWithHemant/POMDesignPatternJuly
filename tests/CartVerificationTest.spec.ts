import {expect} from '@playwright/test'
//import {LoginPage} from '../pages/LoginPage'
//import { InventoryPage } from '../pages/inventoryPage'
//import { CartPage } from '../pages/CartPage'
import {test} from '../fixtures/common-fixtures'

test('Verification of cart',async({page,loginPage,inventoryPage,cartPage,commonUtils})=>{
    //const loginPageObj = new LoginPage(page)
    //console.log(process.env.BASE_URL)
    //console.log(process.env.USER_NAME)
    //console.log(process.env.PASSWORD)

    const decryptUserName = commonUtils.decryptData(process.env.USER_NAME!)
    const decryptPassword = commonUtils.decryptData(process.env.PASSWORD!)
    await loginPage.goToApplication(process.env.BASE_URL!)
    //await loginPage.doLogin("standard_user","secret_sauce")
    //await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
    await loginPage.doLogin(decryptUserName,decryptPassword)
   // const inventoryPageObj = new InventoryPage(page)
    await expect(inventoryPage.inventoryTitle).toHaveText("Products") //Assertion
    //page.waitForTimeout(3000)
    inventoryPage.backPackAddToCart()
    inventoryPage.clickOnCartIcon()

    //const cartPageObj = new CartPage(page)
    await expect(cartPage.cartPageTitle).toHaveText('Your Cart') //Assertion
    await cartPage.goToCheckoutPage()
})