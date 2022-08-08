const express = require('express');
// const abc = require('../introduction/intro')
const bcd = require ('../logger/logger')
const size = require ('../validator/formatter')
const load = require('lodash');
const z = require ('../util/helper');
const { chunk, tail, maxBy, union } = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {

    
    bcd.welcome()
    // console.log('My batch is', abc.name)
    // abc.printName()
    z.printdate()
    // z.printmonths()
    z.getbatchinfo()
    size.result()
    size.answer()
    size.joint()

    let array1 = [1,3,5,7,9,11,13,15,17,19];
    let result1 = load.tail(array1)
    console.log(result1)
    


    let array3 =([1,2,3,1,5,3,2])
    let result3 = load.union(array3)
    console.log(result3)
   


    


    // let weekdend = ['Saturday','Sunday','Monday']
    // let result = _.first(weekdend, 2)
    // console.log('Unserscore example resultr is ',result)

    res.send('My second ever api!')

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason