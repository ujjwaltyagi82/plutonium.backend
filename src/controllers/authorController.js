const AuthorModel = require('../models/authorModel')

const createAuthor = async function (req, res) {
    try {
        let data = req.body
        const savedata = await AuthorModel.create(data)
        return res.status(201).send({ msg: "Author created", status: true, data: savedata })
    }
    catch (err) {
        return res.status(500).send({ msg: "Error", status: false, error: err.message })
    }
}

module.exports.createAuthor = createAuthor


const getauthor = async function (req, res) {
    let saveddata = await AuthorModel.find()
    res.send({ status: true, data: saveddata })
}

module.exports.getauthor = getauthor