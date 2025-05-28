import { test, expect } from '@playwright/test';

test('PW-1 - system requirements section to be visible', {
  tag: '@navigation',
}, async ({ page }) => {
  const getStartedButtonLocator = page.locator('[class="getStarted_Sjon"]');
  const systemReqLinkLocator = page.locator('[href="#system-requirements"][class*="table-of-contents__link"]');
  const systemReqHeaderLocator = page.locator('#system-requirements');

  await page.goto('https://playwright.dev/');
  await getStartedButtonLocator.click();
  await systemReqLinkLocator.click();
  await expect(systemReqHeaderLocator).toContainText('System requirements');
});

test('PW-2 - search for page', {
  tag: '@search'
}, async ({ page }) => {
  const searchFieldLocator = page.locator('[aria-label="Search (Command+K)"]');
  const searchFieldInputLocator = page.locator('#docsearch-input');
  const searchResultLocator = page.locator('[href="/docs/test-annotations#tag-tests"]');

  await page.goto('https://playwright.dev/');
  await searchFieldLocator.click();
  await searchFieldInputLocator.fill('tags tests');
  await searchResultLocator.click();
  await expect(page.getByRole('heading', { name: 'Tag testsDirect link to Tag' })).toBeVisible();
});

test('PW-3 - links open external sites', {
  tag: '@external-sites'
}, async ({ page }) => {
  const communityLinkLocator = page.getByRole('link', { name: 'Community' });
  const bugReportsLinkLocator = page.getByRole('link', { name: 'Bug Reports' });

  await page.goto('https://playwright.dev/');
  await communityLinkLocator.click();
  const page1Promise = page.waitForEvent('popup');
  await bugReportsLinkLocator.click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Sign in to GitHub' })).toBeVisible();
});

test('PW-4 - hovering the dropdown and items selection', {
  tag: '@hover'
}, async ({ page }) => {
  const nodeJsButtonLocator = page.getByRole('button', { name: 'Node.js' });
  const nodeJsLinkLocator = page.getByRole('link', { name: 'Node.js' });
  const pythonButtonLocator = page.getByRole('button', { name: 'Python' });
  const javaButtonLocator = page.getByRole('button', { name: 'Java' });

  await page.goto('https://playwright.dev/');
  await nodeJsButtonLocator.hover();
  await expect(nodeJsLinkLocator).toBeVisible();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' }).click();
  await expect(page).toHaveURL('https://playwright.dev/python/');
  await pythonButtonLocator.hover();
  await expect(page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python', exact: true })).toBeVisible();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
  await expect(page).toHaveURL('https://playwright.dev/java/');
  await javaButtonLocator.hover();
  await expect(page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java', exact: true })).toBeVisible();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: '.NET' }).click();
  await expect(page).toHaveURL('https://playwright.dev/dotnet/');
});

test('PW-5 - social network links open', {
  tag: '@social-links'
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Stack Overflow' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://stackoverflow.com/questions/tagged/playwright');

  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Discord', exact: true }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://discord.com/servers/playwright-807756831384403968');

  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Twitter' }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL('https://x.com/playwrightweb');

  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'LinkedIn' }).click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL('https://www.linkedin.com/company/playwrightweb');
});