let student = {
 name:"Dhiraj",
 address:function(line1,line2,city,state){
    let d= (line1+line2+city+state);
    return d
 } 
}

let add=student.address("amit heights","kirti classic road","Hinjewadi","Pune - MH")

console.log(`The name of student is ${student.name} and address is ${add}`);
    

