const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const connection = require("./db/connection");
const authroute = require('./routes/auth.routes')
const userRoute = require('./routes/users.routes')
const productRoute = require("./routes/products.routes")
const cartRoute = require("./routes/cart.route")
const orderRoute = require("./routes/orders")

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors())


app.use((err,req,res,next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || "something went wrong !"
    return res.status(errStatus).send(errMessage)
})

app.use('/api/v1/auth',authroute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/products',productRoute)
app.use('/api/v1/cart',cartRoute)
app.use('/api/v1/orders',orderRoute)

app.listen(process.env.PORT,()=>{
    connection()
    console.log(`app is listening at the port ${process.env.PORT}`)
})