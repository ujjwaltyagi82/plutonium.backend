const verify = async function (req ,res, next){
let token = req.headers["x-auth-token"];
if (!token) token =req.headers["x-auth-token"]
if(!token) return res.send({status : false , msg:"user token must be present"})
}


module.exports.verify=verify









// const isFreeAppUser = function (req ,res , next){
//     const user = req.headers.isfreeappuser
//     if(!user){   
//         return res.send({msg:"the Header is required field please fill it"})
//     }
//     req.body['isFreeAppUser']=user
//     next()
//     }
    
//      module.exports.isFreeAppUser=isFreeAppUser