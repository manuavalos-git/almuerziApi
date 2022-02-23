const express=require('express')
const Meals=require('./api/models/Meals')
const router=app.Router()

router.get("/",(req,res)=>{
    Meals.find()
    .exec()
    .then(x => res.status(200).send(x))
})
router.get("/:id",(req,res)=>{
    Meals.findById(req.param.id)
    .exec
    .then(x => res.status(200).send(x))
})
router.post("/",(req,res)=>{
   Meals.create(req.body)
   .then(x => res.status(201).send(x))
})
router.put("/:id",(req,res)=>{
    Meals.findOneAndUpdate(req.param.id,req.body)
    .then(()=> res.sendStatus(204))
})
router.delate("/:id",(req,res)=>{
    Meals.findOneAndDelate(req.param.id)
    .exec()
    .then(() => res.sendStatus(204))
})

module.exports=router