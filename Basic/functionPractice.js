/*
//Addition and subtraction

function addition(a,b,c)
{
    let y=a+b+c
    console.log(c);
}

function addition(a,b)
{
    let d=a+b
    return d
}

console.log(addition(5,5,6))

//Subtraction

function subtraction(e,f)
{
    let g=e-f
    return g
}

console.log(subtraction(12,13));


//Odd and even

function oddOrEven(h)
{
    if(h%2===0)
    {
        return "Number is even"
    } else{
        return "Number is odd"
    }
}

console.log(oddOrEven(8));


//Largest of two and three numbers

function largestNum(i,j,k)
{
    if(i>j && i>k)
    {
        console.log(`${i} is the largest number`);
    }else if(j>i && j>k)
    {
        console.log(`${j} is largest number`)
    }else if(k>i && k>j)
    {
        console.log(`${k} is the largest number`);
    } //else{
      //  console.log("Invalid input");
   // }
}

function largestNum(m,n)
{
    if(m>n)
    {
        console.log(`New Method ${m} is larger number`);
    }else if(n>m)
    {
        console.log(`new method ${n} is greater number`);
    }else{
        console.log("new Method invalid input");
    }
}

largestNum(10,12,14)
largestNum(4,7)


//Factorial
function fact(r)
{
    let fact=1
    while(r>=1){
        fact*=r
        r--
    }
    console.log(fact);
}

fact(5)



function isEven(number)
{
  if(number>0){
    if( number%2===0)
    {
       console.log("even");
    }else
    {
       console.log("odd");
    }
    }else{
    console.log("invalid input");
    }
}

isEven(-1);


//login and pass

function login(id,pass)
{
    console.log(`Id is ${id} and password is ${pass}`);
}

login('Dhiraj','Dhiraj@0987654')


//Factorial
function fact(num)
{
    let Factorial=1
    for(let i=num;i>=1;i--)
    {
        Factorial=Factorial*i //120
    }
    console.log(Factorial);
    
}

fact(5)

*/

function wish(name)
{
    console.log(`${name}, Happy Gurupournima!!`);
}

wish("Sachin Sir")
wish("Robin Sir")
wish("Darshan Sir")
