import { Page, Locator } from "@playwright/test";

// Going to Checkout page

export class CheckoutPage{
    page: Page;
    firstNameInputLocator: Locator;
    lastNameInputLocator: Locator;
    zipCodeInputLocator: Locator;
    continueButtonLocator: Locator;
    finishButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInputLocator = page.locator('[data-test="firstName"]');
        this.lastNameInputLocator = page.locator('[data-test="lastName"]');
        this.zipCodeInputLocator = page.locator('[data-test="postalCode"]');
        this.continueButtonLocator = page.locator('[data-test="continue"]');
        this.finishButtonLocator = page.locator('[data-test="finish"]');
    }

    async checkoutFormSubmit(page: Page) {
        await this.firstNameInputLocator.fill('Ruslan');
        await this.lastNameInputLocator.fill('Haribov');
        await this.zipCodeInputLocator.fill('18000');
        await this.continueButtonLocator.click();
    }

    async finishCheckout(page: Page) {
        await this.finishButtonLocator.click()
    }
}