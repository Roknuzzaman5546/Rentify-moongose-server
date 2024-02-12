const { model, Schema } = require("mongoose");

const PaymentsSchema = new Schema({
    paymentUser: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    requestId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    property_status: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
})

const Payments = model("payments", PaymentsSchema);
module.exports = Payments