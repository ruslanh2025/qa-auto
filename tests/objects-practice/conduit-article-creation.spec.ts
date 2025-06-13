import { test, expect, Page } from '@playwright/test'
import {
  RegistrationPage,
  FakerUserDataForSignUp,
  newArticleCreation,
} from "./conduit-helper";

test('new article can be created', async ({ page }) => {
    const registerPage = new RegistrationPage(page);
    const fakeData = new FakerUserDataForSignUp()
    await page.goto("https://demo.learnwebdriverio.com/register");
    // Signing up new user
    await registerPage.userNameLocator.fill(fakeData.userName);
    await registerPage.emailLocator.fill(fakeData.email);
    await registerPage.passwordLocator.fill(fakeData.password);
    await registerPage.signUpButtonLocator.click();
    await page.waitForTimeout(2000);
    console.log("Current URL after registration:", page.url());
    // New Article creation
    await newArticleCreation(page)
    await expect(page.locator('[class="card-block"]')).toBeVisible();
})