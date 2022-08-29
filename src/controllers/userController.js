const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
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
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-plutonium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
let limit = req.params.userId
let acces=decodedToken.userId
if(limit != acces) return res.send({status:false, msg:"you can't see other user personal data"})
  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let token = req.headers["x-auth-token"]
  if (!token) return res.send({ status: false, msg: "token must bhi present" })
  let decode = jwt.verify(token, 'functionup-plutonium')
  if (!decode) return res.send({ status: false, msg: "token input is not correct" })
  let limit = req.params.userId
  let acces = decode.userId
  if (limit != acces) return res.send({ status: false, msg: "you cant update other person data" })
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status:false , msg:"token must bhi present"})
  let decode =jwt.verify(token , 'function-plutonium')
  if(!decode) return res.send({status:false , msg:"token is invalid"})
  let userlimit = req.params.userId
  let acces =decode.userId
  if(limit != acces)return res.send({status : false ,msg: "you can't delete other user data "})
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