import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const dburl=process.env.DB_URI

export const ConnectDB=async()=>{
try{
    const conn=await mongoose.connect(dburl)
    console.log(`db connected to ${conn.connection.host}`)
}catch{
    console.log("connection failed");
}
}


