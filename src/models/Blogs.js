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
    bloggerInfo: {
        bloggerName: {
            type: String,
            required: true
        },
        bloggerEmail: {
            type: String,
            required: true
        },
        bloggerImg: {
            type: String,
            required: true
        },
        bloggerDetails: {
            type: String,
            required: true
        }
    }
})

const Blogs = model("blogs", BlogsSchema);
module.exports = Blogs