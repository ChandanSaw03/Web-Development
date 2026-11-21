import fs from "node:fs";

console.log("Start");

fs.readFile("data.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

console.log("End");