const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
   res.send({msg: allUsers})
}
const Booklet = async function (req ,res ){
    let data = req.body
    let allbook = await UserModel.find().select({bookName : 1 , authorname : 1 , _id:0})
    res.send({msg : allbook})
}

const getBookyear = async function (req , res){
let newyear = req.query.year
let saveData = await UserModel.find({year:newyear})
res.send ({msg : saveData})

}

const getRandomBooks = async function (req , res){
let newinr = req.body 
let saveinr = await UserModel.find({stockAvailable : true  , totalPages: {$gt : 250}})
res.send ({msg : saveinr})
}
const getXINRBooks = async function (req ,res){
let ruppe = await UserModel.find({"price.Indian" : {$in : ["100"]}})
res.send ({msg : ruppe})
}
module.exports.Booklet=Booklet
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.getBookyear= getBookyear 
module.exports.getRandomBooks = getRandomBooks
module.exports.getXINRBooks=getXINRBooks