//if
// if else

let marks= 7

if(marks>=85)
{
    console.log(`Marks of the student is ${marks}. Hence Grade is A+`)
} else if(marks>=70 && marks<85)
{
    console.log(`The marks of the student is ${marks}. Hence the grafe is A`)
}else if(marks>=55 && marks<70)
{
    console.log(`The marks of the student is ${marks}. Hence grade is B`)
}else if(marks>=40 && marks<55)
{
    console.log(`The marks of the student is ${marks}. Hence the grade of the student is C`)
}else if(marks>=30 && marks<40)
{
    console.log(`The marks of the student is ${marks}. Hence the grade is D`)
}else
{
    console.log(`The marks of the student is ${marks}. Hence student is Fail`)
}



//ATM
let amount= 7000
let accBalance=5000
let minBalance=5000

if(amount<=accBalance  && (accBalance-amount)>=minBalance)
{
    console.log(`The amount ${amount} is debited from the account`)
}else if(amount>accBalance)
{
    console.log(`Insufficient Fund`)
}else if(((accBalance-amount)<minBalance)  &&  amount>0)
{
    console.log(`The amount ${amount} id debited from the account. But minimum balance is not maintained`)
}else
{
    console.log(`Invalid input`)
}

