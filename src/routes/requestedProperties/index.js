// this is api rout for requestedProperties authectication
const ownerRentRequest = require('../../api/requestedProperties/ownerRentRequest');
const ownerSaleRequest = require('../../api/requestedProperties/ownerSaleRequest');
const requestedPropertiesFind = require('../../api/requestedProperties/requestedPropertiesFind');
const requestedPropertiesInsert = require('../../api/requestedProperties/requestedPropertiesInsert');
const requestedRentProperties = require('../../api/requestedProperties/requestedRentProperties');
const requestedSaleProperties = require('../../api/requestedProperties/requestedSaleProperties');
const router = require('express').Router();

router.post("/requested-properties", requestedPropertiesInsert)
router.get("/all_requested", requestedPropertiesFind)
router.get("/ownerRentReq", ownerRentRequest)
router.get("/ownerSaleReq", ownerSaleRequest)
router.get("/requested-sale", requestedSaleProperties)
router.get("/requested-rent", requestedRentProperties)

module.exports = router;