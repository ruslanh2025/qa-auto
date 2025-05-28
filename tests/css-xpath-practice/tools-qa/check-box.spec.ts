import { test, expect } from '@playwright/test'

// use reusable Xpath - done
test(
    'TQ-2, check box functionality',{
        tag: '@check box'
    }, async ({page}) => {
        await page.goto('https://demoqa.com/checkbox');
        await page.locator("//*[text()='Home']/../../button").click();
        await page.locator("//*[text()='Desktop']/../../button").click();
        await page.locator("//*[text()='Notes']").check();
        await expect(page.locator('//*[@id="result"]')).toContainText('You have selected :notes');

        await page.locator("//*[text()='Documents']/../../button").click();
        await page.locator("//*[text()='WorkSpace']").check();
        await expect(page.locator('//*[@id="result"]')).toContainText('You have selected :notesworkspacereactangularveu');

        await page.locator("//*[text()='Downloads']/../../button").click();
        await page.locator("//*[text()='Excel File.doc']").check();
        await expect(page.locator('//*[@id="result"]')).toContainText('You have selected :notesworkspacereactangularveuexcelFile');
    });