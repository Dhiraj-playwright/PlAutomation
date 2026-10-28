import {test,expect} from '@playwright/test'
test('ScreenShots',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveScreenshot('emptyPage.jpg')
    await page.locator(".form-control").first().fill("Dhiraj")
    await expect(page).toHaveScreenshot("addedScreenShot.jpg")

})