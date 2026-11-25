function getUser(){
    return new Promise((resolve,reject)=>{
        reject("User not found");
    });
}
async function displayUser(){
    try{
        const user= await getUser();
        console.log(user);
    }catch(error){
        console.log("Error: ",error);
    }
}
displayUser();