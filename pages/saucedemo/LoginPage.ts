import { Page, Locator } from '@playwright/test'

// Going to Login Page and login user
export class LoginPage {
  page: Page;
  userNameInputLocator: Locator;
  passwordInputLocator: Locator;
  loginButtonLocator: Locator;

  constructor(page: Page) {
      this.page = page;
      this.userNameInputLocator = page.locator('[data-test="username"]');
      this.passwordInputLocator = page.locator('[data-test="password"]');
      this.loginButtonLocator = page.locator('[data-test="login-button"]');
  };
  
    async goToSaucedemoPage(page: Page) {
    await this.page.goto("https://www.saucedemo.com/");
    }
    
    async loginUser(page: Page) {
        await this.userNameInputLocator.fill("standard_user");
        await this.passwordInputLocator.fill("secret_sauce");
        await this.loginButtonLocator.click();
    }
}