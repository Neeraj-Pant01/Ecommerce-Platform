const userModel = require("../models/user.models")
const createError = require("../utils/CreateError")
const CryptoJs = require("crypto-js")

exports.update = async(req,res,next) =>{
    if(req.user.id === req.params.id){
        if(req.body.password){
            req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.PASS_ENC).toString()
        }
        try{
            const user = await userModel.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{
                new: true
            })
            res.status(200).json(user)
        }catch(err){
        next(err)
    }
}else{
    next(createError(403,"you can update only your account !"))
}
}


exports.deleteUser = async (req,res,next) =>{
    if(req.user.id === req.params.id){
        try{
            await userModel.findByIdAndDelete(req.params.id)
            res.status(200).json({mesage:"user has been deleted !"})
        }catch(err){
            next(err)
        }
    }else{
        next(createError(401,"you can delete only your account !"))
    }
}


//get a user
exports.getAuser = async(req,res,next) =>{
    if(req.user.isAdmin){
        try{
            const user = await userModel.findById(req.params.id)
            res.status(200).json(user)
        }catch(err){
            next(err)
        }
    }else{
        next(createError(401,"you are not allowed to perform this action !"))
    }
}


//get all user
exports.getAllUser = async (req,res,next) =>{
    const query = req.query.new
    if(req.user.isAdmin){
        try{
            const users = query ? await userModel.find().sort({_id : -1}).limit(5) : await userModel.find()
            res.status(200).json(users)
        }catch(err){
            next(err)
        }
    }else{
        next(createError(401,"you are not allowed to do this action !"))
    }
}

//get user stats
exports.getUserStats = async (req,res,next) =>{
    if(req.user.isAdmin){
        const date = new Date()
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
        try{
            const data = await userModel.aggregate([
                {$match : {createdAt : {$gte : lastYear}}},
                {
                    $project : {month : {$month : "$createdAt"}}
                },
                {
                    $group: {
                        _id: "$month", // Group by month
                        total: { $sum: 1 }
                    }
                }
            ])
            res.status(200).json(data)
        }catch(err){
            next(err)
        }
    }else{
        next(createError(401, "you are not allowed to take this action !"))
    }
}