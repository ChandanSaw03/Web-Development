const myNums=[1,2,3];

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc+currval
// },0)

//const myTotal= myNums.reduce((acc,currval)=>acc+currval,0);

const shoppingCart=[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"Data Science course",
        price: 14999
    },
    {
        itemName:"Cyber Security course",
        price: 14999
    },
]
const priceTopay= shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(priceTopay);