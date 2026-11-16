import {test} from "@playwright/test";
test("naukri", async ({page})=>{
    await page.goto("https://www.naukri.com/");
    await page.getByTitle("Jobseeker Login").click();
    await page.getByPlaceholder("Enter your active Email ID / Username").fill("jaychandra.qa@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("Sravani79");
   // let ex=await page.getByText("Login").allTextContents();
   // console.log(ex);
   await page.getByText("Login").nth(2).click();
   getByRole('button', { name: 'Open profile menu' }).click();
   await page.pause();
  
    

})