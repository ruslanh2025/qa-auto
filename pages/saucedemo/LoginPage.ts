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
  
    async goToSaucedemoPage() {
    await this.page.goto("https://www.saucedemo.com/");
    }
    
    async loginUser(userData: { username: string; password: string}) {
        await this.userNameInputLocator.fill(userData.username);
        await this.passwordInputLocator.fill(userData.password);
        await this.loginButtonLocator.click();
    }
}