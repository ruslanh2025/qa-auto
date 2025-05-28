import { test, expect } from '@playwright/test'

test('CO-2 sign in with existing user', {
    tag: '@sign-in'
}, async ({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/login')
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible()
    await page.locator('[placeholder="Email"]').fill('rocky-2025@example.com')
    await page.locator('[placeholder="Password"]').fill('rocky-2025')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await expect(page.locator('[href="/editor"]')).toBeVisible();
});