import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Залогінитись під існуючим юзером
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();

  // Додати будь який товар в корзину
  await page
    .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .click();

  // Перейти в корзину
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Перевірити чи товар був доданий
  await expect(
    page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
  ).toBeVisible();

  // Перейти на Checkout
  await page.locator('[data-test="checkout"]').click();

  // Ввести рандомні данні FirstName, LastName, Zip  і натиснути. Continue
  await page.locator('[data-test="firstName"]').fill("Ruslan");
  await page.locator('[data-test="lastName"]').fill("Haribov");
  await page.locator('[data-test="postalCode"]').fill("18000");
  await page.locator('[data-test="continue"]').click();

  // Перевірити чи це вс ще товар з кошика
  await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();

  // Натиснути Finish
  await page.locator('[data-test="finish"]').click();

  // Перевірити повідомлення про успішну покупку
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
});