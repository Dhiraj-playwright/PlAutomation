import {test,expect} from '@playwright/test'
test('AssertTest',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    const submitBtn=await page.locator("button.submit-btn")
    await submitBtn.scrollIntoViewIfNeeded()
    await expect(submitBtn).toBeVisible()
    await expect(submitBtn).toBeEnabled()
    await expect(submitBtn).toHaveText("Submit")
    await expect(submitBtn).toContainText("Submit")
    await submitBtn.click()
    await page.waitForTimeout(3000)

})