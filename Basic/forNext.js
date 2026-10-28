// Sum of the numbers in array



let a=[1,2,3,4,5,6,7,8]
let sum=0
for(let i of a)
{
 sum=sum+i
}
console.log(sum);

//square of an array

square=[]

console.log(square);
for(let j in a)
{
    square.push(j*j)
}
console.log(square)

//even and odd num

//string count charactors
let name="Dhiraj"
let strCount=0
for(let n of name)
{
    console.log(n);
    strCount++

}
console.log(strCount);

//object 

let student={
    name:"dada",
    age:29,
    school:"YVMR"
}
 for(let s in student)
 {
    console.log(s,student[s]);
 }


 //largest number from an array
 let num=[2,3,1,4,7,6]
 let large=num[0]

 for(let n of num)
 {
 if(n>large)
 {
    large=n
 }
 }
 console.log(large);

 //vowels

 let vol="Orange is An Seasonal Fruit"
 let count=0

 for(let v of vol)
 {
    if("aeiouAEIOU".includes(v))
    {
        count++
    }
 }
 console.log(count);


// each value of string
let pw="This is the playwright"
let pw1=pw.split(" ")
for(let p of pw1)
{
     console.log(p);
}

let pair=["Dhiraj","Sindhuja"]

for(let p in pair)
{
    console.log(p,pair[p]);
}