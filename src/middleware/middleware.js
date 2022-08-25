const moment = require('moment');

const middel1 =  function (req ,res , next){
let password = true;
if(!password === true){
    console.log("use a valid passwords")
}else{
let now = moment();
console.log(now.format());
 next() 

 console.log("Now you can use the server") 
}
}
module.exports.middel1 = middel1