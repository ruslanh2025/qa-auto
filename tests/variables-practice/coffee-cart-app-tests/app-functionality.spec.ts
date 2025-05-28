import { test, expect } from '@playwright/test';

test('CCA-1 - total value changes after adding items', {
    tag: '@total'
}, async ({ page }) => {
  const espressoLocator = page.locator('[data-test="Espresso"]');
  const macchiatoLocator = page.locator('[data-test="Espresso_Macchiato"]');
  const cappuccinoLocator = page.locator('[aria-label="Cappuccino"]');
  const checkoutLocator = page.locator('[data-test="checkout"]');
  const promoLocator = page.locator('.promo');
  const yesButtonLocator = page.locator('[class="yes"]');
  const discountedMochaLocator = page.getByText('(Discounted) Mocha');

  await page.goto('https://coffee-cart.app/');
  await espressoLocator.click();
  await macchiatoLocator.click();
  await cappuccinoLocator.click();
  await expect(checkoutLocator).not.toHaveText('Total: $0.00');
  await expect(promoLocator).toContainText('It\'s your lucky day!');
  await yesButtonLocator.click();
  await checkoutLocator.hover();
  await expect(discountedMochaLocator).toBeVisible();
});


test('CCA-2 - discounted item is added to the cart', {
  tag: '@discounted-item'
}, async ({ page }) => {
  const espressoLocator = page.locator('[data-test="Espresso"]');
  const macchiatoLocator = page.locator('[data-test="Espresso_Macchiato"]');
  const cappuccinoLocator = page.locator('[data-test="Cappuccino"]');
  const promoLocator = page.locator('[class="promo"]');
  const yesButtonLocator = page.locator('[class="yes"]');
  const checkoutLocator = page.locator('[data-test="checkout"]');
  const discountedMochaLocator = page.getByText('(Discounted) Mocha');

  await page.goto('https://coffee-cart.app/');
  await espressoLocator.click();
  await macchiatoLocator.click();
  await cappuccinoLocator.click();
  await expect(promoLocator).toContainText('It\'s your lucky day!');
  await yesButtonLocator.click();
  await checkoutLocator.hover();
  await expect(discountedMochaLocator).toBeVisible();
});

test('CCA-3 - ordering and payment', {
  tag: '@end-2-end'
}, async ({ page }) => {
  const americanoLocator = page.locator('[data-test="Americano"]');
  const checkoutLocator = page.locator('[data-test="checkout"]');
  const nameFieldLocator = page.locator('#name');
  const emailFieldLocator = page.locator('#email');
  const promotionCheckboxLocator = page.locator('#promotion');
  const submitPaymentButtonLocator = page.locator('#submit-payment');
  const successSnackbarLocator = page.locator('[class="snackbar success"]');

  await page.goto('https://coffee-cart.app/');
  await americanoLocator.click();
  await checkoutLocator.click();
  await nameFieldLocator.fill('test');
  await emailFieldLocator.fill('test@te.st');
  await promotionCheckboxLocator.check();
  await submitPaymentButtonLocator.click();
  await expect(successSnackbarLocator).toBeVisible();
});

test('CCA-4 - cart page and cart items added', {
  tag: '@cart'
}, async ({ page }) => {
  const cartLinkLocator = page.locator('[href="/cart"]');
  const noCoffeeTextLocator = page.getByText('No coffee, go add some.');
  const menuPageLocator = page.locator('[aria-label="Menu page"]');
  const mochaLocator = page.locator('[data-test="Mocha"]');
  const flatWhiteLocator = page.locator('[data-test="Flat_White"]');
  const addOneFlatWhiteButtonLocator = page.locator("//li[.//div[text()='Flat White']]//button[@aria-label='Add one Flat White']");
  const addOneMochaButtonLocator = page.getByRole('button', { name: 'Add one Mocha' });

  await page.goto('https://coffee-cart.app/');
  await cartLinkLocator.click();
  await expect(noCoffeeTextLocator).toBeVisible();
  await menuPageLocator.click();
  await mochaLocator.click();
  await flatWhiteLocator.click();
  await cartLinkLocator.click();
  await expect(cartLinkLocator).toContainText('cart (2)');
  await addOneFlatWhiteButtonLocator.click();
  await addOneMochaButtonLocator.click();
  await expect(cartLinkLocator).toContainText('cart (4)');
});

test('CCA-5 - removing cart item', {
  tag: '@cart'
}, async ({ page }) => {
  const cartLinkLocator = page.locator('[href="/cart"]');
  const noCoffeeTextLocator = page.getByText('No coffee, go add some.');
  const menuPageLocator = page.locator('[aria-label="Menu page"]');
  const latteLocator = page.locator('[data-test="Cafe_Latte"]');
  const espressoConPannaLocator = page.locator('[data-test="Espresso_Con Panna"]');
  const removeOneLatteButtonLocator = page.getByRole('button', { name: 'Remove one Cafe Latte' });
  const removeAllEspressoConPannaButtonLocator = page.getByRole('button', { name: 'Remove all Espresso Con Panna' });

  await page.goto('https://coffee-cart.app/');
  await cartLinkLocator.click();
  await expect(noCoffeeTextLocator).toBeVisible();
  await menuPageLocator.click();
  await latteLocator.click();
  await espressoConPannaLocator.click();
  await cartLinkLocator.click();
  await expect(cartLinkLocator).toContainText('cart (2)');
  await removeOneLatteButtonLocator.click();
  await expect(cartLinkLocator).toContainText('cart (1)');
  await removeAllEspressoConPannaButtonLocator.click();
  await expect(cartLinkLocator).toContainText('cart (0)');
  await expect(noCoffeeTextLocator).toBeVisible();
});