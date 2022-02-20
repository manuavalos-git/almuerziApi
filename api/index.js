const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const cors= require("cors")

const app=express()
app.use(bodyParser.json())
app.use(cors())

app.get('*',(req, res) => {
        res.send("hola mundooo")
})
//const MONGO_URI='mongodb+srv://manu:BpxnU9F7qEtY8GDn@cluster0.dvpi2.mongodb.net/almuerzi-db?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true , useUnifiedTopology: true})

module.exports=app
