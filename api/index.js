const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const cors= require("cors")

const app=express()
app.use(bodyParser.json())
app.use(cors())
app.get('*',(req, res) => {
        res.send("SIIIIIIUUUUU")
})
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true , useUnifiedTopology: true})

module.exports=app
