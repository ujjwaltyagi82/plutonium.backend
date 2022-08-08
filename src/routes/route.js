
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/get/movies/:indexNumber', function(req , res){

const Thanos = ['LOKI' , 'THOR' , 'IRONAMN' , 'AVENGERS'];

const loki = req.params.indexNumber;
const a = Thanos[loki];

if(loki>Thanos.length)
{
    console.log("use a valid index");
}
else{
    console.log(a);
}
res.send(a);
});
//  router.get ('/get/films/:indexNumber' , function (req , res){

//   let vs =   [ {
//         'id': 1,
//          'name': 'The Shining'
//        }, {
//         'id': 2,
//         'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }];
//        const bs = req.params.indexNumber;
//        const c = vs[bs];
//        console.log(c);




// 
module.exports = router;