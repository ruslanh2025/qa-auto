import { test, expect } from '@playwright/test'

test(
    'TQ-2, check box functionality',{
        tag: '@check box'
    }, async ({page}) => {
        const baseUrl = 'https://demoqa.com/checkbox';
        const homeButtonLocator = page.locator("//*[text()='Home']/../../button");
        const desktopButtonLocator = page.locator("//*[text()='Desktop']/../../button");
        const notesCheckBoxLocator = page.locator("//*[text()='Notes']");
        const resultLocator = page.locator('//*[@id="result"]');
        const documentsButtonLocator = page.locator("//*[text()='Documents']/../../button");
        const workSpaceCheckBoxLocator = page.locator("//*[text()='WorkSpace']");
        const downloadsLocator = page.locator("//*[text()='Downloads']/../../button");
        const excelFileCheckBoxLocator = page.locator("//*[text()='Excel File.doc']");

        await page.goto(baseUrl);
        await homeButtonLocator.click();
        await desktopButtonLocator.click();
        await notesCheckBoxLocator.check();
        await expect(resultLocator).toContainText('You have selected :notes');
        await documentsButtonLocator.click();
        await workSpaceCheckBoxLocator.check();
        await expect(resultLocator).toContainText('You have selected :notesworkspacereactangularveu');
        await downloadsLocator.click();
        await excelFileCheckBoxLocator.check();
        await expect(resultLocator).toContainText('You have selected :notesworkspacereactangularveuexcelFile');
    });