import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import cors from "cors"



const app=express()
app.use(cors())
app.use(express.json())



//
const db=process.env.DB_URI

mongoose.connect(db).then(()=>{
     console.log("db connected")
}).catch((err)=>{
    console.log("err",err)
})




const port=process.env.PORT
app.listen(port,()=>{
      console.log("server runnign on ",port)
})