import { Page, Locator } from "@playwright/test";

// Going to Inventory (or Products) Page and add item to cart
export class InventoryPage {
    page: Page;
    addToCartButtonLocator: Locator;
    cartButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButtonLocator = page.locator(
            '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
          );
        this.cartButtonLocator = page.locator(
          '[data-test="shopping-cart-link"]'
        );
    }

    async addToCartButtonClick(page: Page) {
        await this.addToCartButtonLocator.click()
    }
    async cartButtonClick(page: Page) {
        await this.cartButtonLocator.click()
    }
}