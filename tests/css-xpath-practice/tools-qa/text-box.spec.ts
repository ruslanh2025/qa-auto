import { test, expect} from '@playwright/test'
import { faker } from '@faker-js/faker'

test('TQ-1, text box functionality', {
    tag: '@text box'
}, async ({page}) => {
    const fullUserName = faker.person.fullName();
    const email = faker.internet.email();
    const currentAddress = faker.location.streetAddress();
    const permanentAddress = faker.location.secondaryAddress();

    await page.goto('https://demoqa.com/text-box');
    await page.locator('//input[@id="userName"]').fill(fullUserName);
    await page.locator('//input[@id="userEmail"]').fill(email);
    await page.locator('//textarea[@id="currentAddress"]').fill(currentAddress);
    await page.locator('//textarea[@id="permanentAddress"]').fill(permanentAddress);
    await page.locator('//button[@id="submit"]').click();

    await expect(page.locator('//p[@id="name"]')).toContainText('Name');
    await expect(page.locator('//p[@id="email"]')).toContainText('Email');
    await expect(page.locator('//p[@id="currentAddress"]')).toContainText('Current Address');
    await expect(page.locator('//p[@id="permanentAddress"]')).toContainText('Permananet Address');
})