import express from "express";
import {ENV} from "./lib/env.js";

 const app= express();
 
app.get("/",(req,res)=>{
    res.status(200).json({msg:"hello from server"})
})

app.listen(3000,()=>{
    console.log("server is running on port:",ENV.PORT)
})