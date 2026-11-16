const {test,expect}=require('@playwright/test');

test("pw locators",async ({page})=>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123");
await page.getByRole('button',{name:'Login'}).click();

const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
console.log(name);

console.log(await page.title());

await page.getByText('PIM').click();
await page.getByText('Add Employee').click();
await page.getByPlaceholder('First Name').fill("Jaya");
await page.getByPlaceholder('Last Name').fill("Chandra");
await page.getByText('Save').click();

await page.goto("https://testautomationpractice.blogspot.com/");
await page.getByLabel('Name:').fill("test");
}
)

