import { expect, Page } from '@playwright/test'
import { test } from '../../fixtures/saucedemo/baseFixture'

test("User can add something to the cart and submit checkout", async ({
  page, loginPage, inventoryPage, cartPage, checkoutPage
}) => {
  await loginPage.goToSaucedemoPage();

  await test.step('Login as existing user', async () => {
    await loginPage.loginUser({ username: "standard_user", password: 'secret_sauce'});
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });

  await test.step('Add any product to the cart', async () => {
    await inventoryPage.addToCartButtonClick(page);
  });

  await test.step('go to cart', async () => {
    await inventoryPage.cartButtonClick(page);
  });

  await test.step('Check that product was added to the cart', async () => {
    await expect(
      page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    ).toBeVisible();
  });

  await test.step('Go to checkout page', async () => {
    await cartPage.checkoutButtonClick(page);
  });

  await test.step('Submit the checkout form', async () => {
    await checkoutPage.checkoutFormSubmit(page);
  });

  await test.step('Check that this is still the same product', async () => {
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
  });

  await test.step('Click finish', async () => {
    await checkoutPage.finishCheckout(page);
  });

  await test.step('Check the message about successful order', async () => {
    await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  });
})