const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)
router.post("/createbook", UserController.createUser  )
router.get("/getbookdata", UserController.getUsersData)
router.get("/getData", UserController.Booklet)
router.get ("/getBooksInYear", UserController.getBookyear)
router.get ("/getRandomBooks" , UserController.getRandomBooks)
router.get ("/getXINRBooks" , UserController.getXINRBooks)
module.exports = router;