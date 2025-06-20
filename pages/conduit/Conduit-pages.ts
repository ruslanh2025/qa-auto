// Classes to use for testing Conduit

import { Page, Locator } from "@playwright/test";

export class HomePage {
  page: Page;
  yourFeedLocator: Locator;
  globalFeedLocator: Locator;
  popularTagsLocator: Locator;
  firstArticleLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yourFeedLocator = page.locator('[href="/my-feed"]');
    this.globalFeedLocator = page.getByRole("link", { name: "Global Feed" });
    this.popularTagsLocator = page.getByRole("link", {
      name: "qa",
      exact: true,
    });
    this.firstArticleLocator = page
      .locator('[data-qa-type="preview-title"]')
      .first();
  }
  async yourFeedLinkClick(page: Page) {
    await this.yourFeedLocator.click();
  }
  async globalFeedLinkClick(page: Page) {
    await this.globalFeedLocator.click();
  }
  async popularTagsLinkClick(page: Page) {
    await this.popularTagsLocator.click();
  }
  async firstArticleClick(page: Page) {
    await page.waitForSelector('[data-qa-type="preview-title"]');
    await this.firstArticleLocator.click();
  }
}