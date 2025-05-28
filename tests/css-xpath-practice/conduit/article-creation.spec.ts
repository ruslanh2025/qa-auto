import { test, expect } from '@playwright/test'

test.beforeEach('Sign Up', async ({page}) => {
    const timeStamp = Date.now();
    const userName = `user${timeStamp}`;
    const email = `user-${timeStamp}@test.com`;
    const password = `pass-${timeStamp}`

    await page.goto('https://demo.learnwebdriverio.com/register');
    await page.fill('[placeholder="Username"]', userName);
    await page.fill('[placeholder="Email"]', email);
    await page.fill('[placeholder="Password"]', password);
    await page.click('button');
    await expect(page.locator('[href="/editor"]')).toBeVisible();
});

test('CO-3 new article can be created and posted', {
    tag: '@article'
}, async ({page}) => {
    await page.locator('[href="/editor"]').click()
    await page.locator('[data-qa-id="editor-title"]').fill('Test Article')
    await page.locator('[data-qa-id="editor-description"]').fill('something interesting')
    await page.locator('[placeholder="Write your article (in markdown)"]').fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    await page.locator('[data-qa-id="editor-tags"]').fill('some default tag')
    await page.locator('[data-qa-id="editor-publish"]').click()
    await expect(page.locator('[class="card-block"]')).toBeVisible();
});