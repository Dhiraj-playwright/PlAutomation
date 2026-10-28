/*Whwn we have the same set of data and we have to choose one among them,
 in this case we are sing switch.
*/


//Assignment prob : 1
let day='fri'

switch(day){
case 'sun':
    console.log("Sunday")
    break

case 'mon':
    console.log('Monday')
    break

case 'tue':
    console.log('Tuesday')
    break

case 'wed':
    console.log('Tuesday')
    break

case 'thur':
    console.log("Thursday")
    break

case 'fri':
    console.log("Friday")
    break
case 'sat':
    console.log("Saturday")
    break

default:
    console.log("None of the above")

}

//Assignment prob : 2

let month="jul"
switch(month){
    case 'jan':
        console.log("January")
        break
    case 'feb':
        console.log("February")
        break
    case 'mar':
        console.log("March")
        break
    case 'apr':
        console.log("April")
        break
    case 'may':
        console.log("May")
        break
    case 'jun':
        console.log("June")
        break
    case 'jul':
        console.log("July")
        break

    case 'aug':
        console.log("August")
        break
    case 'sep':
        console.log("September")
        break
    case 'oct':
        console.log("Octomber")
        break
    case 'nov':
        console.log("Novenmer")
        break
    case 'dec':
        console.log("December")
        break
    default:
         console.log("None of the above")
         break
}


//Assignment prob : 3
let opt='Gpay'

switch(opt){
    case 'paypal':
        console.log("Paypal")
        break

    case 'creditCard':
        console.log("Payment done by credit card")
        break

    case 'phonePay':
        console.log("Payment done by phone Pay")
        break

    case 'Gapy':
        console.log("payment done by ")
        break

    default:
        console.log('Invalid payment method')

    
}

//Assignment prob : 4
 let marks=6

 switch(true){
    case marks >=90 :
       console.log("Grade A")
       break
    case marks>=60 && marks<90 :
        console.log("Grade B")
        break
    case marks>=45 && marks<60 :
        console.log("Grade C")
        break
    case marks>=35 && marks<45 :
        console.log("Grade D")
        break
    default:
        console.log("Fail")
        break

 }


 console.log("***********************")

let a=89

switch(true){
case a>=75:
    console.log("A")
    break
case a<75 && a>=50:
    console.log("B")
    break
case a<50 && a>=35:
    console.log("c")
default:
    console.log("Fail");        

}

let custType="normal"

switch(custType){
    case "spl":
        console.log("Discount= 15%")
        break
    case 'normal':
        console.log("Doscount = 5 ")
        break
    case 'regular':
        console.log("Dicount = 10%")
        break
    default:
        console.log("No Discount");
}



//Growth of the agent
let grwth=30
switch(true){
    case grwth>=90 :
        console.log("The growth is above 90 %. Best performance");
        break
    case grwth<90 && grwth>=50:
        console.log("The growth is above 50 %. Good performance");
        break
    case grwth<50 && grwth>=30:
        console.log("The growth is above 30 %. Average performance");
        break
    case grwth<30:
        console.log("The growth is below 30 %. Need imprivement in performance");
        break
    default:
        console.log("Invalid input");
}


let abc=51

switch(true){
    case abc>50:
        console.log("Greater than 50")
        
    case abc>=30 && abc<=50 :
        console.log("between 30 and 50")  
        break
    default:
        console.log("This is default")
        break


}