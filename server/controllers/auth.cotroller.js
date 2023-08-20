const userModel = require("../models/user.models");
const createError = require("../utils/CreateError")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

exports.register = async (req,res,next) =>{
    try{
        const user = await userModel.findOne({email:req.body.email})
        if(user) return next(createError(400,"user already exists !"))

        const Encpassword = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_ENC).toString();

        const newUser = new userModel({...req.body,password:Encpassword})
        const savedUSer = await newUser.save()

        res.status(200).json(savedUSer)
    }catch(err){
        next(err)
    }
}

exports.login = async (req,res,next) =>{
    try{
        const user = await userModel.findOne({email:req.body.email})

        if(!user) return next(createError(404,'user not found !'))

        const decPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_ENC);
        const originalPass = decPass.toString(CryptoJS.enc.Utf8);

        if(originalPass !== req.body.password) return next(createError(403,"wrong credentials"))

        const accesstoken = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SEC_KEY,{expiresIn:"1d"})

        const {password, ...others} = user._doc;

        res.status(200).json({...others,accesstoken})
    }catch(err){
        next(err)
    }
}