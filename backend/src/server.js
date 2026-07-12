import express from "express";
import path from "path"
import {ENV} from "./lib/env.js";

 const app= express();

 const __dirname =path.resolve();
 
app.get("/health",(req,res)=>{
    res.status(200).json({msg:"server is running"})
})

if(ENV.NODE_ENV==="production")
    {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname ,"../frontend/dist/index.html"))
    })
}
const startServer =async()=>
{
    try {
        await connectDB();
 app.listen(ENV.PORT,()=>{
    console.log("server is running on port:",ENV.PORT)
})
        
    } catch (error) {
        console.error("💥Error starting server:",error)
        process.exit(1)
        
    }
}
startServer();
