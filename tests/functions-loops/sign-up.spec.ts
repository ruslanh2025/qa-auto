/*
Переписати локатори зі змінних на функції.  (в одному тест файлі для webdrive
Пробуйте обʼєднувати дії на сторінці у функції.
*/

import { test, expect, Page } from '@playwright/test'

const userNameLocator = (page: Page) => page.locator('[placeholder="Username"]');
const emailLocator = (page: Page) => page.locator('[placeholder="Email"]');
const passwordLocator = (page: Page) => page.locator('[placeholder="Password"]');

test('CO-1 sign up new user',{
    tag: '@sign up'
}, async ({page}) => {
    const timeStamp = Date.now();
    const userName = `user${timeStamp}`;
    const email = `user-${timeStamp}@test.com`;
    const password = `pass-${timeStamp}`

    await page.goto('https://demo.learnwebdriverio.com/register');
    await userNameLocator(page).fill(userName);
    await emailLocator(page).fill(email);
    await passwordLocator(page).fill(password);
    await page.locator('button').click();
    await expect(page.locator('[href="/editor"]')).toBeVisible();
});