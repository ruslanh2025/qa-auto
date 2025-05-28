import { test, expect } from '@playwright/test'

test('CO-2 sign in with existing user', {
    tag: '@sign-in'
}, async ({page}) => {
    const signInHeadingLocator = page.getByRole('heading', { name: 'Sign in' });
    const emailLocator = page.locator('[placeholder="Email"]');
    const passwordLocator = page.locator('[placeholder="Password"]');
    const signInButtonLocator = page.getByRole('button', { name: 'Sign in' });
    const newArticleButtonLocator = page.locator('[href="/editor"]');

    await page.goto('https://demo.learnwebdriverio.com/login')
    await expect(signInHeadingLocator).toBeVisible()
    await emailLocator.fill('rocky-2025@example.com')
    await passwordLocator.fill('rocky-2025')
    await signInButtonLocator.click()
    await expect(newArticleButtonLocator).toBeVisible();
});