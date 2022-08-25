const publisherModel= require("../models/PublisherModel")

const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getpublisherData = async function (req ,res){
let publisher = await publisherModel.find()
res.send({data : publisher})

}

module.exports.createpublisher = createpublisher
module.exports.getpublisherData = getpublisherData
