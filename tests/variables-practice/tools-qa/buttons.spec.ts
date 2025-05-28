import { test, expect } from '@playwright/test'

test('TQ-4, buttons functionality',{tag:'@buttons'},
    async({page}) => {
        const baseUrl = 'https://demoqa.com/buttons';
        const doubleClickButtonLocator = page.locator('//button[@id="doubleClickBtn"]');
        const doubleClickMessageLocator = page.locator('//p[@id="doubleClickMessage"]');
        const rightClickButtonLocator = page.locator('//button[@id="rightClickBtn"]');
        const rightClickMessageLocator = page.locator('//p[@id="rightClickMessage"]');
        const clickMeButtonLocator = page.locator("//button[text()='Click Me']");
        const dynamicClickMessageLocator = page.locator('//p[@id="dynamicClickMessage"]');

        await page.goto(baseUrl);
        await doubleClickButtonLocator.dblclick();
        await expect(doubleClickMessageLocator).toContainText('You have done a double click');
        await rightClickButtonLocator.click({button: 'right'});
        await expect(rightClickMessageLocator).toContainText('You have done a right click');
        await clickMeButtonLocator.click();
        await expect(dynamicClickMessageLocator).toContainText('You have done a dynamic click');
    });