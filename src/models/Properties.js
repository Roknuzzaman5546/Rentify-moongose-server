const { model, Schema } = require("mongoose");

const PropertiesSchema = new Schema({
    property_info: {
        owner_details: {
            owner_name: {
                type: String,
                required: true
            },
            owner_img: {
                type: String,
                required: true
            },
            owner_email: {
                type: String,
                required: true
            }
        },
        ownership_duration: {
            type: String,
            required: true
        },
        property_for: {
            type: String,
            require: true
        },
        property_status: {
            type: String,
            require: true
        },
        property_img: {
            type: String,
            require: true
        },
        property_title: {
            type: String,
            require: true
        },
        property_category: {
            type: String,
            require: true
        },
        property_description: {
            type: String,
            require: true
        },
        property_details: {
            property_id: {
                type: Number,
                require: true
            },
            property_price: {
                type: Number,
                require: true
            },
            property_type: {
                type: String,
                require: true
            },
            property_status: {
                type: String,
                require: true
            },
            bedroom: {
                type: Number,
                require: true
            },
            bath: {
                type: Number,
                require: true
            },
            balcony: {
                type: Number,
                require: true
            },
            garages: {
                type: Number,
                require: true
            },
            sqf: {
                type: Number,
                require: true
            },
            built: {
                type: Number,
                require: true
            },
            floor_plans: {
                type: String,
                require: true
            },
            property_video: {
                type: String,
                require: true
            },
            property_features: [],
            property_tags: [],
        },
        property_location: {
            address: {
                street: {
                    type: String,
                    require: true
                },
                city: {
                    type: String,
                    require: true
                },
                state: {
                    type: String,
                    require: true
                },
                country: {
                    type: String,
                    require: true
                }
            }
        }
    }
})

const Properties = model("Properties", PropertiesSchema);
module.exports = Properties