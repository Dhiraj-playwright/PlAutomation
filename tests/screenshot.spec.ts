import {test,expect} from '@playwright/test'
test('SS',async({page})=>
{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.screenshot({path:'Screenshots/visiblePage.jpg'})
    await page.screenshot({path:'Screenshots/fullScreen.jpg',fullPage:true})
    await page.locator(".post-title.entry-title").screenshot({path:'Screenshots/element.jpg'})
})