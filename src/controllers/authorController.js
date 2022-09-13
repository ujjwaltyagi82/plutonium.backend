const AuthorModel = require('../models/authorModel')
const jwt = require('jsonwebtoken')
const isvalidEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const isValidPassword = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/)
const stringChecking = function (data) {
  if (typeof data !== 'string') {
    return false;
  } else if (typeof data === 'string' && data.trim().length == 0) {
    return false;
  } else {
    return true;
  }
}
//----------Create Author-----------------------------------------------------------------------------------------------------------

const createAuthor = async function (req, res) {
  try {
    let data = req.body
    if (Object.keys(data).length === 0) {
      return res.status(400).send({ status: false, msg: "Please enter details" })
    }
    let firstName = data.fname
    let lastName = data.lname
    let title = data.title
    let email = data.email
    let password = data.password
    if (!stringChecking(firstName)) {
      return res.status(400).send({ status: false, msg: "Firstname must be present and have Non empty string " })
    }
    if (!stringChecking(lastName)) {
      return res.status(400).send({ status: false, msg: "Lastname must be present and have Non empty string " })
    }
    if (!isvalidEmail.test(email)) {
      return res.status(400).send({ msg: "Please enter a valid email", status: false })
    }
    if ((title !== "Mr") && (title !== "Mrs") && (title !== "Miss")) {
      return res.status(400).send({ status: false, msg: "Title should be present and have value  Mr or Mrs or Miss only" })
    }
    const duplicateEmail = await AuthorModel.findOne({ email: email })
    if (duplicateEmail) {
      return res.status(400).send({ status: "false", msg: "email Id already registered ,use another email" })
    }
    if (!isValidPassword.test(password)) {
      return res.status(400).send({ msg: "Password is not correct, At least a symbol, upper and lower case letters and a number with min 8 and max 16 letters", status: false })
    }
    const savedata = await AuthorModel.create(data)
    return res.status(201).send({ msg: "Author created", status: true, data: savedata })
  }
  catch (err) {
    return res.status(500).send({ msg: "Error", status: false, error: err.message })
  }
}
//-------------------Login User --------------------------------------------------------------------------------------------------------------------------------------------
const loginUser = async function (req, res) {
  try {
    let userName = req.body.email;
    let password = req.body.password;
    if (!userName) {
      return res.status(400).send({ status: false, msg: "Please enter email" })
    }
    if (!password) {
      return res.status(400).send({ status: false, msg: "Please enter password" })
    }
    if (!isvalidEmail.test(userName)) {
      return res.status(400).send({ msg: "please enter a valid email", status: false })
    }
    if (!isValidPassword.test(password)) {
      return res.status(400).send({ status: false, msg: "password is not correct, it contain at least a symbol, upper and lower case letters and a number with min 6 and max 16 letters" })
    }

    let author = await AuthorModel.findOne({ email: userName, password: password });
    if (!author) {
      return res.status(400).send({ msg: "Invalid username or password" })
    }
    let payload = {
      authorId: author._id.toString(),
      batch: "plutonium",
      organisation: "FUnctionUp",
    }
    let token = jwt.sign(payload, "projectgroup20-key");
    res.setHeader("x-api-key", token);
    return res.status(201).send({ msg: "login successfully", data: token });
  }
  catch (err) {
    return res.status(500).send({ msg: "Error", error: err.message })
  }
};
//----------Get Authors Details --------------------------------------------------------------------------------------------------------------------------------------------------
const getauthor = async function (req, res) {
  alldata = await AuthorModel.find()
  res.status(200).send({ status: true, Data: alldata })

}


module.exports.getauthor = getauthor
module.exports.createAuthor = createAuthor
module.exports.loginUser = loginUser