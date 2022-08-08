const a = new Date()
const u = new Date()
function printdate() {
const j = u.getMonth();
const b = a.getDate();
console.log( " current  date is ",b," month is ",j+1);
}

const pluto = "plutonium"
let getbatchinfo = function() {
    console.log('Week 03 and day 05 , the topic for today is Nodejs module system batch name ', pluto)
}
module.exports.getbatchinfo = getbatchinfo
module.exports.printdate = printdate;