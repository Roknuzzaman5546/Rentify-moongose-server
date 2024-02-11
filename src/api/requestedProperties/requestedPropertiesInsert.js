const Requested_Properties = require("../../models/requestedProperties");

const requestedPropertiesInsert = async (req, res) => {
    const requested_Properties = new Requested_Properties({
        property: req.body.property,
        savedUserEmail: req.body.savedUserEmail
    });
    const result = await requested_Properties.save()
    res.send(result)
}

module.exports = requestedPropertiesInsert