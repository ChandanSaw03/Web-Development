// let popcorn="S";
// if(popcorn =="XL"){
//     console.log("Cost is 250");
// }else if(popcorn=="L"){
//     console.log("Cost is 200");
// }else if(popcorn=="M"){
//     console.log("Cost is 100");
// }else{
//     console.log("Cost is 50");
// }

// for(let i=1;i<=15;i+2){
//     console.log(i);
// }

// console.log("Backwards");

// for(let i=15;i>=1;i-2){
//     console.log(i);
// }

// for(let i=1;i<=3;i++){
//     for(let j=1;j<=i;j++){
//         console.log("i=",i,"j=",j);
//     }
// }

// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// let number=5;
// let factorial=1;
// for(let i=1;i<=5;i++){
//     factorial*=i;
// }
// console.log(factorial);

// for(let i=1;i<=50;i++){
//     if(i==40){
//         break;
//     }
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
// }

// function greet(name){
//     console.log("Hello "+name);
// }
// greet("Chandan");

// function add(a,b){
//     return a+b;
// }
// console.log(add(4,6));

// function calculator(a,b,operator){
//     if(operator==='+'){
//         return a+b;
//     }else if(operator==='-'){
//         return a-b;
//     }else if(operator==='*'){
//         return a*b;
//     }else if(operator==='/'){
//         return a/b;
//     }else{
//         return "Invalid Operator";
//     }
// }
// console.log(calculator(2,4,'+'));
// console.log(calculator(2,4,'-'));
// console.log(calculator(2,4,'*'));
// console.log(calculator(2,4,'/'));

// let fruits=["Apple","Banana","Mango"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// let email='     CHANDAN@gmail.com    ';

// email= email.trim().toLowerCase();
// if(email.includes('gmail.com')){
//     console.log(`Valid gmail: ${email}`);
// }else{
//     console.log('Not a Valid Gmail');
// }

// let name="JAVASCRIPT";
// console.log(name.length);

// let username = "   ChAnDaN_SAW   ";
// console.log(username.trim().toLowerCase());

//let numbers=[1,2,3,4,5];

// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// numbers.forEach(function(number){

// })

// const student={
//     name:"chandan",
//     age:23,
//     marks:94.4,
//     city:"Delhi",
// };

// let delhi={
//     latitude:"28.7084 N",
//     lontitude:"77.1025 E",
// };

// const post={
//     username:"chandan_03",
//     content:"Tech",
//     likes:"34",
//     reposts:"3",
//     tags:"#chandangreat",
// };

// const obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e",
// };

// const classInfo={
//     aman:{
//         grade:"A+",
//         city:"Delhi"
//     },
//     shradha:{
//         grade:"A",
//         city:"Pune"
//     },
//     karan:{
//         grade:"O",
//         city:"Mumbai"
//     }
// };

// const max=prompt("Enter your max no.: ");
// const random= Math.floor(Math.random()*max)+1;
// console.log(random);
// let guess= prompt("guess the number");
// while(true){
//     if(guess=='quit'){
//         console.log("user quit");
//         break;
//     }
//     if(guess==random){
//         console.log("you are right, your random number is ",random);
//         break;
//     }else if(guess<random){
//         guess=prompt("Your guess is small ");
//     }
//     else{
//         guess=prompt("Your guess is large");
//     }
//     //else{
//     //    guess=prompt("Your prompt was wrong.Please try again ");
//     //}
// }
// function diceroll(){
//     let rand= Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }

// diceroll()
// diceroll()
// diceroll()
// diceroll()
// diceroll()
// diceroll()

// function printName(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// printName("Chandan")
// printName("motu")
// printName("bodhi")

// function outerFunc(){
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }

// function multipleGreet(func,count){//high order function
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }
// multipleGreet(greet,5);
// multipleGreet(function(){console.log("namsate")},5);


// function OddorEvenFactory(request){
//     if(request=="odd"){
//         let odd= function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }else if(request=="even"){
//         let even= function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }else{
//         console.log("Wrong Request!");
//     }
// }
// let request="odd";

// const calculator={
//     num:55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },
//     div:function(a,b){
//         return a/b;
//     }
// }


// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     multi(a,b){
//         return a*b;
//     }
// }

// let array=[1,45,21,42,12,87,23];

// let key=58;
// for(let i=0;i<array.size();i++){
//     if(array[i]>key){
//         return array[i];
//     }
// }

// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;
// //elementslargerthananumbernum
// function getElements(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num);

// let str="abcdabcdefgggh ";
// function getUnique(str){
//     let ans="";
//     for(let i=0;i<str.length;i++){
//         let curChar=str[i];
//         if(ans.indexOf(curChar)==-1){
//             ans+= curChar;
//         }
//     }
//     return ans;
// }
// console.log(getUnique(str));

// let country=["Australia","Germany","India","United States Of America"];
// let ansIndx=0;
// function LongestName(country){
//     for(let i=0;i<country.length;i++){
//         anslength=country[ansIndx].length;
//         currlength=country[i].length;
//         if(currlength>anslength){
//             ansIndx=i;
//         }
//     }
//     return country[ansIndx];
// }
// console.log(LongestName(country));

// let name="apnacollegee";
// function ToGetVowel(name){
//     let count=0;
//     for(let i=0;i<name.length;i++){
//         if(
//             name.charAt(i)=="a" ||
//             name.charAt(i)=="i" ||
//             name.charAt(i)=="o" ||
//             name.charAt(i)=="u" ||
//             name.charAt(i)=="e" 
//         ) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(ToGetVowel(name));

// let start=100;
// let end=200;
// function GenRand(start,end){
//     let diff=end-start;
//     return (Math.floor(Math.random()*diff))+start;
// }
// console.log(GenRand(start,end));

// const student={
//     name:"Chandan",
//     age:19,
//     math:92,
//     phy:85,
//     chem:88,
//     getAvg(){
//         avg=(this.math+this.phy+this.chem)/3;
//         console.log(avg);
//     }
// }

// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }catch{
//     console.log("caugth an error.. a is not defined");
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// const sum=(a,b)=>{console.log(a+b);}
// const cube=(n)=>{
//     return n*n*n;
// }

// console.log("Hi there!");

// setTimeout(()=>{
//     console.log("Apna College")
// },4000);

// console.log("Welcome to ");

// const student={
//     name:"Chandan",
//     marks:95,
//     prop:this,//global scope
//     getName:function(){
//         return this.name;
//     },
//     getMarks:
// };
// const a=5;//global scope

// const square =(n)=>n*n;
// console.log(square(4));

// const average=(2,4,5)=>{
//     avg= (2+4+5)/2;
//     return avg;
// }

// const arrayAverage=(arr)=>{
//     let sum=0;
//     for(let num of arr){
//         sum+=num;
//     }
//     return sum/arr.length;
// };
// console.log(arrayAverage([1,2,3,4,5,6]));

// let num=4;
// const isEven= (num)=>num%2==0;

// const object={
//     message: "Hello, World!",

//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage(),2000);

// let length =4;

// function callback(){
//     console.log(this.length);
// }
// const object={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);

//let arr=[1,2,3,4];
// let print= function(el){
//     console.log(el);
// };
//arr.forEach(print);
// arr.forEach(function(el){
//     console.log(el);
// }
// );

// let num=[1,2,3,4];
// let double=num.map(function(el){
//     return el*2;
// });
// console.log(double);

// let students=[
//     {
//         name:"aman",
//         marks:95,
//     },
//     {
//         name:"chandan",
//         marks:92,
//     },
//     {
//         name:"prashant",
//         marks:97,
//     },
// ];

// let gpa=students.map((el)=>{
//     return el.marks/10;
// }
// );
// let nums=[1,2,3,4,,7,8,9,10,12,14];
// let ans=nums.filter((el)=>{
//     return el%2==0;
// })

// [2,4].every((el)=>(el%2==0));

// let nums=[1,2,3,4];
// let finalValue= nums.reduce((res,el)=> res+el);
// console.log(finalValue);

//let num=[1,4,2,56,75];
// let max=-1;
// for(let i=0;i<num.length;i++){
//     if(max<num[i]){
//         max=num[i];
//     }
// }

// let max=num.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(max);

// let  nums=[10,40,30,50,100];
// // let ans=num.every((el)=>el%10==0);
// // console.log(ans);

// let min=nums.min((min,el)=>{
//     if(min<el){
//         return min;
//     }else{
//         return el;
//     }
// });

