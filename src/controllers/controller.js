
const {count} = require ("console")
const authorModel = require ("../models/authorModel")
const WritterModel = require("../models/WritterModel")


const createauthor= async function (req, res) {
    let data= req.body
    let author_id = data.author_id
    if(!author_id){
        return res.send({status : false , msg : "please input author id "})
    }
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createWritter= async function (req, res) {
    let data= req.body
    let author_id = data.author_id
    if(!author_id){
        return res.send({status : false , msg : "please input author id "})
    }
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getbookbychetan = async function (req,res){
let data  = await authorModel.find({author_name:"Chetan Bhagat"});
let id = data[0].author_id;
let bookData = await WritterModel.find({author_id:id})
res.send ({msg :bookData})
}
const changebookprice = async function (req , res){
let data = {price : 100}
let authorData = await WritterModel.findOneAndUpdate(
{name : "Two States"},
{$set : data},
{ upsert : true }).select
({name : 1 , _id:0 , price:1 , author_id:1})
res.send ({msg : authorData});
};

module.exports.createWritter = createWritter
module.exports.createauthor = createauthor
module.exports.getbookbychetan =getbookbychetan
module.exports.changebookprice = changebookprice