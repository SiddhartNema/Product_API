const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0/e")

// product routes
const product_routes = require("./routes/productRoutes")
app.use('/api',product_routes)




app.listen(3000, function(){
    console.log("server is ready");
})