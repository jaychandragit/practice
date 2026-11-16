import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('test12');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('34test');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Success', { exact: true }).click();
});