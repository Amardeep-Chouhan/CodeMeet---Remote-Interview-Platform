import mongoose from 'mongoose';
import {ENV} from "./env.js";
import dns from "dns";
dns.setServers(["0.0.0.0","8.8.8.8"]);


export const connectDB = async()=> {
    try {
        const conn =await mongoose.connect(ENV.DB_URL);
        console.log("☑️ Database Connected Sucessfully:",conn.connection.host)
        
    } catch (error) {
        console.log("❌ Database Connection Failed:", error)
        process.exit(1)

        
    }
};