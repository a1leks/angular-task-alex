import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto('/');

    // Expect h1 to contain a substring.
    expect(await page.locator('h1').innerText()).toContain('User Management');

});

test('should exist at least 1 user item', async ({ page }) => {

    await page.goto('/users');

    const userItems = page.locator('.user-item');
    await expect(userItems.count()).resolves.toBeGreaterThan(0);

});

test('open profile', async ({ page }) => {

    await page.goto('/users/1');

    const profile = page.locator('lib-user-profile');
    await expect(profile).toHaveCount(1);

});

test('Profile should display correct id', async ({ page }) => {

    await page.goto('/users/2');

    const userIdElement = page.locator('.user-id');

    await expect(userIdElement).toHaveText('2');

});

test('favorite should be saved', async ({ page }) => {

    await page.goto('/users');

    const userCard = page.locator('lib-user-item').first();
    const favoriteIcon = userCard.locator('.favorite-icon');

    await expect(favoriteIcon).toHaveText(/star_border/);

    await userCard.click();

    const favoriteButton = page.locator('.favorite-btn').first();
    await favoriteButton.click();

    await page.goto('/users');

    await expect(favoriteIcon).toHaveText(/star/);

});
