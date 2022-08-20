const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/PublisherModel")

const createBook= async function (req, res) {
    let book = req.body 
    let authorid = book.authorid
    let publisherid = book.publisherid
    if(!authorid){
return res.send({status: false , msg : "please input author id  "})
} let Validauthor = await authorModel.findById(authorid)
if (!Validauthor){
return res.send ({status : false , msg : "Please re-check your auhthor id Id may be this id is incorrect"})
}
 else if (!publisherid) {
return res.send({status:false , msg : "please use a pblisher id "})
} let validpublisher = await publisherModel.findById(publisherid)
if (!validpublisher){
return res.send ({status : false , msg : "please re-check your publisher id may be this id is not valid"})
}
    let bookCreated = await bookModel.create(book)
   res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('authorid').populate('publisherid')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

