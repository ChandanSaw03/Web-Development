import { createServer } from "node:http";

//Sample data
const plots=[
    {id: 1,owner:"Chandan", village: "Hazaribagh"},
    {id: 2,owner:"Suraj", village:"Ranchi"}
];

//Helper to send JSON responses
function sendJson(res,statusCode,data,headers={}){
    res.writeHead(statusCode,{
        "Content-Type": "application/json; charset-utf-8",
        ...headers
    });

    res.end(JSON.stringfy(data));
}

//Create HTTP server
const server = createServer((req,res)=>{

    const url= new URL(req.url,"http://localhost");

    //GET: All plots
    if(req.method ==="GET" && url.pathname ==="/api/plots"){
        return sendJson(res,200,{
            success:true,
            plots:plots
        });
    }

    //GET: Particular plot
    const match= url.pathname.match(/^\/api\/(\d+)$/);

    if(req.method ==="GET" && match){
        const id= Number(match[1]);

        const plot = plots.find(p =>p.id ===id);
        if(!plot){
            return sendJson(res,404,{
                message:"Plot not found"
            });
        }
        return sendJson(res,200,{
            success:true,
            plot:plot
        });
    }

    //Unknown route
    return sendJson(res,404,{
        message:"Route not found"
    });
});

//Start server
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});