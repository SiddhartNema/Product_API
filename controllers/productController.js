const Product = require("../models/productModel")


const add_product = async(req,res)=>{
    try{
        let product  = new Product({
            product_id: req.body.product_id,
            product_type: req.body.product_type,
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            quantity: req.body.quantity

        })

        const product_data =  product.save()
        res.status(200).send({ success:true, message:"product details", data:product_data })

    } catch(error){
        res.status(400).send({success: false, msg:error.message})
    }

}

module.exports={
    add_product
}