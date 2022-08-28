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

// [12, 45, 67, 89, 90, 34, 35, 55]

let div = [12,45,67,89,90,34,35,55]
for(let index = 0; index<div.length; index++){
const newdiv = div[index];
if(newdiv %5 === 0){
console.log(newdiv)
}
}
