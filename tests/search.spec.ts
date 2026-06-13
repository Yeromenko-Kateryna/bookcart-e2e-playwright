import { test, expect } from '@playwright/test';

test('search field should accept text', async ({ page }) => {

  await page.goto('https://bookcart.azurewebsites.net/');

  const searchInput = page.getByPlaceholder('Search books or authors');

  await searchInput.fill('Harry Potter');

  await expect(searchInput).toHaveValue('Harry Potter');

});