import {test,expect} from '@playwright/test'
test('AlertTest',async({page})=>
{

    page.on('dialog',(di)=>{
        let alType=di.type()
        if(alType==='alert')
        {
            di.accept()
           console.log(di.message())
        }else if(alType==='confirm')
        {
            di.accept()
            console.log(di.message())
        }else if(alType==='prompt')
        {
            di.accept("Dhiraj")
            console.log(di.message())
        }

    })

    await page.goto("https://demoqa.com/alerts")

    await page.getByRole('button',{name:'Click me'}).first().click()
    await page.getByRole('button',{name:'Click me'}).nth(1).click()
    await page.getByRole('button',{name:'Click me'}).nth(2).click()
    await page.getByRole('button',{name:'Click me'}).nth(3).click()
    



})
