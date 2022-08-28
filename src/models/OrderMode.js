const mongoose = require('mongoose')
const { isFreeAppUser } = require('../middleware/middleware')
// {
 const ObjectId=mongoose.Schema.Types.ObjectId 
   
const OrderSchema = new mongoose.Schema({
Userid:{
 type:ObjectId,
 ref:"User"
},
Productid :{
type:ObjectId,
ref:"product"
},
amount:Number,
isFreeAppUser :{
    type:Boolean,
    default:false
},
})


module.exports = mongoose.model('Order', OrderSchema)
