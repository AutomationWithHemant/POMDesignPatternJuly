import {test as baseTest} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import { InventoryPage } from '../pages/inventoryPage'
import { CartPage } from '../pages/CartPage'

type PomFixturesType = {
    loginPage : LoginPage
    inventoryPage : InventoryPage
    cartPage : CartPage
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage : async({page},use) => {
    const loginPageObj = new LoginPage(page)
    use(loginPageObj)
    },
    inventoryPage : async({page},use) => {
    const inventoryPageObj = new InventoryPage(page)
    use(inventoryPageObj)
    },
    cartPage : async({page},use) => {
    const cartPageObj = new CartPage(page)
    use(cartPageObj)
    }
})

