// this is api rout for comments authectication
const reviewsFindAll = require('../../api/reviews/reviesFIndAll');
const reviewsInsert = require('../../api/reviews/reviewsInsert');
const router = require('express').Router();

router.post("/reviews", reviewsInsert)
router.get("/reviews", reviewsFindAll)

module.exports = router