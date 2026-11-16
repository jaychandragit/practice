import {test,page} from '@playwright/test';
test ("webtable practice", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")

})