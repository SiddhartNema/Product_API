const express = require("express")

const productRoute = express()

const bodyparser = require("body-parser")

productRoute.use(bodyparser.json())

productRoute.use(bodyparser.urlencoded({extended:true}))

const multer = require("multer")

const path = require("path")

productRoute.use(express.static('public'))

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){

//     },
//     filename:function(req,file,cb){

//     }
// })

const auth = require("../middleware/auth")

const productController = require("../controllers/productController")

productRoute.post('/add-product',)

module.exports = productRoute
