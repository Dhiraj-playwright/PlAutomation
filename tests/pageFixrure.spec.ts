import {test,expect} from '@playwright/test'
test("Testing BrowserandPageFixture",async({browser})=>{
    const context1=await browser.newContext()
    const page1= await context1.newPage()
    await page1.goto("https://www.youtube.com/watch?v=NxXtW0fR7ec")
})