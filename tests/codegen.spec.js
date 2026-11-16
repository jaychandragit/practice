import { test } from '@playwright/test';

test('test @sanity', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('jaychandra.mca@gmail.com');
  await page.locator('#loginpassword').fill('Chandra@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});