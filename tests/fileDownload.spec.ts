import {test,expect} from '@playwright/test'
import path from 'path'
test("FileDownload",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.waitForTimeout(3000)
    await page.locator("#generatePdf").click()
    const downloadFiles= page.waitForEvent('download')
    await page.locator("#pdfDownloadLink").click()
    const file1=await downloadFiles
    const dirPath=path.join(__dirname,'../dowmloads')
    const fileName= file1.suggestedFilename()
    const filePath=path.join(dirPath,fileName)
    await file1.saveAs(filePath)
})


test('TXTDownload',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generateTxt").click()
    const downloadResult= page.waitForEvent('download')
    await page.locator("#txtDownloadLink").click()
    const filednld=await downloadResult
    const txtFile=filednld.suggestedFilename()
    const path1= path.join(__dirname,'../downloads')
    const filepath=path.join(path1,txtFile)
    await filednld.saveAs(filepath)


})