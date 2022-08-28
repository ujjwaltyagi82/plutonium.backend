const OrderModel = require("../models/OrderMode")
const HeadersModel = require("../models/headerModel")
const UserModel = require("../models/UserModel")
const { isFreeAppUser } = require("../middleware/middleware")

const CreateOrder = async function (req,res){
let data =req.body
let Uid = data.Userid
let pid = data.Productid
let freeAppUser = req.headers.isfreeappuser
let finduser = await UserModel.findById(Uid);
if(!finduser) return res.send({status : false , msg :"userID must be present"})
let findProduct = await HeadersModel.findById(pid);
if(!findProduct) return res.send({status : false, msg:"Product Id must be present"})


if (!freeAppUser=="false"){
if (finduser.balance>= data.amount){
let ordercreated = await OrderModel.create(data)
let update = await UserModel.updateOne({_id:finduser},{$inc:{balance: - data.amount}})
let update1 = await UserModel.updateOne({_id:finduser}<{$set:{isFreeAppUser:isFreeAppUser}})
return res.send({msg : ordercreated})
}else if(finduser.balance <= data.amount){
    return res.send({status :true,msg :"the user have insufficient balance"})
}

}else if(freeAppUser=="true"){
let ordercreated = await OrderModel.create(data)
let update = await OrderModel.updateOne({_id:ordercreated._id},{$set:{amount:0}})
ordercreated["isFreeAppUser"]=freeAppUser
return res.send({data : ordercreated})
}
}
const getorder = async function (req, res) {
    let Order = await OrderModel.find().populate('Userid').populate('Productid')
    res.send({data: Order})
}

module.exports.getorder=getorder

module.exports.CreateOrder=CreateOrder
