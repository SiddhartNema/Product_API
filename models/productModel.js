let mongoose = require("mongoose")


let productSchema = mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    product_type:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Product",productSchema)