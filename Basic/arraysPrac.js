let marks=[10,23,43,23,43,34]
/*
console.log(marks.length);
console.log(marks.indexOf(43));
console.log("****************");
marks.push(200)
console.log(marks);
marks.pop()
console.log(marks);
console.log("***********");
marks.shift()
console.log("Shift "+marks);
marks.unshift(50000)
console.log(marks);
console.log("*********");
//marks.splice(1,3)
console.log(marks);
marks.splice(3,3,11,22,33,44,55,66)
console.log(marks);
marks.splice(1,2,12,12,12,12,4)
console.log(marks);
marks.join(",")
console.log(marks);

*/


//Declaration of arrays
//Collection of data. stored in single variable
let stdMarks=[11,22,33,44,55,66,77,88] //length 8, index 55:4

let lth=stdMarks.length
let ind=stdMarks.indexOf(44)

console.log(lth,ind);
let newArray=stdMarks.splice(3,1)
console.log(newArray);

stdMarks.push(99,100,17,177,188)

console.log(stdMarks);

let stud= new Array(5)

stud.push(0,1,2,3,4,5)


console.log(stud);
stud.push(10)
stud.splice(0,5,"A",2,3,4,"B")
console.log("*********");
console.log(stud);

stud.pop()
console.log(stud);



let marks= 80

switch(true){
    case marks>=90:        
     console.log("A");
     break

    case marks<90 && marks>50:
    console.log("B");
    break
    
    default:
        console.log("invalid input");
        break
}








