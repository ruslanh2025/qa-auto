import { test, expect } from '@playwright/test'

test('TQ-4, buttons functionality',{tag:'@buttons'},
    async({page}) => {
        await page.goto('https://demoqa.com/buttons');

        await page.locator('//button[@id="doubleClickBtn"]').dblclick();
        await expect(page.locator('//p[@id="doubleClickMessage"]')).toContainText('You have done a double click');

        await page.locator('//button[@id="rightClickBtn"]').click({button: 'right'});
        await expect(page.locator('//p[@id="rightClickMessage"]')).toContainText('You have done a right click');

        await page.locator("//button[text()='Click Me']").click();
        await expect(page.locator('//p[@id="dynamicClickMessage"]')).toContainText('You have done a dynamic click');
    }
);