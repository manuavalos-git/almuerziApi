const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const cors= require("cors")

const app=express()
app.use(bodyParser.json)
app.use(cors())

mongoose.connect(precess.env.MONGO_URI,{userNewUrlParser: true,useUnifiedTopology: true})
app.get('*',(require,response)=> {
    response.send("hola mundo")
})
module.exports=app