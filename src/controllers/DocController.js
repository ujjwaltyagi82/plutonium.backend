const jwt = require("jsonwebtoken");
const doc = require("../models/Doc");

const createDoc = async function (req , res){
let data = req.body
let save = await doc.create(data);
res.send({msg : save});
};

const login = async function (req ,res){
let username = req.body.email
let password = req.body.password

let user = await doc.findOne({email:username , password:password})
if(!user)
return res.send({status : false , msg:"username and password is incorrect"});

let token = jwt.sign(
{
userId:user._id.toString(),
batch:"plutonium",
org:"function Up"
},
"Ujjwal-Tyagi"
);
res.setHeader("verify" , token);
res.send({status : true , token:token});
};

const getdoc = async function (req, res ){
let token = req.headers["verify"]
if(!token)token  = req.headers["verfy"];
if(!token) return res.send({status:fail , msg : "please use a token"})

let decode = jwt.verify(token , "Ujjwal-Tyagi ");
if(!decode)return res.send({status : false , msg:"invalid token input"})

let userId = req.params.userId
let userdetails = await doc.findById(userId)
if(!userdetails)
return res.send({status : false, msg : "no such account exist"})
res.send({status : true , data : userdetails})
};

module.exports.createDoc=createDoc
module.exports.login=login
module.exports.getdoc=getdoc