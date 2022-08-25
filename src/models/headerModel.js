const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
        name:String,
        category:String,
price:{
required:true,
type:String

}
},{ timestamps: true });
module.exports = mongoose.model('product' ,productSchema)