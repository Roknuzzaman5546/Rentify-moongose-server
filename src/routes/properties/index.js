// this is api rout for properties authectication
const propertiesFindAll = require('../../api/properties/properties');
const propertiesFindbyId = require('../../api/properties/propertiesFindbyId');
const propertiesInsert = require('../../api/properties/propertiesInset');
const router = require('express').Router();

router.post("/properties", propertiesInsert)
router.get("/properties", propertiesFindAll);
router.get("/properties/:id", propertiesFindbyId)

module.exports = router