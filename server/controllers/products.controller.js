const productModel = require("../models/product.models")
const createError = require("../utils/CreateError")

exports.createProduct = async (req,res,next) =>{
    if(req.user.isAdmin){
        const newProduct = new productModel(req.body)
        try{
            await newProduct.save()
            res.status(200).json(newProduct)
        }catch(err){
            next(err)
        }
    }else{
        next(createError(403, "you are not allowed to perform this action !"))
    }
}

exports.updateProduct = async (req,res,next) =>{
    if(req.user.isAdmin){
        try{
            const product = await productModel.findByIdAndUpdate(req.params.productId,{
                $set : req.body
            },{
                new :true
            })
            res.status(200).json(product)
        }catch(err){
            next(err)
        }
    }else{
        next(createError(403, "you are not allowed to perform this action"))
    }
}

exports.deleteProduct = async (req,res,next) =>{
    if(req.user.isAdmin){
        try{
            await productModel.findByIdAndDelete(req.params.productId);
            res.status(200).json({mesage:"product has been removed !"})
        }catch(err){
            next(err)
        }
    }else{
        next(createError(403, "you are not allowed to perform this task !"))
    }
}

exports.getAproduct = async(req,res,next) =>{
    try{
        const product = await productModel.findById(req.params.productId);
        if(!product) return next(createError(400,"product not found !"))
        res.status(200).json(product)
    }catch(err){
        next(err)
    }
}

exports.getAllProducts = async(req,res,next) =>{
    const query = req.query;
    const filters = {
        ...(query.category && {categories : {$in : [query.category] }} ),
        ...(query.color && {color : {$in : [query.color]}}),
        ...((query.min || query.max) && {
            price : {
                ...(query.min && {$gt : query.min}),
                ...(query.max && {$lt : query.max})
            }
        }),
        ...(query.search && {title : {$regex : query.search , $options:"i"}})
    }
    try{
        const products = await productModel.find(filters).sort({[query.sort] : -1})
        res.status(200).json(products)
    }catch(err){
        next(err)
    }
}