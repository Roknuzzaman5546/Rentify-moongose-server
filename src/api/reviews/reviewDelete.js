const { ObjectId } = require("mongodb");
const Reviews = require("../../models/Reviews");


const reviewsDelet = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await Reviews.deleteOne(filter);
    res.send(result);
}

module.exports = reviewsDelet