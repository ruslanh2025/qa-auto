import { test, expect} from '@playwright/test'

test('CO-1 sign up new user',{
    tag: '@sign up'
}, async ({page}) => {
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