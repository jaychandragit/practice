const { test, expect } = require('@playwright/test')

test("Locators @sanity", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill("jaychandra.mca@gmail.com");
    await page.fill('#loginpassword', "Chandra@123");
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();
})