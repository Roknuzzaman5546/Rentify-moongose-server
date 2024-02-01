const SavedProperties = require('../../models/SavedProperties');
const router = require('express').Router();

router.post("/saved-properties", async (req, res) => {
    const savedProperties = new SavedProperties({
        property: req.body.property,
        savedUserEmail: req.body.savedUserEmail
    });
    const result = await savedProperties.save()
    res.send(result)
})

module.exports = router