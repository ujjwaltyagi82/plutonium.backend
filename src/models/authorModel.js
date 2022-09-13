const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: 'First name is required',
        trim: true
        
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },

    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },

    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: { type: String, required: true,  trim: true },

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
