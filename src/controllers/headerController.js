const haderModel = require("../models/headerModel")

const createHead = async function (req , res){
let product = req.body
let newproduct = await haderModel.create(product)
res.send({data : newproduct })
}


const gethead = async function (req ,res){
let product = await haderModel.find()
res.send({data : product})
}




module.exports.createHead=createHead
module.exports.gethead=gethead