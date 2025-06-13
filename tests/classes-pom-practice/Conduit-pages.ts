// Classes to use for testing Conduit

import { Page, Locator } from "@playwright/test";

export class YourFeed {
  page: Page;
  yourFeedLocator: Locator;
    
  constructor(page: Page) {
    this.page= page
    this.yourFeedLocator = page.locator('[href="/my-feed"]');
  }
    YourFeedLinkClick(page: Page) {
        this.yourFeedLocator.click()
    }
}

export class GlobalFeed{
    page: Page;
    globalFeedLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.globalFeedLocator = page.getByRole("link", { name: "Global Feed" });
    }
    GlobalFeedLinkClick(page: Page) {
        this.globalFeedLocator.click()
    }
}

export class PopularTags{
    page: Page;
    popularTagsLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.popularTagsLocator = page.getByRole("link", { name: "qa", exact: true });
    }
    PopularTagsLinkClick(page: Page) {
        this.popularTagsLocator.click()
    }
}

export class FirstArticle{
    page: Page;
    firstArticleLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.firstArticleLocator = page.locator('[data-qa-type="preview-title"]').first();
    }

    FirstArticleClick(page: Page) {
        page.waitForSelector('[data-qa-type="preview-title"]');
        this.firstArticleLocator.click()
    }
}