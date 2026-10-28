import {test,expect} from '@playwright/test'
test('tabTest',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.locator(".btn.btn-info").first().click()
    const newTab= page.waitForEvent('popup')
    const tab1= await newTab
    await tab1.locator('.nav-link span').nth(3).click()
})

test('MulWinTest',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.getByText("Open New Seperate Windows").click()
    await page.locator(".btn.btn-primary").click()
    const newWindow= page.waitForEvent('popup')
    const wind1= await newWindow
    await wind1.getByText("Projects").last().click()
    await page.waitForTimeout(3000)
    
    })