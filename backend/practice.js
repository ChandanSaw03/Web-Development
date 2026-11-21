/*
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Student data received.");
        },2000);
    });
}
*/

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Student data received.");
      resolve("Student data");
    }, 2000);
  });
}

getData()
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Opertion completed.");
    });