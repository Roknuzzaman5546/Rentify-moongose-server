// this is api rout for requestedProperties authectication
const ownerRentRequest = require('../../api/requestedProperties/ownerRentRequest');
const ownerSaleRequest = require('../../api/requestedProperties/ownerSaleRequest');
const requestedAccepet = require('../../api/requestedProperties/requestedAccept');
const requestedPropertiesFind = require('../../api/requestedProperties/requestedPropertiesFind');
const requestedPropertiesFindAll = require('../../api/requestedProperties/requestedPropertiesFindAll');
const requestedPropertiesInsert = require('../../api/requestedProperties/requestedPropertiesInsert');
const requestedRejected = require('../../api/requestedProperties/requestedRejcted');
const requestedRentProperties = require('../../api/requestedProperties/requestedRentProperties');
const requestedSaleProperties = require('../../api/requestedProperties/requestedSaleProperties');
const router = require('express').Router();

router.post("/requested-properties", requestedPropertiesInsert)
router.put("/accept/:id", requestedAccepet)
router.put("/reject/:id", requestedRejected)
router.get("/requested-properties", requestedPropertiesFindAll)
router.get("/all_requested", requestedPropertiesFind)
router.get("/ownerRentReq", ownerRentRequest)
router.get("/ownerSaleReq", ownerSaleRequest)
router.get("/requested-sale", requestedSaleProperties)
router.get("/requested-rent", requestedRentProperties)

module.exports = router;