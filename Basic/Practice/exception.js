class Employee{
    constructor(id,name,dept,sal,exp){
        this.id=id,
        this.name=name,
        this.salary=sal,
        this.exper=exp,
        this.dept=dept
    }

    displayDetails(){
        console.log(`The empid is ${this.id}. the name is ${this.name}. The department is ${this.dept} `);

    }

    calculateBonus(){
        let bonus=(this.salary/100)*10
        console.log("The bonus of the employee is "+bonus);
    }

    annualSalary(){
        let sal1=this.salary*12
        console.log("the annula salary is "+sal1);
    }

    isEligibleForPromotion(){
        if(this.exper>4)
        {
            console.log("Eligible for promotion");
        }else
        {
            console.log("Not eligible for promotion");
        }

    }
}

let emp1= new Employee(101,"Dhiraj","Indd",70000,4)
emp1.displayDetails()
emp1.annualSalary()
emp1.calculateBonus()
emp1.isEligibleForPromotion()