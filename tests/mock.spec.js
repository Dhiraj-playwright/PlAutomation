import {test,expect} from '@playwright/test'
let Email='jefaf55759@liondapt.com'
let password='Sprite@123'
let product='ZARA COAT 3'

test('e2eTest',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("input.form-control.ng-untouched.ng-pristine.ng-invalid").first().fill(Email)
    await page.locator("input.form-control.ng-untouched.ng-pristine.ng-invalid").last().fill(password)
    await page.locator("#login").click()

    let cards= await page.locator(".card-body")
    await cards.nth(0).waitFor()
    await cards.filter({hasText:product}).getByRole('button',{name:'Add To Cart'}).click()
    await page.waitForTimeout(3000)
    await page.locator(".btn.btn-custom").nth(2).click()
    await page.locator(".btn.btn-primary").nth(2).click()
    await page.locator(".input.txt.text-validated").nth(2).pressSequentially("india")
    let countryDD= await page.locator(".ta-results.list-group")
    await countryDD.filter({hasText:'India'}).click()
    await page.waitForTimeout(3000)


})