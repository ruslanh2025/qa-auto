import { test, expect } from '@playwright/test';

test('CCA-1 - total value changes after adding items', {
    tag: '@total'
}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[aria-label="Cappuccino"]').click();
  
  await expect(page.locator('[data-test="checkout"]')).not.toHaveText('Total: $0.00');

  await expect(page.locator('.promo')).toContainText('It\'s your lucky day!');
  await page.locator('[class="yes"]').click();

  await page.locator('[data-test="checkout"]').hover();
  await expect(page.getByText('(Discounted) Mocha')).toBeVisible();
});

test('CCA-2 - discounted item is added to the cart', {
    tag: '@discounted-item'
}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();

  await expect(page.locator('[class="promo"]')).toContainText('It\'s your lucky day!');
  await page.locator('[class="yes"]').click();

  await page.locator('[data-test="checkout"]').hover();
  await expect(page.getByText('(Discounted) Mocha')).toBeVisible();
});

test('CCA-3 - ordering and payment',{
    tag: '@end-2-end'
}, async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await page.locator('[data-test="Americano"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('#name').fill('test');
    await page.locator('#email').fill('test@te.st');
    await page.locator('#promotion').check();
    await page.locator('#submit-payment').click();
    await expect(page.locator('[class="snackbar success"]')).toBeVisible();
});

test('CCA-4 - cart page and cart items added',{
    tag: '@cart'
}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[href="/cart"]').click();
  await expect(page.getByText('No coffee, go add some.')).toBeVisible();
  await page.locator('[aria-label="Menu page"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[href="/cart"]').click();
  await expect(page.locator('[href="/cart"]')).toContainText('cart (2)');
  //await page.getByRole('button', { name: 'Add one Flat White' }).click(); // check with Xpath
  // with Xpath:
  await page.locator("//*[text() = 'Add one Flat White']/parent::li//button[text() = '+']").click();
  await page.getByRole('button', { name: 'Add one Mocha' }).click();
  await expect(page.locator('[href="/cart"]')).toContainText('cart (4)');
});

test('CCA-5 - removing cart item',{
    tag: '@cart'
}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[href="/cart"]').click();
  await expect(page.getByText('No coffee, go add some.')).toBeVisible();
  await page.locator('[aria-label="Menu page"]').click();
  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.locator('[href="/cart"]').click();
  await expect(page.locator('[href="/cart"]')).toContainText('cart (2)');
  await page.getByRole('button', { name: 'Remove one Cafe Latte' }).click();
  await expect(page.locator('[href="/cart"]')).toContainText('cart (1)');
  await page.getByRole('button', { name: 'Remove all Espresso Con Panna' }).click();
  await expect(page.locator('[href="/cart"]')).toContainText('cart (0)');
  await expect(page.getByText('No coffee, go add some.')).toBeVisible();
});