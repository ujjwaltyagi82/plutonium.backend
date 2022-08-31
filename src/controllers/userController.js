const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      xyz.status(201).send({ msg: savedData });
    }
    else xyz.status(400).send({ msg: "input field is blank" })
  }
  catch (err) {
    console.log("i catch th error", err.message)
    xyz.status(500).send({ status: false, msg: "Bad request from server side", error: err.message })

  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });
  }
  catch (err) {
    console.log("i catch the error", err.message)
    res.status(500).send({ status: false, msg: "server error ", error: err.message })
  }
};

const getUserData = async function (req, res) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];


    if (!token) return res.status(403).send({ status: false, msg: "token must be present"});
    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
    let limit = req.params.userId
    let acces = decodedToken.userId
    if (limit != acces) return res.send({ status: false, msg: "you can't see other user personal data" })
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (err) {
    console.log("catch the error", err.message)
    res.status(500).send({ status: false, msg: "server side error", error: err.message })
  }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let token = req.headers["x-auth-token"]
  if (!token) return res.send({ status: false, msg: "token must bhi present" })
  let decode = jwt.verify(token, 'functionup-plutonium')
  if (!decode) return res.send({ status: false, msg: "token input is not correct" })
  let limit = req.params.userId
  let acces = decode.userId
  if (limit != acces) return res.status(403).send({ status: false, msg: "you cant update other person data" })
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
  }
  catch (err){
console.log("catch the error" , err.message)
res.status(500).send({status : false , msg:"server problem" , error : err.message})

  }
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let token = req.headers["x-auth-token"]
  if (!token) return res.send({ status: false, msg: "token must bhi present" })
  let decode = jwt.verify(token, 'function-plutonium')
  if (!decode) return res.send({ status: false, msg: "token is invalid" })
  let userlimit = req.params.userId
  let acces = decode.userId
  if (limit != acces) return res.send({ status: false, msg: "you can't delete other user data " })
  let user = await userModel.findById(userId)
  if (!user) {
    res.send("no such user exists")
  }
  let deleteData = req.body;
  let del = await userModel.findOneAndDelete({ _id: userId }, deleteData)
  res.send({ status: del, data: del })
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

// 2xx succesful
// 4xx client error
// 5xx server error 
// 1xx informational response
// 3xx redirection

