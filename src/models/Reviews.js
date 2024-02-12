const { model, Schema } = require("mongoose");

const ReviewsSchema = new Schema({
    propertyId: {
        type: String,
        required: true
    },
    propertyTitle: {
        type: String,
        required: true
    },
    reviewerEmail: {
        type: String,
        required: true
    },
    reviewerName: {
        type: String,
        required: true
    },
    reviewerImage: {
        type: String,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    },
    reviewImage: {
        type: String,
        required: true
    },
    reviewRating: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
})

const Reviews = model("reviews", ReviewsSchema);
module.exports = Reviews