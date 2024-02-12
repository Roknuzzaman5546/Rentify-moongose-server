// this is api rout for comments authectication
const commentFindAll = require('../../api/comments/commentFindAll');
const commentInsert = require('../../api/comments/commentInsert');
const router = require('express').Router();

router.post("/comments", commentInsert)
router.get("/comments", commentFindAll)

module.exports = router

