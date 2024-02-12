const { model, Schema } = require("mongoose");


const BlogsSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    commodoviverra: [],
    majorFacility: [],
    blogerInfo: {
        blogerName: {
            type: String,
            required: true
        },
        blogerEmail: {
            type: String,
            required: true
        },
        blogerImg: {
            type: String,
            required: true
        },
        blogerDetails: {
            type: String,
            required: true
        }
    }
})

const Blogs = model("blogs", BlogsSchema);
module.exports = Blogs