import mongoose from 'mongoose';
import dns from "dns";
import {ENV} from "./env.js";

dns.setServers(["8.8.8.8", "0.0.0.0"]);

export const connectDB = async()=> {
    try {
         if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined in environment variables");
    }
        const conn =await mongoose.connect(ENV.DB_URL);
        console.log("☑️ Database Connected Sucessfully:",conn.connection.host)
        
    } catch (error) {
        console.log("❌ Database Connection Failed:", error)
        process.exit(1)

        
    }
};