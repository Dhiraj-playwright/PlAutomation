import {test,expect} from '@playwright/test'

test('RadioCheck',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill("Dhiraj")
    await page.locator("[class='form-control']").nth(1).fill("dhiraj@gmail.com")
    await page.locator("#phone").fill("8208514648")
    await page.locator("textarea.form-control").fill("AP Rajapur, Tal Tasgaon, Dist Sangli")
    await page.locator('#male').click()
    await page.waitForTimeout(3000)
    const days=await page.locator("[value='thursday']")
    await days.check()
    await page.waitForTimeout(3000)
    let cndtn=days.isChecked()
    console.log(cndtn)
    await page.waitForTimeout(3000)
})