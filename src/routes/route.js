const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
const headerController = require("../controllers/headerController")
const middel = require("../middleware/middleware")
const UserController = require("../controllers/UserController")
const newUserController = require("../controllers/newUserController")
const Ordercreated =require("../controllers/OrderController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/User" , UserController.createUser)

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.post("/createpublisher", publisherController.createpublisher )

router.get("/getpublisherData", middel.middel1,publisherController.getpublisherData)

router.get("/getBooksWithAuthorDetails", middel.middel1, bookController.getBooksWithAuthorDetails)

router.post("/createHead" , headerController.createHead)
router.get("/gethead" , headerController.gethead)

router.post("/createUser",middel.isFreeAppUser, UserController.createUser)

router.post("/ordercreated" , Ordercreated.CreateOrder)
router.get("/getorder" , Ordercreated.getorder)
router.post("/verify" , newUserController.createUser)
// /------------------------------------------------------------------------------------------------

// router.post("/users",newUserController.createUser)

router.post("/login", newUserController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", newUserController.getUserData)

router.put("/users/:userId", newUserController.updateUser)



//------------------------------------------------------------------------------------------------
const DocController = require("../controllers/DocController")

router.post("/document" , DocController.createDoc)
router.post("/enter" , DocController.login)
router.get("/Get" , DocController.getdoc)
module.exports = router;