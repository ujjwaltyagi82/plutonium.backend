const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName:String,
     age:Number,
     address:String,
     rating:Number
        
}, { timestamps: true });

module.exports = mongoose.model('NewAuthor', authorSchema)

// "data": {
//     "authorName": "Loki",
//     "age": 25,
//     "address": "Old delhi",
//     "rating": 4.8,
//     "_id": "62ff6beffda4dc76fb5c188f",

// "authorName": "pretesh",
// "age": 22,
// "address": "It delhi",
// "rating": 5,
// "_id": "62ff6c2c47b186ea80d87506",
// "data": {
//     "authorName": "C.K",
//     "age": 35,
//     "address": "Assam",
//     "rating": 4.5,
//     "_id": "62ff6c5b479c201a625daadb",