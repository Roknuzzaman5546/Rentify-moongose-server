// this is api rout for payments authectication
const ownerRequestInsert = require('../../api/ownerRequest/ownerRequesInsert');
const ownerRequestedFindAll = require('../../api/ownerRequest/ownerRequestedFindAll');
const router = require('express').Router();

router.post("/ownerRequest", ownerRequestInsert)
router.get("/ownerRequest", ownerRequestedFindAll)

module.exports = router