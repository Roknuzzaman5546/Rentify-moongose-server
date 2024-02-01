const Properties = require('../../models/Properties');
const router = require('express').Router();


router.get("/properties", async (req, res) => {
    const result = await Properties.find();
    res.send(result);
});

module.exports = router