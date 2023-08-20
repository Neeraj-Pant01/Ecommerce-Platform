const orderModel = require("../models/order.models");
const createError = require("../utils/CreateError");

exports.createOrder = async (req,res,next) =>{
    const order = new orderModel({userId:req.user.id ,...req.body})
    try{
        const savedOrder = await order.save();
        res.status(200).json(savedOrder)
    }catch(err){
        next(err)
    }
}

exports.updateOrder = async (req,res,next) =>{
    try{
        const order = await orderModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{
            new:true
        })
        res.status(200).json(order)
    }catch(err){
        next(err)
    }
}

exports.deleteOrder = async(req,res,next) =>{
        try{
            await orderModel.findOneAndDelete(req.params.id)
            res.status(200).json({message:"order deleted !"})
        }catch(err){
        next(err)
        }
}

//get a user's orders
exports.getAorder = async (req,res,next) =>{
    try{
        const order = await orderModel.find({userId : req.params.userId})
        if(req.user.id === req.params.userId || req.user.isAdmin){
            res.status(200).json(order)
        }else{
            next(createError(403, 'you are not allowed to take this action !'))
        }
    }catch(err){
        next(err)
    }
}


//get all orders
exports.getAllOrders = async(req,res,next) =>{
    if(req.user.isAdmin){
        const orders = await orderModel.find();
        res.status(200).json(orders)
    }else{
        next(createError(403, "you are not allowed to take this action !"))
    }
}


// get income of last 1 month
exports.getIncome = async(req,res,next) =>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    if(req.user.isAdmin){
        try{
         const income = await orderModel.aggregate([
            {$match : {createdAt : {$gte : previousMonth}}},
            {$project : {month : {$month : "$createdAt"},sales:"$amount"}},
            {$group : {_id: "$month",total : {$sum : "$sales"}}}
         ])
         res.status(200).json(income)   
        }catch(err){
            next(err)
        }
    }else{
        next(createError(403,"you don't have permissions to perform this task !"))
    }
}
