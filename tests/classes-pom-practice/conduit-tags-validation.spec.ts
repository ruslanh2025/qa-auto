// test with Classes usage

import { test, expect, Page } from '@playwright/test';
import {
  RegistrationPage,
  FakerUserDataForSignUp,
} from "../objects-practice/conduit-helper";
import { FirstArticle, GlobalFeed, PopularTags, YourFeed } from './conduit-pages';

test('test', async ({ page }) => {
  const registerPage = new RegistrationPage(page);
  const fakeData = new FakerUserDataForSignUp();
  const yourFeed = new YourFeed(page);
  const globalFeed = new GlobalFeed(page);
  const popularTags = new PopularTags(page);
  const firstArticle = new FirstArticle(page);
    
  await page.goto("https://demo.learnwebdriverio.com/register");
  await registerPage.fillRegistrationForm(fakeData);
  await registerPage.submitRegistration();

  // Клікнути на Your Feed
  yourFeed.YourFeedLinkClick(page)
  await page.waitForTimeout(2000);
  expect(page).toHaveURL("https://demo.learnwebdriverio.com/my-feed");

  // Клікнути на Global Feed
  globalFeed.GlobalFeedLinkClick(page)
  await page.waitForTimeout(2000);
  expect(page).toHaveURL("https://demo.learnwebdriverio.com/");

  // Клікнути на один з Popular Tags (e.g. 'qa')
  popularTags.PopularTagsLinkClick(page);
  await page.waitForTimeout(2000);
  expect(page).toHaveURL("https://demo.learnwebdriverio.com/tag/qa");

  // Вибрати перший Артікл зі списку (після фільтрації по тегу)
  // Чекаємо появи списку артіклів і клікаємо на перший
  firstArticle.FirstArticleClick(page);

  // Перевірити що в Артіклі є вибраний тег
  await expect(page.locator('[data-qa-id="article-tags"] [href="/tag/qa"]')).toBeVisible();
});