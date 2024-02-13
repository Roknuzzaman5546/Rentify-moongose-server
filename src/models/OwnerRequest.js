const { model, Schema } = require("mongoose");

const OwnerSchema = new Schema({
    ownerEmail: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerImage: {
        type: String,
        required: true
    },
    ownerProfession: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})


const Owner = model("OwnerRequest", OwnerSchema);
module.exports = Owner