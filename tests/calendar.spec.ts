import {test,expect} from '@playwright/test'
test('calendarTest',async({page})=>
{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    
    //first data
    await page.locator("#first_date_picker").click()
    let expdate='19'
    let expMonth='July'
    let expYear='2027'

    let monthPicker=page.locator(".ui-datepicker-month")
    let yearPicker=page.locator(".ui-datepicker-year")

    let nextBtn=page.locator(".ui-datepicker-next.ui-corner-all")

    while(true)
    {
        if((await monthPicker.textContent()===expMonth)&&(await yearPicker.textContent()===expYear))
        {
            await page.getByText(expdate,{exact:true}).click()
            break;
        }
        await nextBtn.click()
    }

    //Second date

    await page.locator("#second_date_picker").click()

    let date='19'
    let month='July'
    let year='1998'

    let backBtn=page.locator(".ui-icon.ui-icon-circle-triangle-w")

    while(true)
    {
        if((await monthPicker.textContent()===month)&&(await yearPicker.textContent()===year))
        {
            await page.getByText(date,{exact:true}).click()
            
            break;
        }
        await backBtn.click()
    }


    //Third Date
    await page.locator("#third_date_picker").click()
    let monthDD= page.locator(".ui-datepicker-month")
    let yearDD= page.locator(".ui-datepicker-year")
    await monthDD.selectOption('Jul')
    await yearDD.selectOption('2017')
    await page.getByText('19',{exact:true}).click()


    //Sixth datepicker
    await page.locator("#sixth_date_picker").fill('09/19/1998')

})