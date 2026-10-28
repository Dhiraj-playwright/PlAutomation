import {test,expect} from '@playwright/test'

test('RedioBtnTst',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("input#name").fill("Dhiraj")
    await page.getByPlaceholder("Enter EMail").fill("dhiraj@gmail.com")
    await page.locator('input.form-control').nth(2).fill("81208514648")
    await page.getByText("Address:").fill("Rajapur Tal tasgaon")
    await page.waitForTimeout(3000)
    const genderRad= await page.locator("[name='gender']").first()
    let condition=await expect(genderRad).not.toBeChecked()
    await console.log(condition)
    await genderRad.click()
    await page.waitForTimeout(3000)
    
    const chkBox=await page.getByText("Wednesday")
    await expect(chkBox).not.toBeChecked()
    await chkBox.click()
    await page.waitForTimeout(3000)


})