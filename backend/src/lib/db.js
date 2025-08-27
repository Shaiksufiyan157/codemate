import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({ quiet: true })
const dburl=process.env.DB_URI
// console.log(dburl)
export const ConnectDB=async()=>{
try{
    console.log("connecting to database...")
    const conn=await mongoose.connect(dburl)
    console.log(`db connected to ${conn.connection.host}`)
}catch{
    console.log("connection failed");
}
}


