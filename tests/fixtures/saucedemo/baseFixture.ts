import { test as base, Page } from '@playwright/test'
import { LoginPage } from '../../../pages/saucedemo/LoginPage'
import { InventoryPage } from '../../../pages/saucedemo/InventoryPage'
import { CartPage } from '../../../pages/saucedemo/CartPage'
import { CheckoutPage } from '../../../pages/saucedemo/CheckoutPage'

type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },

    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }
})