import { test, expect } from '@playwright/test'

test('TQ-3, radio buttons functionality', {tag: '@radio button'},
    async({page}) => {
        const baseUrl = 'https://demoqa.com/radio-button';
        const yesCheckBoxLocator = page.locator('//label[text()="Yes"]');
        const youHaveSelectedTextLocator = page.locator("//p[text()='You have selected ']//span[text()='Yes']");

        await page.goto(baseUrl)
        await yesCheckBoxLocator.check();
        await expect(youHaveSelectedTextLocator).toContainText('Yes');
    });