import {test,expect} from '@playwright/test'
test("FrameTesting",async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")
    const frame=await page.frameLocator('#singleframe')
    await frame.locator("[type='text']").fill("Dhiraj")
    await page.waitForTimeout(3000)

    const btn=await page.getByText('Iframe with in an Iframe')
    await expect(btn).toBeVisible()
    console.log(await btn.isVisible()+" First Condition")
    await expect(btn).toBeEnabled()
    await btn.click()
    await page.waitForTimeout(3000)
    const frame1=await page.frameLocator("[src='MultipleFrames.html']")
    const frame2=await frame1.frameLocator("[src='SingleFrame.html']")
    await frame2.locator("[type='text']").fill("Dhiraj on nested frame")
    await page.waitForTimeout(3000)
})


test('FrameNew',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")
    const fr1=await page.frameLocator("#singleframe")
    await fr1.locator("[type='text']").fill("Dhiraj")
    await page.waitForTimeout(3000)

    await page.getByText("Iframe with in an Iframe").click()
    const nasted1=await page.frameLocator('#Multiple iframe')
    const nasted2=await nasted1.frameLocator(".iframe-container iframe")
    await nasted2.locator(".col-xs-6 input").last().fill("Dhiraj nasted frame")
    await page.waitForTimeout(3000)
})

test("AlertsTest",async({page})=>
{

    page.on('dialog',(popup)=>
    {
        let alertType=popup.type()
        if(alertType==='alert')
        {
            popup.accept()
        }else if(alertType==='confirm')
        {
            popup.dismiss()
        }else if(alertType==='prompt')
        {
            popup.accept("Dhiraj is testing")
        }
    })

    await page.goto("https://demoqa.com/alerts")
    await page.locator("#alertButton").click()
    await page.locator("#timerAlertButton").click()
    await page.locator("#confirmButton").click()
    await page.locator("#promtButton").click()
    await page.waitForTimeout(6000)

})