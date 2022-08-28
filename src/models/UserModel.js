const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    
        name:String,
        balance:{
       type:Number,
        default:100
        },
        address:String,
        age: Number,
         gender:{
            enum : ["male" , "female" , "other"],
            type:String
         }, 
        isFreeAppUser:{
           Type:Boolean,
           default:false 
        }
    },{ timestamps: true });
module.exports = mongoose.model('User', UserSchema)