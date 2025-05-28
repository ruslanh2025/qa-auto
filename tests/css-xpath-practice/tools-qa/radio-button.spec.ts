import { test, expect } from '@playwright/test'

test('TQ-3, radio buttons functionality', {tag: '@radio button'},
    async({page}) => {
        await page.goto('https://demoqa.com/radio-button')
        await page.locator('//label[text()="Yes"]').check();
        await expect(page.locator("//p[text()='You have selected ']//span[text()='Yes']")).toContainText('Yes');
    }
);