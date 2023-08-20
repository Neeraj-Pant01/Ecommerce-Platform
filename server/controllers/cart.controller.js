const cartmodel = require("../models/cart.models");
const createError = require("../utils/CreateError");

exports.createCart = async(req,res,next) =>{
    const newCart = new cartmodel({userId:req.user.id,products:[req.body ]})
    try{
        const savedCart = await newCart.save();
        // console.log(savedCart)
        res.status(200).json(savedCart)
    }catch(err){
        next(err)
    }
}

exports.updateCart = async(req,res,next) =>{
    try{
        const cart = await cartmodel.findByIdAndUpdate(req.params.id,{
            $push : { products: req.body}
        },{
            new :true
        })
        res.status(200).json(cart)
    }catch(err){
        next(err)
    }
}

exports.deleteCart = async(req,res,next)=>{
    try{
        const cart = await cartmodel.findById(req.params.id)
        if(req.user.id === cart.userId || req.user.isAdmin){
            await cartmodel.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"cart has been deleted !"})
        }else{
            next(createError(403,"unauthorized action !"))
        }
    }catch(err){
        next(err)
    }
}

exports.getcart = async(req,res,next) =>{
    try{
        const cart = await cartmodel.findOne({userId:req.params.userId})
        if(!cart) return res.status(204).json({message:"cart is not available"})
        if(req.user.id === cart.userId || req.user.isAdmin){
            res.status(200).json(cart)
        }else{
            next(createError(403,"unauthorized action !"))
        }
    }catch(err){
        next(err)
    }
}


exports.getAllCarts = async(req,res,next) =>{
    if(req.user.isAdmin){
    try{
        const carts = await cartmodel.find()
        res.status(200).json(carts)
    }catch(err){
        next(err)
    }
}else{
    next(createError(403 , "unauthorized action !"))
}
}
