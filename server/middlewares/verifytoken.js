const createError = require("../utils/CreateError");
const jwt = require("jsonwebtoken")

exports.verifyToken = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC_KEY ,(err,user)=>{
            if(err) return next(createError(401,"token is not valid"))

            req.user = user;
            next()
        })
    }else{
        next(createError(401,"you are not authenticated !"))
    }
}

exports.verifyTokenAndAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            next(createError(403,"you are not allowed to perform this action !"))
        }
    })
}

exports.verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(400,"you are not allowed to perform this action !"))
        }
    })
}
