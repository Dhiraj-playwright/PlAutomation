import {test,expect} from '@playwright/test'
let Url='https://practicetestautomation.com/practice-test-login/'
let testData=[
    {
        name:'valid Credentials',
        username:'student',
        password:'Password123',
        expectedError:null
    },
     {
        name:'Invalid password',
        username:'student',
        password:'Pa2sword123',
        expectedError:'Invalid credentials'
    },
     {
        name:'Invalid Username',
        username:'STTudent',
        password:'Password123',
        expectedError:'Invalid credentials'
    },
     {
        name:'Blank Password',
        username:'student',
        password:'',
        expectedError:'Invalid credentials'
    }
]

for(let data of testData)
{
    test(`test scenario ${data.name}`,async({page})=>
    {
        test.slow()
        await page.goto(Url)
        await page.locator("#username").fill(data.username)
        await page.locator('#password').fill(data.password)
        await page.locator('#submit').click()
    
        if(data.expectedError)
        {
            await expect(page.locator('#error')).toBeVisible()
        }else
        {
            await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
        }
    })

}


//***************************** */

let Url1="https://promptqa-shop.web.app/login"
let testData1=
[
    {
        name1:'Valid Credentials',
        Email:'test12@gmail.com',
        Password1:'Test@123',
        expEroor:null
    },
     {
        name1:'Inalid pass',
        Email:'test12@gmail.com',
        Password1:'Test@12345',
        expEroor:'error'
    },
     {
        name1:'Invalid username',
        Email:'test12123@gmail.com',
        Password1:'Test@123',
        expEroor:'error'
    },
     {
        name1:'Inalid Credentials',
        Email:'test12@gmail.com',
        Password1:'Test@123',
        expEroor:'error'
    }
]


for(let data1 of testData1)
{
    test(`test scenario ${data1.name1}`,async({page})=>
    {
      
        await page.goto(Url1)
        await page.locator(".btn-link").click()
        await page.locator('#login-email').fill(data1.Email)
        await page.locator("#login-password").fill(data1.Password1)
        await page.locator(".btn").last().click()

        if(data1.expEroor)
        {
            await expect(page.getByText("Invalid email or password")).toBeVisible()
        }else if(data1.expEroor)
        {
            await expect(page.getByText("Password must be at least 6 characters")).toBeVisible()
        }else{
            await expect(page).toHaveURL("https://promptqa-shop.web.app/login")
        }
    }
)
}