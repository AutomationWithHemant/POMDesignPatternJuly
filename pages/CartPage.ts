import {Locator,Page} from '@playwright/test'

export class CartPage{
    readonly page: Page
    readonly checkoutButton : Locator
    readonly cartPageTitle : Locator

    constructor(page: Page)
    {
        this.page = page;
        this.checkoutButton = page.locator('#checkout')
        this.cartPageTitle = page.locator('[data-test="title"]')
    }

    async goToCheckoutPage() {
        await this.checkoutButton.click()
    }
}
