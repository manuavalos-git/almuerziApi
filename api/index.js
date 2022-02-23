const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const cors= require("cors")
const meals= require("/api/routes/meals")
const orders= require("/api/routes/orders")

const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use("/api/meals",meals)
app.use("/api/orders",orders)

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true , useUnifiedTopology: true})


module.exports=app
