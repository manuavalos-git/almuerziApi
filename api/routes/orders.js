const express=require('express')
const Orders=require('./api/models/Orders')
const router=app.Router()

router.get("/",(req,res)=>{
    Orders.find()
    .exec()
    .then(x => res.status(200).send(x))
})
router.get("/:id",(req,res)=>{
    Orders.findById(req.param.id)
    .exec
    .then(x => res.status(200).send(x))
})
router.post("/",(req,res)=>{
   Orders.create(req.body)
   .then(x => res.status(201).send(x))
})
router.put("/:id",(req,res)=>{
    Orders.findOneAndUpdate(req.param.id,req.body)
    .then(()=> res.sendStatus(204))
})
router.delate("/:id",(req,res)=>{
    Orders.findOneAndDelate(req.param.id)
    .exec()
    .then(() => res.sendStatus(204))
})

module.exports=router