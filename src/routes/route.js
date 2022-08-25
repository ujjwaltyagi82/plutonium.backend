const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
const headerController = require("../controllers/headerController")
const middel = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.post("/createpublisher", publisherController.createpublisher )

router.get("/getpublisherData", publisherController.getpublisherData)

router.get("/getBooksWithAuthorDetails", middel.middel1, bookController.getBooksWithAuthorDetails)

router.post("/createHead" , headerController.createHead)
router.get("/gethead" , headerController.gethead)


module.exports = router;