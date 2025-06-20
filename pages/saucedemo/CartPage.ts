import { Page, Locator } from "@playwright/test";

// Going to Cart page to check added items or for Checkout
export class CartPage{
    page: Page;
    checkoutButtonLocator: Locator

    constructor(page: Page) {
        this.page = page;
        this.checkoutButtonLocator = page.locator('[data-test="checkout"]');
    }

    async checkoutButtonClick(page: Page) {
        await this.checkoutButtonLocator.click()
    }
}