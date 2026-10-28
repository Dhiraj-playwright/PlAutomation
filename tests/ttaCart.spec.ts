import {test,expect} from '@playwright/test'
import path from 'node:path'
test.describe('Upload/download',()=>
{
  test('upload',async({page})=>
  {
    test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/")
    let filePath = path.join(__dirname,'../testdata/img.jpg')
    await page.locator("#singleFileInput").setInputFiles(filePath)
    await page.waitForTimeout(3000)

    let path2= path.join(__dirname,'../testdata/KingFisher.jpg')
    await page.locator("#multipleFilesInput").setInputFiles([filePath,path2])
    await page.waitForTimeout(3000)
  })

  test('txtDownload',async({page})=>
  {
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generateTxt").click()
    let downloadHandler= page.waitForEvent('download')
    await page.locator("#txtDownloadLink").click()
    let txtFile= await downloadHandler
    let txtFileName= txtFile.suggestedFilename()
    let folder= path.join(__dirname,'../downloads')
    let filePath= path.join(folder,txtFileName)
    await txtFile.saveAs(filePath)
  })

  test('pdfDownload',async({page})=>
  {
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generatePdf").click()
    let downloadHandle= page.waitForEvent('download')
    await page.locator("#pdfDownloadLink").click()
    let pdfFile= await downloadHandle
    let filename= pdfFile.suggestedFilename()
    let folderName= path.join(__dirname,'../downloads')
    let filePath= path.join(folderName,filename)
    await pdfFile.saveAs(filePath)
  })

  test('calendar',async({page})=>
  {
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

    let date='19'
    let month='July'
    let year='1998'
    await page.locator("#first_date_picker").click()
    let monthPicker=await page.locator(".ui-datepicker-month")
    let yearPicker= await page.locator(".ui-datepicker-year")

    while(true){
     if((await monthPicker.textContent()===month)&&(await yearPicker.textContent()===year))
      {
        await page.getByText(date,{exact:true}).click()
        break

     }
     await page.locator(".ui-icon.ui-icon-circle-triangle-w").click()
    }
    await page.waitForTimeout(3000)
  })

 

  
})