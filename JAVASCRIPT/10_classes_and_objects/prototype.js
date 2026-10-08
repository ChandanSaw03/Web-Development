// let myName="chandan    "
// let chai="desitadkachai    "
// console.log(myName.trim().length);
// console.log(chai.trueLength);

let myHeroes=["thor","spiderman",]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.chandan=function(){
    console.log(`chandan is present in all objects`)
};
heroPower.chandan()