let a=1234
let sum=0
while(a>0){
    let b=a%10
    sum=sum+b
    a=Math.floor(a/10)
}
console.log(sum)