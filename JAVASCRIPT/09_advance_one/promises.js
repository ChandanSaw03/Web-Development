const promiseOne= new Promise(function(resolve,reject){
    //Do an Async task
        //Datbase calls, cryptography, network calls
        setTimeout(function(){
            console.log("Async Task is complete");
            resolve();
        },1000);
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 is complete");
        resolve();
    },1000);
}).then(function(){
    console.log("Async 2 resolved");
});
promiseOne.then(function(){
    console.log("Promise Consumed");
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000);
})
promiseThree.then(function(user){
    console.log(user);
});
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Chandan", password:"123"})
        }else{
            reject('ERROR! Something went wrong');
        }
    },1000);
});
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("Promise is ether resolved or rejected"));

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('ERROR! JS went wrong');
        }
    },1000);
});

async function consumePromiseFive(){
    try{
        const response=await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
};

consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response=await fetch("https://api.github.com/users/mojombo");
//         //console.log(response);
//         const data=await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("ERROR! getAllUsers is not implemented",error);
//     }
// };
// getAllUsers();

fetch("https://api.github.com/users/mojombo")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));