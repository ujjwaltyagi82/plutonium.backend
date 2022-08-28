const moment = require('moment');
const free = require("../models/UserModel")

const middel1 =  function (req ,res , next){
let password = true;
if(!password === true){
    console.log("use a valid passwords")
}else{
let now = moment();
console.log(now.format());
 next() 

 console.log("Now you can use the server") 
}
}
module.exports.middel1 = middel1

const isFreeAppUser = function (req ,res , next){
const user = req.headers.isfreeappuser
if(!user){   
    return res.send({msg:"the Header is required field please fill it"})
}
req.body['isFreeAppUser']=user
next()
}

 module.exports.isFreeAppUser=isFreeAppUser