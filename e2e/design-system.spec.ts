import { test, expect } from '@playwright/test';

test.describe('Design System E2E Tests', () => {
  test('should load Storybook', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Storybook/);
  });

  test('should render component stories', async ({ page }) => {
    await page.goto('/');

    // Check if Storybook UI is loaded
    const storybookContainer = page.locator('#storybook-preview-wrapper');
    await expect(storybookContainer).toBeVisible();
  });

  test('should navigate between stories', async ({ page }) => {
    await page.goto('/');

    // Wait for Storybook to load
    await page.waitForLoadState('networkidle');

    // Check if sidebar is visible
    const sidebar = page.locator('[aria-label="Storybook sidebar"]');
    await expect(sidebar).toBeVisible({ timeout: 10000 });
  });

  test('should be accessible', async ({ page }) => {
    await page.goto('/');

    // Basic accessibility check
    await page.waitForLoadState('networkidle');

    // Check for proper heading structure
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').count();
    expect(headings).toBeGreaterThan(0);

    // Check for proper alt text on images
    const imagesWithoutAlt = await page.locator('img:not([alt])').count();
    expect(imagesWithoutAlt).toBe(0);
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });
});
