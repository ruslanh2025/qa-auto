// just a simple test NOT using Classes (only for registering new user)

import { test, expect, Page } from '@playwright/test';
import {
  RegistrationPage,
  FakerUserDataForSignUp,
} from "../objects-practice/conduit-helper";

test('test', async ({ page }) => {
  const registerPage = new RegistrationPage(page);
  const fakeData = new FakerUserDataForSignUp();
  await page.goto("https://demo.learnwebdriverio.com/register");
  await registerPage.fillRegistrationForm(fakeData);
  await registerPage.submitRegistration();

  // Клікнути на Your Feed
  await page.locator('[href="/my-feed"]').click();
  await page.waitForTimeout(2000);
  expect(page).toHaveURL("https://demo.learnwebdriverio.com/my-feed");

  // Клікнути на Global Feed
  await page.getByRole("link", { name: "Global Feed" }).click();
  await page.waitForTimeout(2000);
  expect(page).toHaveURL("https://demo.learnwebdriverio.com/");

  // Клікнути на один з Popular Tags (e.g. 'qa')
  await page.getByRole("link", { name: "qa", exact: true }).click();
  await page.waitForTimeout(2000);
  expect(page).toHaveURL("https://demo.learnwebdriverio.com/tag/qa");

  // Вибрати перший Артікл зі списку (після фільтрації по тегу)
  // Чекаємо появи списку артіклів і клікаємо на перший
  await page.waitForSelector('[data-qa-type="preview-title"]');
  await page.locator('[data-qa-type="preview-title"]').first().click();

  // Перевірити що в Артіклі є вибраний тег
  // Найкращий варіант - використання тестових атрибутів
  await expect(
    page.locator('[data-qa-id="article-tags"] [href="/tag/qa"]')
  ).toBeVisible();
});