// this is api rout for blogs authectication
const blogsFindAll = require('../../api/blogs/blogsFindAll');
const blogsInsert = require('../../api/blogs/blogsInsert');
const router = require('express').Router();

router.post("/blogs", blogsInsert)
router.get("/blogs", blogsFindAll)

module.exports = router;