// this is api rout for requestedProperties authectication
const ownerRentRequest = require('../../api/requestedProperties/ownerRentRequest');
const ownerSaleRequest = require('../../api/requestedProperties/ownerSaleRequest');
const requestedPropertiesFind = require('../../api/requestedProperties/requestedPropertiesFind');
const requestedPropertiesInsert = require('../../api/requestedProperties/requestedPropertiesInsert');
const router = require('express').Router();

router.post("/requested-properties", requestedPropertiesInsert)
router.get("/all_requested", requestedPropertiesFind)
router.get("/ownerRentReq", ownerRentRequest)
router.get("/ownerSaleReq", ownerSaleRequest)

module.exports = router;