// function add(a,b){
//     return a+b;
// }
// let result=add(5,10);
// console.log(result);

function num(n,callback){
    return callback(n);
}
const double=(n)=>n**2;
console.log(num(5,double));