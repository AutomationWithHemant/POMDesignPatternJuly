import {Locator,Page} from '@playwright/test'

export class InventoryPage {
    readonly page: Page
    readonly addToCartButton : Locator
    readonly removeButton : Locator
    readonly cartIcon : Locator
    readonly inventoryTitle : Locator

    constructor(page: Page)
    {
        this.page = page;
        //locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.inventoryTitle = page.locator('[data-test="title"]')
   }

    async backPackAddToCart(){

        await this.addToCartButton.click()
    }

    async clickOnCartIcon(){
        await this.cartIcon.click()
    }
}