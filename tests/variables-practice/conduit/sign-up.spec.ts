import { test, expect} from '@playwright/test'

test('CO-1 sign up new user',{
    tag: '@sign up'
}, async ({page}) => {
    const timeStamp = Date.now();
    const userNameFaker = `user${timeStamp}`;
    const emailFaker = `user-${timeStamp}@test.com`;
    const passwordFaker = `pass-${timeStamp}`;
    const userNameLocator = page.locator('[placeholder="Username"]');
    const emailLocator = page.locator('[placeholder="Email"]');
    const passwordLocator = page.locator('[placeholder="Password"]');
    const signUpButtonLocator = page.locator('button');
    const newArticleButtonLocator = page.locator('[href="/editor"]');

    await page.goto('https://demo.learnwebdriverio.com/register');
    await userNameLocator.fill(userNameFaker);
    await emailLocator.fill(emailFaker);
    await passwordLocator.fill(passwordFaker);
    await signUpButtonLocator.click();
    await expect(newArticleButtonLocator).toBeVisible();
});