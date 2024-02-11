// this is api rout for properties authectication
const propertiesFindAll = require('../../api/properties/properties');
const router = require('express').Router();

router.get("/properties", propertiesFindAll);

module.exports = router