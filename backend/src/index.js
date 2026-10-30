import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

await connectDB()
.then(()=>{
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI is not set in the environment");
    }


    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGO DB Connection failed!! ",error);
})
