import jwt from "jsonwebtoken"

export const generateJWTToken=(payload)=>{

     const token=jwt.sign(payload,process.env.TOKEN_SECRET_KEY)
     return token
}

