//Declaration of object 
let a=10
let std={
name:"Dhiraj",
age:28
}


// 2nd method

let person=new Object()
person.name="Sindhuja"
person.age=27


console.log(std.name);
console.log(std['name']);
console.log(person);

person.age=28
console.log(person);


//Function inside the object

let aadharCard={
    name:"Dhiraj",
    age:28,
    msg:function(){
        return `${this.name} Welcome to Aadhar`
    }
}
console.log( aadharCard.msg());


let newStr="Dhiraj"

for(let w of newStr)
{
    if("aeiouAEIOU".includes(w))
    {
        console.log(w);
    }
}







