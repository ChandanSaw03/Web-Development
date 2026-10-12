class Student{
    constructor(){
        this._name="";
    }
    setName(name){
        this._name=name;
    }
    getName(){
        return this._name;
    }
}

let student=new Student();
student.setName("Rahul");
console.log(student.getName());


//Using Closure
function bankaccount(accNum,accHolder,balance){
    let _accNum=accNum;
    let _accHolder=accHolder;
    let _balance=balance;

    function showAccDetails(){
        console.log(`account number is ${_accNum}`);
        console.log(`account holder name is ${_accHolder}`);
        console.log(`balance is ${_balance}`);
    }
    function deposit(amount){
        _balance+= amount;
        showAccDetails();
    }
    function withdraw(amount){
        if(_balance>=amount){
            _balance-=amount;
            showAccDetails();
        }else{
            console.log("Insufficient Balance");
        }
    }
    return {
        deposit,
        withdraw
    };
}

const myBankAccount=bankaccount(
    345,
    "Chandan",
    150
);
myBankAccount.deposit(10);
myBankAccount.withdraw(50);