import {test,expect} from '@playwright/test'
import path from 'path'
test("Assertion",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    const nameBox = await page.locator("[placeholder='Enter Name']")
    await expect(nameBox).toBeEnabled()
    await nameBox.fill("Dhiraj")
    const gender= await page.locator(".form-check input").nth(0)
    await expect(gender).toBeEnabled()
    await expect(gender).not.toBeChecked()
    await gender.check()
    await expect(gender).toBeChecked()
    await expect(gender).toBeVisible()
    const homeLink=await page.getByRole('link',{name:'Home'}).nth(2)
    await expect(homeLink).toBeEnabled()
    await homeLink.click()
    await page.waitForTimeout(3000)
    const genderText=await page.locator(".form-check-label").first()
    await expect(genderText).toHaveText('Male')
    const subTtl=await page.locator(".description span")
    await expect(subTtl).toContainText("Selenium")
    await console.log(await subTtl.textContent())

})

test('Singleframes',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")
    await expect(page).toHaveURL("https://demo.automationtesting.in/Frames.html#google_vignette")
    await expect(page).toHaveTitle("Frames") 
    const frame=await page.frameLocator("#singleframe")
    await frame.locator(".col-xs-6 input").first().fill("Dhiraj")
    await page.waitForTimeout(3000)

})

test("MultiFrame",async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")
    const nstFrm=await page.getByText("Iframe with in an Iframe")
    await expect(nstFrm).toBeVisible()
    await expect(nstFrm).toBeEnabled()
    await expect(nstFrm).toHaveText("Iframe with in an Iframe")
    await expect(nstFrm).toContainText("Iframe")
    await nstFrm.click()
    const fr1= await page.frameLocator("[src='MultipleFrames.html']")
    const fr2= await fr1.frameLocator("[src='SingleFrame.html']")
    await fr2.locator(".col-xs-6 input").last().fill("Dhiraj")
    await page.waitForTimeout(3000)


})

test("Alerts",async({page})=>
{
    page.on('dialog',(d1)=>
    {
        if(d1.type()==='alert')
        {
            d1.accept()
        }else if(d1.type()==='confirm')
        {
            d1.dismiss()
        }else if(d1.type()==='prompt')
        {
            d1.accept("Dhiraj is testing")
        }
    })
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.locator("#alertBtn").first().click()
    await page.locator("#confirmBtn").first().click()
    await page.getByText("Prompt Alert").click()
    await page.waitForTimeout(3000)
})

test("NewTab",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByRole('button',{name:'New Tab'}).click()
    const newTab=page.waitForEvent('popup')
    const tab1= await newTab
    let msg=await tab1.getByText("SDET-QA Blog")
    console.log(await msg.textContent())
    await page.bringToFront()
    
    
    await page.getByRole('button',{name:'New Tab'}).click()
    const tab2=await newTab
    let msg2=await tab2.getByText("SDET-QA Blog")
    console.log(await `This is ${await msg2.textContent()} message 2`)
    await page.waitForTimeout(3000)
})

test('NewWindow',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByText("Popup Windows").click()
    const newWin= page.waitForEvent('popup')
    const page1= await newWin
    let msg1=await page1.getByText("Downloads").first()
    console.log(await msg1.textContent())
    await page.waitForTimeout(3000

    )
})

test('dropdown @sanity',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    let cntrDD=await page.locator("Select.form-control").first()
    await expect(cntrDD).toBeVisible()
    await expect(cntrDD).toHaveCount(1)
    await expect(cntrDD).toContainText('Canada')
    await cntrDD.selectOption({index:2})
    await page.waitForTimeout(3000)
    await cntrDD.selectOption('India')
    await page.waitForTimeout(3000)
    await cntrDD.selectOption({value:"china"})
    await page.waitForTimeout(3000)
    await cntrDD.selectOption({label:'Germany'})
    await page.waitForTimeout(3000)
    await expect(cntrDD).toHaveValue('germany')
    console.log("Test Dada")
})

test("mouseAction @regression",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let pointMe=await page.getByText("Point Me")
    await pointMe.scrollIntoViewIfNeeded()
    await pointMe.hover()
    await page.waitForTimeout(3000)
    let copyText=await page.getByText("Copy Text")
    await copyText.dblclick()
    let msg1=await page.locator("input#field2")
    await expect(msg1).toHaveValue("Hello World!")

    let src= await page.locator("div#draggable")
    let dest= await page.locator("div#droppable")
    await src.scrollIntoViewIfNeeded()
    await src.hover()
    await page.mouse.down()
    await dest.scrollIntoViewIfNeeded()
    await dest.hover()
    await page.mouse.up()
    await page.waitForTimeout(3000)

})

test('keyboardAction',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let name=await page.locator('input#name').fill('d')
    await page.keyboard.type("hiraj")
    await page.keyboard.press('Tab')
    await page.keyboard.type("Jadhav")
    await page.keyboard.press('Control+a')
    await page.keyboard.press('Control+c')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+v')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Backspace')
    await page.waitForTimeout(3000)
    await page.keyboard.press('ArrowLeft')
    await page.waitForTimeout(3000)

})

test('fileUpload',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let file1=await path.join(__dirname,'../testdata/img.jpg')
    let location=await page.locator("input#singleFileInput")
    await location.scrollIntoViewIfNeeded()
    await location.setInputFiles(file1)
    await page.waitForTimeout(3000)
    await page.getByText("Upload Single File").click()
    await page.waitForTimeout(3000)

    let file2= await path.join(__dirname,'../testdata/KingFisher.jpg')
    await page.locator("input#multipleFilesInput").setInputFiles([file1,file2])
    await page.getByText("Upload Multiple Files").click()
    await page.waitForTimeout(3000)

})

test('fileDownload',async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generatePdf").click()
    const downloadHandler=page.waitForEvent('download')
    await page.locator("#pdfDownloadLink").click()
    const file1= await downloadHandler
    const file1Name=file1.suggestedFilename()
    const dirPath=path.join(__dirname,'../downloads')
    const filePath=path.join(dirPath,file1Name)
    await file1.saveAs(filePath)
})