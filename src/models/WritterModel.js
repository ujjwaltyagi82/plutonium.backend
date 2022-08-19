const mongoose = require('mongoose');


const WritterSchema = new mongoose.Schema({
    name:String,
    author_id:Number,
    price:Number,
    rating:Number
}, { timestamps: true });

module.exports = mongoose.model('Writter' , WritterSchema)
