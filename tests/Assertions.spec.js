const {test,expect}=require ('@playwright/test')

test("Assertons Test", async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//1.expect(page).toHaveURL()                page has url
expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//2.expect(locator).toBeVisible()            element is visible
const logo=page.getByAltText('company-branding');
await expect(logo).toBeVisible();

//3.expect(locator).toBeEnabled()            control is enabled
const Uname= page.getByPlaceholder('Username')
await expect(Uname).toBeEnabled();
await Uname.fill("Admin");


await page.getByPlaceholder('Password').fill("admin123");

await page.getByRole('button',{name:'Login'}).click();

const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
await expect(await page.getByText(name)).toBeVisible();
console.log(name);

console.log(await page.title());

//4.expect (page).toHaveTitle()               page has title
expect (page).toHaveTitle("OrangeHRM")

await page.getByText('PIM').click();
await page.getByText('Add Employee').click();
await page.getByPlaceholder('First Name').fill("Jaya");
await page.getByPlaceholder('Last Name').fill("Chandra");
await page.getByText('Save').click();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

//expect(locator).toBeChecked();      select radio button
await page.locator(".radiotextsty").last().click();
await page.locator('#okayBtn').click();
expect(page.locator(".radiotextsty").last()).toBeChecked(); 

//expect(locator).toBeChecked();      select check box
await page.locator('#terms').click();
expect(page.locator('#terms')).toBeChecked();

//expect(locator).toHaveAttribute()  element has attribute

const loginBtn=await page.locator('#signInBtn')
await expect(loginBtn).toHaveAttribute('type','submit');

//expect(locator).toHaveText()     element matches text
await expect(loginBtn).toHaveText('Sign In')

//expect(locator).toContainText()     element contains text
await expect(loginBtn).toContainText('Sign')

//expect(locator).toHaveValue(value)  Input has a value
const userName= await page.locator('#username');
await userName.fill('abc@gmail.com');
await expect(userName).toHaveValue('abc@gmail.com')

//expect(locator).toHaveCount()  List of elements has given length
const options=await page.locator('.form-control option')
console.log(await options.count())
await expect(options).toHaveCount(3);

})