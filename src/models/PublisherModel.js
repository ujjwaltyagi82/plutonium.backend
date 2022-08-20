const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    name: String,
    headQuarter: String
}, { timestamps: true });

module.exports = mongoose.model('publisher', publisherSchema)

// "data": {
//     "name": "Ujjwal",
//     "headQuarter": "New delhi",
//     "_id": "62ff6ad0d5eaca10ff828cb5",
// "data": {
//     "name": "Function up",
//     "headQuarter": "noida",
//     "_id": "62ff6b12298deb580e7fbbfd",
// "data": {
//     "name": "chetan bhagat",
//     "headQuarter": "U.p",
//     "_id": "62ff6b3af9d9f57fce7f2356",