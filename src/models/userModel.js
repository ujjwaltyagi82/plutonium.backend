const mongoose = require('mongoose');


// const bookschema = new mongoose.Schema( {
//     bookName: {
//     type : String,
//     required : true
//     },
//     authorName: String,
//     category: {
//         type: String,
//        enum:["friction" , "comedy" , "science" , "money"]
//     },
//     year: Number,
// }, { timestamps: true });

// module.exports = mongoose.model('book' , bookschema)

//  bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)

const bookmodel = new mongoose.Schema( {
bookName : {
type : String,
required : true
},
authorname :String ,
totalPages : Number,
stockAvailable : Boolean,
year : {
    type : Number,
    default : 2021,
},
tags : [String],
price : {
    Indian : Number,
    european : Number,
}, 
},
{timestamps: true });


module.exports = mongoose.model('newbook' , bookmodel)







