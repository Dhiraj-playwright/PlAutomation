import {test,expect} from '@playwright/test'
import path from 'path'
test('locator',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await page.locator("input.form-control").first().fill("Dhiraj")
    await page.locator("input#email").fill("Dhiraj@gmail.com")
    await page.locator("[placeholder='Enter Phone']").fill("8208514648")
    await page.locator("div.form-group textarea").fill("rajaput tal: Tasgaon")

    //radio
    let gender=await page.locator("#male")
    await expect(gender).toBeEnabled()
    await expect(gender).toBeVisible()
    await expect(gender).not.toBeChecked()
    await gender.check()
    await expect(gender).toBeChecked()

    //checkbox
    let day=await page.locator("#saturday")
    await expect(day).toBeVisible()
    await expect(day).toBeEnabled()
    await day.check()
    await expect(day).toBeChecked()

    //Single select dd
    let country=await page.locator("Select#country")
    await expect(country).toBeVisible()
    await expect(country).toContainText("Ind")
    await country.selectOption({index:1})
    await country.selectOption("Canada")
    await country.selectOption({label:'Germany'})
    await country.selectOption({value:'japan'})
    await expect(country).toHaveValue('japan')
    await page.waitForTimeout(3000)

    //multiselect dropdown
    let colors=await page.locator("Select#colors")
    await expect(colors).toBeVisible()
    await expect(colors).toBeEnabled()
    await colors.selectOption([{label:'Red'},{label:'Blue'}])
    await page.waitForTimeout(3000)
    await colors.selectOption([{index:2},{index:3},{label:'Red'}])
    await expect(colors).toHaveValue('red')
    await page.waitForTimeout(3000)

    //button
    await page.getByRole('button',{name:'Submit'}).first().click()
    await page.waitForTimeout(3000)

    //File upload
    let file1= path.join(__dirname,'../testdata/img.jpg')
    let file2=path.join(__dirname,'../testdata/KingFisher.jpg')
    await page.locator("input#singleFileInput").setInputFiles(file1)
    await page.getByText("Upload Single File").click()
    await page.locator("input#multipleFilesInput").setInputFiles([file1,file2])
    await page.waitForTimeout(3000)

    //dialog
    page.on('dialog',(d1)=>
    {
    if(d1.type()==='alert')
    {
        d1.accept()
    }
    else if(d1.type()==='confirm')
    {
        d1.dismiss()
    }else if(d1.type()==='prompt')
    {
        d1.accept("Dhiraj is testing")
    }

    })
    await page.locator("button#alertBtn").click()
    await page.getByText("Confirmation Alert").click()
    await page.getByText("Prompt Alert").click()

    //New tab and new window
    await page.getByText("New Tab").click()
    const newTab_window= page.waitForEvent('popup')
    let tab1= await newTab_window
    let msg1=await tab1.locator(".post-title.entry-title a").textContent()
    console.log(await msg1)
    await page.bringToFront()
    // await page.getByText("Popup Windows").click()
    // let win1= await newTab_window
    // let msg2=await win1.locator(".d-1.fs-1.fw-normal.mb-0")
    // await expect(msg2).toBeVisible()
    // console.log(await msg2.textContent())

    //mouse
    let pointMe=await page.locator(".dropbtn")
    await pointMe.scrollIntoViewIfNeeded()
    await pointMe.hover()
    await page.locator(".dropdown-content a").nth(1).click()
    await page.waitForTimeout(3000)

    await page.getByText("Copy Text").dblclick()
    let fld2=await page.locator("input#field2")
    await expect(fld2).toHaveValue("Hello World!")

    //drag and drop
    let from=await page.locator("#draggable")
    await from.scrollIntoViewIfNeeded()
    await from.hover()
    await page.mouse.down()
    let to= page.locator("#droppable")
    await to.scrollIntoViewIfNeeded()
    await to.hover()
    await page.mouse.up()
    let msg3=await page.getByText("Dropped!")
    await expect(msg3).toBeVisible()
    console.log(await msg3.textContent())

    //keyboard action
    let name=await page.locator("input#name")
    await name.scrollIntoViewIfNeeded()
    await page.keyboard.type("Dhiraj")
    await page.keyboard.press('Tab')
    await page.keyboard.type("Jadhav")
    await page.keyboard.press('Control+a')
    await page.keyboard.press('Control+c')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+v')


})

test('frame',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")
    let frame=await page.frameLocator("#singleframe")
    let msg1=await frame.getByText("iFrame Demo")
    console.log(await msg1.textContent())
    await frame.locator(".col-xs-6 input").first().fill("Dhiraj")
    await page.locator(".analystic").last().click()
    let frame1=await page.frameLocator("#Multiple iFrame")
    let msg2 =await frame1.getByText("Nested iFrames")
    console.log(await msg2.textContent())

    let frame2=await frame1.frameLocator(".iframe-container iFrame")
    await frame2.locator(".col-xs-6 input").last().fill("Dhiraj")
})

test('mouseAction',async({page})=>
{
    page.on('dialog',(d1)=>
    {
        if(d1.type()==='alert')
        {
            d1.accept()
        }
    })
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText("right click me").click({button:'right'})
    await page.waitForTimeout(3000)
    await page.getByText('Quit').click()
    await page.getByText("right click me").dblclick()
    await page.waitForTimeout(3000)
    
})

test('txt file Download',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generateTxt").click()
    const downloadHandler= page.waitForEvent('download')
    await page.locator("#txtDownloadLink").click()
    const txtFile= await downloadHandler
    const filename= txtFile.suggestedFilename()
    const folderPath= path.join(__dirname,'../downloads')
    const filepath=path.join(folderPath,filename)
    await txtFile.saveAs(filepath)
})

test('pdf file download',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generatePdf").click()
    const downloadHandle= page.waitForEvent('download')
    await page.locator("#pdfDownloadLink").click()
    const pdfFile= await downloadHandle
    const filename= pdfFile.suggestedFilename()
    const folderPath= path.join(__dirname,'../downloads')
    const filePath= path.join(folderPath,filename)
    await pdfFile.saveAs(filePath)

})

test('all',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await page.locator(".form-control").first().fill("Dhiraj")
    let gender=await page.locator("#male")
    await expect(gender).not.toBeChecked()
    await gender.check()
    await expect(gender).toBeChecked()
    let countryDD = await page.locator("#country")
    await expect(countryDD).toBeEnabled()
    await expect(countryDD).toBeVisible()
    await countryDD.selectOption({index:0})
    await page.waitForTimeout(3000)
    await countryDD.selectOption({value:'germany'})
    await page.waitForTimeout(3000)
    await countryDD.selectOption({label:'Japan'})
    await page.waitForTimeout(3000)
    await countryDD.selectOption('India')
    await page.waitForTimeout(3000)
    await expect(countryDD).toHaveValue('india')

})



test('uploadFile',async({page})=>
{
    await page.goto("https://qaplayground.com/practice/file-upload")
    let filePath1= path.join(__dirname,'../testdata/img.jpg')
    let filepath2= path.join(__dirname,'../testdata/KingFisher.jpg')
    await page.locator("#fu-multi-input").setInputFiles([filePath1,filepath2])
    await page.waitForTimeout(3000)
})

test('fileDownload',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generateTxt").click()
    const downloadEvent=page.waitForEvent('download')
    await page.locator("#txtDownloadLink").click()
    let file1=await downloadEvent
    let file1Name=file1.suggestedFilename()
    let folderPath=path.join(__dirname,'../downloads')
    let file1Path=path.join(folderPath,file1Name)
    await file1.saveAs(file1Path)
})


test('complete test',async({page})=>{
    const emailID='sanjanapatil0207@gmail.com'
    const mobileNo='735360362'
    await page.goto("https://demo.automationtesting.in/Index.html")
    await page.locator('#enterimg').click()
    await page.getByPlaceholder('First Name').fill('Sanjana')
    await page.getByPlaceholder('Last Name').fill('Akiwate')
    await page.locator('[ng-model="Adress"]').fill('A/p-Kumbhoj')
    await page.keyboard.press('Enter');
   
    await page.keyboard.insertText('416111');
    await page.locator('[ng-model="EmailAdress"]').fill(emailID)
    await page.locator('[ng-model="Phone"]').fill(mobileNo)
    await page.getByLabel('FeMale').check();   
    await page.locator('#checkbox1').check() 
    await page.locator('#checkbox2').check()
    await page.locator('#checkbox3').check()
    await page.locator('#msdd').click()
    await page.getByText('Danish').click()
    await page.getByText('English').click()
    await page.locator('body').click();
    await page.waitForTimeout(2000)
    const skills= page.locator('#Skills')
    await skills.selectOption({value:'Art Design'})
    await skills.selectOption({index:9})
    await skills.selectOption({label:'Analytics'})
    await skills.selectOption('Data Analytics')
    const country=page.locator('.select2-selection.select2-selection--single')
    
    await country.click();
    await page.locator('.select2-search__field').fill('Ind')
   await page.locator('.select2-results__option', { hasText: 'India' }).click();
    const year= page.locator('#yearbox')
    await year.selectOption({value:'1997'})
    const month= page.getByPlaceholder('Month')
    await month.selectOption('July')
    const day=page.locator('[ng-model="daybox"]')
    await day.selectOption('20')
    await page.locator('#firstpassword').fill('Sanju@2029')
    await page.locator('#secondpassword').fill('Sanju@2029')
    await page.getByRole('button',{name:'Submit'}).click()
    
})

test('forms',async({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#firstName").fill("Dhiraj")
    await page.locator("#gender-radio-1").check()
    await page.locator("#dateOfBirthInput").click()
    let month= await page.locator(".react-datepicker__month-select")
    let year= await page.locator(".react-datepicker__year-select")
    await month.selectOption('July')
    await year.selectOption('1998')
    await page.getByText('19',{exact:true}).click()
    let filePath= path.join(__dirname,'../testdata/img.jpg')
    await page.locator("#uploadPicture").setInputFiles(filePath)
    await page.locator(".css-8mmkcg").first().click()
    await page.locator("#react-select-3-option-0").click()
    await page.locator(".css-8mmkcg").last().click()
    await page.locator(".css-d7l1ni-option").click()
    await page.waitForTimeout(3000)

})


test('calendar',async({page})=>
{

await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
await page.locator("#third_date_picker").click()
let monthdd=await page.locator(".ui-datepicker-month")
let yearDD= await page.locator(".ui-datepicker-year")

await monthdd.selectOption('Jul')
await yearDD.selectOption('2020')
await page.getByText('15',{exact:true}).click()
await page.waitForTimeout(3000)


})