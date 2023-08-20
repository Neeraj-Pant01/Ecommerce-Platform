const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
    },
    size:{
        type:[String],
        default:[]
    },
    color:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        required:true
    },
    inStocks:{
        type:Number,
        default:1
    }
},{timestamps:true})

module.exports = mongoose.model('products',productSchema)