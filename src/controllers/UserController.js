const UserModel = require("../models/UserModel")

const createUser = async function (req , res){
        let User = req.body
        let head = req.headers["isfreeappuser"]
        console.log(head)
        let UserCreated = await UserModel.create(User)
        res.send({data: UserCreated })
    }


module.exports.createUser = createUser