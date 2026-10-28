import {test,expect} from '@playwright/test'
import path from 'path'

test('singleFileUpload',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let filePath= path.join(__dirname,'../testdata/img.jpg')
    await page.locator("input#singleFileInput").setInputFiles(filePath)
    await page.getByText("Upload Single File").click()
    await page.waitForTimeout(3000)

    let path1 = await path.join(__dirname,'../testdata/KingFisher.jpg')
    await page.locator("#multipleFilesInput").setInputFiles([path1,filePath])
    await page.waitForTimeout(3000)
    await page.getByText("Upload Multiple Files").click()
    await page.waitForTimeout(3000)
    console.log(__dirname);

})

