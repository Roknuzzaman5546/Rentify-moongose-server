// this is api rout for properties authectication
const propertiesFindAll = require('../../api/properties/properties');
const propertiesInsert = require('../../api/properties/propertiesInset');
const router = require('express').Router();

router.post("/properties", propertiesInsert)
router.get("/properties", propertiesFindAll);

module.exports = router