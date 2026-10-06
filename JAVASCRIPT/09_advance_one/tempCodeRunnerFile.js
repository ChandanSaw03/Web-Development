new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 is complete");
        resolve();
    },1000);
}).then(function(){
    console.log("Async 2 resolved");
});