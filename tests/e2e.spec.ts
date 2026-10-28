import {test,expect} from '@playwright/test'

let Email= 'jefaf55759@liondapt.com'
let password= 'Sprite@123'
let peroductName="iphone 13 pro"
let country='India'

test('e2eTest',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input#userEmail").fill(Email)
    await page.locator("input#userPassword").fill(password)
    await page.getByRole('button',{name:'login'}).click()
    let cards= page.locator("div.card-body")
    await cards.nth(0).waitFor()
    
    await cards.filter({hasText:peroductName}).getByRole('button',{name:'Add To Cart'}).click()
    

    //click on cart button
    await page.locator("button.btn.btn-custom").nth(2).click()
    await page.getByText("Checkout").click()
    await page.locator('input.input.txt.text-validated').nth(2).pressSequentially('india')
    let countryDD=await page.locator("section.ta-results")
    await countryDD.waitFor()
    await page.waitForTimeout(3000)
    await countryDD.filter({hasText:country}).click()
    console.log(await countryDD)
    await page.waitForTimeout(3000)
    await page.getByText('Place Order').click()

})