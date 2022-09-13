const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorController')
const BlogController = require('../controllers/blogController')
const { authentication, authorisation } = require('../middlewares/middlewares')

router.post('/authors', AuthorController.createAuthor)
router.post("/blogs", authentication, BlogController.createBlog)
router.get('/blogs', authentication, BlogController.getBlogs)
router.get("/getauthor", AuthorController.getauthor)

//------------------------------------------------------------------------------------------------------------------

router.put('/blogs/:blogId', authentication, authorisation, BlogController.updateBlogs)
router.delete('/blogs/:blogId', authentication, authorisation, BlogController.deleteBlogsById)
router.delete('/delete', authentication, authorisation, BlogController.deleteBlogs)
router.get('/getblog', BlogController.getBlogs)
router.post('/login', AuthorController.loginUser)
module.exports = router;


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJZCI6IjYzMTVlZDg0MmE1NTM4OWJlNjcwMGFiNyIsImJhdGNoIjoicGx1dG9uaXVtIiwib3JnYW5pc2F0aW9uIjoiRlVuY3Rpb25VcCIsImlhdCI6MTY2MjU2NjU3OX0.G0dLdRACQTgYoL4cm60T9-5939zfCbGLAZqyrT2aNfQ

//6315ed842a55389be6700ab7
//6316ebf1be895dc3572179d0


//6315f4123e4c6973d40cbcc3