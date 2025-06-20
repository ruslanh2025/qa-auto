// test with Classes usage

import { test, expect, Page } from '@playwright/test';
import {
  RegistrationPage,
  FakerUserDataForSignUp,
} from "../objects-practice/conduit-helper";
import { HomePage } from '../../pages/conduit/Conduit-pages'

test('test', async ({ page }) => {
  const registerPage = new RegistrationPage(page);
  const fakeData = new FakerUserDataForSignUp();
  const homePage = new HomePage(page);
    
  await page.goto("https://demo.learnwebdriverio.com/register");
  await registerPage.fillRegistrationForm(fakeData);
  await registerPage.submitRegistration();

  // Клікнути на Your Feed
  await homePage.yourFeedLinkClick(page)
  await expect(page).toHaveURL("https://demo.learnwebdriverio.com/my-feed");

  // Клікнути на Global Feed
  await homePage.globalFeedLinkClick(page)
  await expect(page).toHaveURL("https://demo.learnwebdriverio.com/");

  // Клікнути на один з Popular Tags (e.g. 'qa')
  await homePage.popularTagsLinkClick(page);
  await expect(page).toHaveURL("https://demo.learnwebdriverio.com/tag/qa");

  // Вибрати перший Артікл зі списку (після фільтрації по тегу)
  // Чекаємо появи списку артіклів і клікаємо на перший
  await homePage.firstArticleClick(page);

  // Перевірити що в Артіклі є вибраний тег
  await expect(page.locator('[data-qa-id="article-tags"] [href="/tag/qa"]')).toBeVisible();
});