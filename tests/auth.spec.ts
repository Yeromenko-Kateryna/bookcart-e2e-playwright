import { test, expect } from '@playwright/test';
test('User should be able to register', async ({ page }) => {
    await page.goto('https://bookcart.azurewebsites.net/');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await page.getByText('Register').click();
    await expect(page.getByPlaceholder('Confirm Password')).toBeVisible();
    const username = `user${Date.now()}`;
    const password = 'Qa123456!';
    await page.getByPlaceholder('First name').fill('Kateryna');
    await page.getByPlaceholder('Last name').fill('Yeromenko');
    await page.getByPlaceholder('User name').fill(username);
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill(password);
    await page.getByPlaceholder('Confirm Password').fill(password);
    await page.getByLabel('Female').check();
    const registerResponsePromise = page.waitForResponse(response =>
  response.url().includes('/api/user') && response.status() === 200
);

await page.getByRole('button', { name: 'Register' }).click();
await registerResponsePromise;
});