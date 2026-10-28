import {test,expect} from '@playwright/test'


test("webTable",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
   let table= await page.locator(".widget-content table").first()
   let rows= await table.locator("tr")
   console.log(await rows.count())

   console.log(await rows.nth(3).locator('td').nth(3).textContent())
   await rows.nth(3).locator('td').nth(3).screenshot({path:'screenshot/dada.jpg'})

   for(let i=1;i< await rows.count(); i++)
   {
    let rowsdata= await rows.nth(i).textContent()
    if(await rowsdata?.includes('Selenium'))
    {
      console.log(`text content in row ${i}`)  
      
    }
    console.log(await rows.nth(i).locator('td').nth(2).textContent())

   }
})

test("calendar",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#datepicker").click()

    let date= '19'
    let month= 'July'
    let yesr= '1998'

    while(true)
    {
        if((await page.locator(".ui-datepicker-month").textContent()=== month) && (await page.locator(".ui-datepicker-year").textContent()=== yesr))
        {
            let calendar = await page.locator(".ui-datepicker-calendar tbody")
            await calendar.getByText(date).click()
            break
        }
        await page.locator('.ui-icon.ui-icon-circle-triangle-w').click()
    }
})