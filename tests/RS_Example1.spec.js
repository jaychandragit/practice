const { test, expect } = require('@playwright/test');
test('@Web Browser Context Playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await userName.fill('rahulshetty');
    await page.locator("[type='password']").fill('Learning@830$3mK2');
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    await cardTitles.first().waitFor();
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});