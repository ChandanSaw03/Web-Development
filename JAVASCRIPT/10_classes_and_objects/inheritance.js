function animal(name){
    this.name=name;
}
animal.prototype.speak= function(){
    console.log(`${this.name} makes a sound.`);
}
function Dog(name){
    animal.call(this,name);
};
Dog.prototype=Object.create(animal.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark=function(){
    console.log(`${this.name} barkes:woof!`);
};
const myDog=new Dog("Buddy");
myDog.speak();
myDog.bark();