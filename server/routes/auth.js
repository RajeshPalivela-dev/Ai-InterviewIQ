import express from "express"
import { signup } from "../controllers/auth/user.js"

const router=express.Router()

router.post("/signup",signup)

//login
 
router.post("/login",(req,res)=>{
      console.log("api login")
})


export default router