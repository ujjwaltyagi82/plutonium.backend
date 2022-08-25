const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    name: String,
    headQuarter: String
}, { timestamps: true });

module.exports = mongoose.model('publisher', publisherSchema)

function sumarray (array){
    const ourarray = [1,5,6,8,9,200];
    let sum = 0;

    for (let i = 0; i <ourarray.length; i +=1){
sum += ourarray[i];
    }
    return sum;
}
console.log(sumarray())

