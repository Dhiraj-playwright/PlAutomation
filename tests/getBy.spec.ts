import {test,expect} from '@playwright/test'
test("GetBy",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByRole('button',{name:'Primary Action'}).click()
    await page.getByRole('button',{name:'Toggle Button'}).click()
    await page.locator('#username').fill("Dhiraj")
    
    let buttonName=await page.getByText("Home").nth(2).textContent()
    console.log(buttonName);
    await page.getByRole('checkbox',{name:'Accept terms'}).click()
    await page.waitForTimeout(3000)
    
    let alert=await page.getByText('This is an important alert message!')
    await expect(alert).toContainText("This is an important alert message!")
    console.log(await alert.textContent())

    await page.getByRole('button',{name:"Submit Form"}).click()
    await page.waitForTimeout(3000)
    await page.getByLabel("Email Address:").fill('Dhiraj@123')
    await page.getByLabel('Password:').fill("Dhiraj@123")
    await page.getByLabel("Your Age:").fill('28')

    const radio=await page.getByRole('radio',{name:'Standard'})
    await radio.scrollIntoViewIfNeeded()
    await expect(radio).not.toBeChecked()
    await expect(radio).toBeEnabled()
    await radio.check()
    await page.waitForTimeout(3000)
    

    


    await page.getByLabel('Express').click()
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Enter your full name").fill("Dhiraj Dilip Jadhav")
    await page.getByAltText("logo image")
    await page.waitForTimeout(3000)
    await page.getByTitle("HyperText Markup Language").click()
    await page.waitForTimeout(3000)
    
    
    const editBtn=await page.getByTestId("edit-profile-btn")
    await editBtn.scrollIntoViewIfNeeded()
    await expect(editBtn).toBeVisible()
    await expect(editBtn).toBeEnabled()
    
    await editBtn.click()
    
    let msgNew=await page.getByText(' attribute (or other configured attribute).')
    await expect(msgNew).toContainText("or other")
    console.log(await msgNew.textContent())

    const amount= await page.getByText("$19.99").first()
    await amount.scrollIntoViewIfNeeded()
    await expect(amount).toContainText("$19.99")
    console.log(await amount.textContent())
    await page.waitForTimeout(3000)
    

})