// product routes
const product_routes = require("./routes/productRoutes")
app.use('/api',product_routes)


const PORT = 3000


app.listen(PORT, function(){
    console.log("server is ready");
})