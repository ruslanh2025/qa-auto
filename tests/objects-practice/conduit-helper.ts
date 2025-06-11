import { Page, expect } from '@playwright/test'
import { faker } from '@faker-js/faker';

// creating function for the Registration page, to Sing up new user
export function registrationPage(page: Page) {
    this.userNameLocator = page.locator('[placeholder="Username"]');
    this.emailLocator = page.locator('[placeholder="Email"]');
    this.passwordLocator = page.locator('[placeholder="Password"]');
    this.signUpButtonLocator = page.locator("//button[contains(text(), 'Sign up')]");
};

// creating function to generate fake user data each time to create new unique user
export function fakerUserDataForSignUp() {
    this.timeStamp = Date.now();
    this.userName = `user${this.timeStamp}`;
    this.email = `user-${this.timeStamp}@test.com`;
    this.password = `pass-${this.timeStamp}`;
};

// locators for New Article Creation
const newArticleLinkLocator = (page: Page) => page.locator('[href="/editor"]');
const titleInputLocator = (page: Page) => page.locator('[data-qa-id="editor-title"]');
const descriptionInputLocator = (page: Page) => page.locator('[data-qa-id="editor-description"]');
const articleBodyInputLocator = (page: Page) => page.locator('[placeholder="Write your article (in markdown)"]');
const tagsInputLocator = (page: Page) => page.locator('[data-qa-id="editor-tags"]');
const publishButtonLocator = (page: Page) => page.locator('[data-qa-id="editor-publish"]');
const commentsBlockLocator = (page: Page) => page.locator('[class="card-block"]');

// new article creation
export async function newArticleCreation(
    page: Page,
    title: string = faker.lorem.words(3),
    description: string = faker.lorem.sentence(),
    body: string = faker.lorem.paragraphs(2),
    tags: string = faker.lorem.word(1)
  ) {
      await newArticleLinkLocator(page).click();
      await page.waitForTimeout(3000);
      await titleInputLocator(page).fill(title);
      await descriptionInputLocator(page).fill(description);
      await articleBodyInputLocator(page).fill(body);
      await tagsInputLocator(page).fill(tags);
      await publishButtonLocator(page).click();
      await expect(commentsBlockLocator(page)).toBeVisible();
  };