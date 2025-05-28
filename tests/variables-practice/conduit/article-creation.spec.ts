import { test, expect } from '@playwright/test'

test.beforeEach('Sign Up', async ({ page }) => {
  const timeStamp = Date.now();
  const userNameFaker = `user${timeStamp}`;
  const emailFaker = `user-${timeStamp}@test.com`;
  const passwordFaker = `pass-${timeStamp}`;
  const userNameLocator = page.locator('[placeholder="Username"]');
  const emailLocator = page.locator('[placeholder="Email"]');
  const passwordLocator = page.locator('[placeholder="Password"]');
  const submitButtonLocator = page.locator('button');
  const newArticleButtonLocator = page.locator('[href="/editor"]');

  await page.goto('https://demo.learnwebdriverio.com/register');
  await userNameLocator.fill(userNameFaker);
  await emailLocator.fill(emailFaker);
  await passwordLocator.fill(passwordFaker);
  await submitButtonLocator.click();
  await expect(newArticleButtonLocator).toBeVisible();
});

test('CO-3 new article can be created and posted', {
  tag: '@article'
}, async ({ page }) => {
  const newArticleButtonLocator = page.locator('[href="/editor"]');
  const titleArticleLocator = page.locator('[data-qa-id="editor-title"]');
  const descriptionArticleLocator = page.locator('[data-qa-id="editor-description"]');
  const bodyArticleLocator = page.locator('[placeholder="Write your article (in markdown)"]');
  const tagsArticleLocator = page.locator('[data-qa-id="editor-tags"]');
  const publishButtonLocator = page.locator('[data-qa-id="editor-publish"]');
  const commentsSectionLocator = page.locator('[class="card-block"]');

  await newArticleButtonLocator.click();
  await titleArticleLocator.fill('Test Article');
  await descriptionArticleLocator.fill('something interesting');
  await bodyArticleLocator.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  await tagsArticleLocator.fill('some default tag');
  await publishButtonLocator.click();
  await expect(commentsSectionLocator).toBeVisible();
});