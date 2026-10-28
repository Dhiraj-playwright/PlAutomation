import {test,expect} from '@playwright/test'

test.only('Login Test',async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.getByAltText("Practice Test Automation")
    console.log("Present")
    
    await page.getByRole('textbox',{name:'Username'}).fill("student")
    await page.getByLabel("Password").fill("Password123")
    await page.getByText("Submit").nth(0).click()
    await page.waitForTimeout(2000)

})

test('Logout Test',async({page})=>{
    await page.locator("a.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()
    await page.waitForTimeout(3000)
})