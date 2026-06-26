import mongoose from "mongoose"
import { User } from "../../models/User.js"
import bcrypt from "bcryptjs"
import { generateJWTToken } from "../../utils/generateToken.js"


export const signup=async(req,res)=>{

     const {name,email,password,age,phone}=req.body

     try{

          //check email and name valid in db from valid-users
          const isValidUser=await mongoose.connection.collection(process.env.VALID_USERS_COLLECTION).findOne({email})
          if(!isValidUser){
               res.status(400).json({message:"this not registered in accio"})
              
          }
      
         console.log(isValidUser,"user")

         //check if email exist in our db alredy

         const isUserAlredyExist=await User.findOne({email})
         console.log(isUserAlredyExist,"is exist alredy")

         if(isUserAlredyExist){
             return res.status(400).json({message:"user alredy exist"})
         }
         //password hashing

         req.body.password=await bcrypt.hash(password,10)

         const newUser=await User.create(req.body)
         return res.status(201).json({message:"ok",newUser})
         
            
     }catch(err){
          res.status(500).json({message:err.message})
     }
}


export const login=async(req,res)=>{
       //take email and password

     const {email,password}=req.body
       //if email is exist in user

       const user=await User.findOne({email})
       console.log("user",user)

       if(!user){
            return res.status(404).json({message:"user not found"})
       }

       
       const match=await bcrypt.compare(password,user.password)
       //verfify password useing byscrpt
          if(!match){
                return res.status(400).json({message:"Incorrect passeord"})
          }
        
          //  res.status(201).json({message:"ok"})
       // generetae jwt


       const token=generateJWTToken({email:user.email,id:user._id})
     console.log(token,"token")

     delete user.password
       //send response token
       res.status(201).json({message:"ok login",user,token})
}