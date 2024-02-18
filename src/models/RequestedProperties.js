const { model, Schema } = require("mongoose");

const Requested_PropertiesSchema = new Schema({
    property: {
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
            required: true
        },
        verify_status: {
            type: String,
            required: true
        },
        property_img: {
            type: String,
            required: true
        },
        property_title: {
            type: String,
            required: true
        },
        property_category: {
            type: String,
            required: true
        },
        property_description: {
            type: String,
            required: true
        },
        property_details: {
            property_id: {
                type: Number,
                required: true
            },
            property_price: {
                type: Number,
                required: true
            },
            property_type: {
                type: String,
                required: true
            },
            property_status: {
                type: String,
                required: true
            },
            bedroom: {
                type: Number,
                required: true
            },
            bath: {
                type: Number,
                required: true
            },
            balcony: {
                type: Number,
                required: true
            },
            garages: {
                type: Number,
                required: true
            },
            sqf: {
                type: Number,
                required: true
            },
            built: {
                type: Number,
                required: true
            },
            floor_plans: {
                type: String,
                required: true
            },
            property_video: {
                type: String,
                required: true
            },
            property_features: [],
            property_tags: [],
        },
        property_location: {
            address: {
                street: {
                    type: String,
                    required: true
                },
                city: {
                    type: String,
                    required: true
                },
                state: {
                    type: String,
                    required: true
                },
                country: {
                    type: String,
                    required: true
                }
            }
        }
    },
    propertyID: {
        type: String,
        required: true
    },
    requestStatus: {
        type: String,
        required: true
    },
    requesterName: {
        type: String,
        required: true
    },
    requesterNumber: {
        type: Number,
        required: true
    },
    requesterEmail: {
        type: String,
        required: true
    },
    requesterPhoto: {
        type: String,
        required: true
    },
    requesterMessage: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    children: {
        type: String,
        required: true
    },

})

const Requested_Properties = model("Requested_Properties", Requested_PropertiesSchema);
module.exports = Requested_Properties;