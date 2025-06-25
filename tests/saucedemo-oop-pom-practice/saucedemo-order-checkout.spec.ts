import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/LoginPage';
import { InventoryPage } from '../../pages/saucedemo/InventoryPage';
import { CartPage } from '../../pages/saucedemo/CartPage';
import { CheckoutPage } from '../../pages/saucedemo/CheckoutPage';

test('user can add something to the cart and submit checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
  await page.goto("https://www.saucedemo.com/");

  // Залогінитись під існуючим юзером
  await loginPage.loginUser(page);
  await expect(page.locator('[data-test="title"]')).toBeVisible();

  // Додати будь який товар в корзину
  await inventoryPage.addToCartButtonClick(page);

  // Перейти в корзину
  await inventoryPage.cartButtonClick(page);

  // Перевірити чи товар був доданий
  await expect(
    page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
  ).toBeVisible();

  // Перейти на Checkout
  await cartPage.checkoutButtonClick(page);

  // Ввести рандомні данні FirstName, LastName, Zip  і натиснути. Continue
  await checkoutPage.checkoutFormSubmit(page);

  // Перевірити чи це вс ще товар з кошика
  await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();

  // Натиснути Finish
  await checkoutPage.finishCheckout(page);

  // Перевірити повідомлення про успішну покупку
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
});