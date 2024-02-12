// this is api rout for users authectication
const usersFind = require('../../api/users/usersFind');
const usersFindALl = require('../../api/users/usersFindAll');
const userInsert = require('../../api/users/usersInsert');
const router = require('express').Router();

router.post("/users", userInsert)
router.get("/users", usersFindALl)
router.get("/users/:email", usersFind)

module.exports = router;