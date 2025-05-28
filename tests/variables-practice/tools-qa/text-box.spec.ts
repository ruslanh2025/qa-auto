import { test, expect} from '@playwright/test'
import { faker } from '@faker-js/faker'

test('TQ-1, text box functionality', {
    tag: '@text box'
}, async ({page}) => {
    const fullUserNameFaker = faker.person.fullName();
    const emailFaker = faker.internet.email();
    const currentAddressFaker = faker.location.streetAddress();
    const permanentAddressFaker = faker.location.secondaryAddress();
    const baseUrl = 'https://demoqa.com/text-box';
    const fullUserNameLocator = page.locator('//input[@id="userName"]');
    const emailLocator = page.locator('//input[@id="userEmail"]');
    const currentAddressLocator = page.locator('//textarea[@id="currentAddress"]');
    const permanentAddressLocator = page.locator('//textarea[@id="permanentAddress"]');
    const submitButtonLocator = page.locator('//button[@id="submit"]');

    await page.goto(baseUrl);
    await fullUserNameLocator.fill(fullUserNameFaker);
    await emailLocator.fill(emailFaker);
    await currentAddressLocator.fill(currentAddressFaker);
    await permanentAddressLocator.fill(permanentAddressFaker);
    await submitButtonLocator.click();

    await expect(page.locator('//p[@id="name"]')).toContainText('Name');
    await expect(page.locator('//p[@id="email"]')).toContainText('Email');
    await expect(page.locator('//p[@id="currentAddress"]')).toContainText('Current Address');
    await expect(page.locator('//p[@id="permanentAddress"]')).toContainText('Permananet Address');
});