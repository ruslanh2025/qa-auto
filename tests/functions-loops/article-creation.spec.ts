/*
Написати тест який би логінився/або створював нового юзера на https://demo.learnwebdriverio.com/
І створював би три article, і потім перевіряв що всі створення aritcle є в списку your feed
*/

import { test, expect, Page } from '@playwright/test'
import { faker } from '@faker-js/faker'

// locators for Sign Up New User
const userNameLocator = (page: Page) => page.locator('[placeholder="Username"]');
const emailLocator = (page: Page) => page.locator('[placeholder="Email"]');
const passwordLocator = (page: Page) => page.locator('[placeholder="Password"]');
const signUpButtonLocator = (page: Page) => page.locator("//button[contains(text(), 'Sign up')]");

// locators for New Article Creation
const newArticleLinkLocator = (page: Page) => page.locator('[href="/editor"]');
const titleInputLocator = (page: Page) => page.locator('[data-qa-id="editor-title"]');
const descriptionInputLocator = (page: Page) => page.locator('[data-qa-id="editor-description"]');
const articleBodyInputLocator = (page: Page) => page.locator('[placeholder="Write your article (in markdown)"]');
const tagsInputLocator = (page: Page) => page.locator('[data-qa-id="editor-tags"]');
const publishButtonLocator = (page: Page) => page.locator('[data-qa-id="editor-publish"]');
const commentsBlockLocator = (page: Page) => page.locator('[class="card-block"]');

// baseUrl
const registerNewUserUrl = (page: Page) => page.goto("https://demo.learnwebdriverio.com/register");

// new user creation
async function signUpNewUser(page: Page) {
    const timeStamp = Date.now();
    const userName = `user${timeStamp}`;
    const email = `user-${timeStamp}@test.com`;
    const password = `pass-${timeStamp}`;
        await userNameLocator(page).fill(userName);
        await emailLocator(page).fill(email);
        await passwordLocator(page).fill(password);
        await signUpButtonLocator(page).click();
};

// new article creation
async function newArticleCreation(
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

// multiple articles creation
async function multipleArticleCreation(page: Page) {
    for (let i = 0; i < 3; i++) {
        await newArticleCreation(page)
    }
};

test('new articles can be created and posted', {
    tag: '@article'
},  async ({page}) => {
    await registerNewUserUrl(page);
    await signUpNewUser(page);
    await multipleArticleCreation(page);
    await expect(page.locator('[class="card-block"]')).toBeVisible();
} 
);