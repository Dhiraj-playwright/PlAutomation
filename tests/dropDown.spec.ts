import {test,expect} from '@playwright/test'
test("DropdownTestSelectTag",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let countryDD=await page.locator("Select.form-control").first()
    await countryDD.scrollIntoViewIfNeeded()
    await countryDD.selectOption({index:0})
    await countryDD.selectOption('India')
    await page.waitForTimeout(3000)
    await countryDD.selectOption({value:"germany"})
    await countryDD.selectOption({label:'Japan'})
    await page.waitForTimeout(3000)

    let colorDD= await page.locator("Select#colors")
    await colorDD.selectOption([{index:0},{label:'Blue'},{value:"green"}])
    await page.waitForTimeout(3000)

})

test("dropDownTest1",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    let cd=await page.locator("Select.form-control").first()
    await cd.scrollIntoViewIfNeeded()
    await expect(cd).toBeVisible()
    await expect(cd).toBeEnabled()
    await expect(cd).toContainText("India")
    await expect(cd).toHaveCount(1)
    await cd.selectOption({index:0})
    await expect(cd).toHaveValue('usa')
    await page.waitForTimeout(3000)



})