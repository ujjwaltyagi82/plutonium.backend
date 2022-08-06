
let text = "FUNCTIONUP";
let result = function() {
    console.log(text.toLowerCase());
}


let txt = "functionup";
let answer = function() {
    console.log(txt.toUpperCase());
}

let tri = " functionup  "
let joint = function (){
    console.log (tri.trim());
}
 
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’

module.exports.result=result
 
module.exports.answer=answer

module.exports.joint = joint