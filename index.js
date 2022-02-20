const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const cors= require("cors")

const app=express()
app.use(bodyParser.json)
app.use(cors())

app.get('*',(require,response)=> {
    response.send("hola mundo")
})
const MONGO_URI='mongodb+srv://manu:ICXOqZk4DoaZd2lA@cluster0.dvpi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI,{useNewUrlParser: true , useUnifiedTopology: true})
module.exports=app

console.log("hola")