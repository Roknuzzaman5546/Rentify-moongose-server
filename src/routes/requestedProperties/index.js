// this is api rout for requestedProperties authectication
const requestedPropertiesInsert = require('../../api/requestedProperties/requestedPropertiesInsert');

const router = require('express').Router();

router.post("/requested-properties", requestedPropertiesInsert)

module.exports = router