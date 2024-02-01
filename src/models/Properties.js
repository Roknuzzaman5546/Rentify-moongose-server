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
            owner_phone: {
                type: Number,
                require: true
            },
            owner_email: {
                type: String,
                required: true
            },
            owner_profession: {
                type: String,
                required: true
            },
            owner_address: {
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

// {
//     "_id": 1,
//     "property_info": {
//       "owner_details": {
//         "owner_name": "John Doe",
//         "owner_img": "https://i.ibb.co/FKgWFH2/mngr.jpg",
//         "owner_phone": "123-456-7890",
//         "owner_email": "johndoe@example.com",
//         "owner_profession": "Real Estate Agent",
//         "owner_address": "123 Main Street, Anytown, CA"
//       },
//       "ownership_duration": "annual",
//       "property_for": "sale",
//       "property_status": "available",
//       "property_img": "https://i.ibb.co/SPFF7v3/property-3.jpg",
//       "property_title": "Spacious 3-Bedroom Apartment in Prime Location",
//       "property_category": "Apartment",
//       "property_details": {
//         "property_id": "123456",
//         "property_price": 250000,
//         "property_type": "apartment",
//         "property_status": "available",
//         "bedroom": 3,
//         "bath": 2,
//         "balcony": 1,
//         "garages": 1,
//         "sqf": 1500,
//         "built": "2015-01-01",
//         "floor_plans": "https://example.com/floor_plans.pdf",
//         "property_video": "https://example.com/property_video.mp4",
//         "property_features": [
//           "balcony",
//           "garage",
//           "modern kitchen",
//           "pet-friendly"
//         ],
//         "property_tags": [
//           "spacious",
//           "family-friendly",
//           "near park"
//         ]
//       },
//       "property_location": {
//         "address": {
//           "street": "123 Main Street",
//           "city": "Anytown",
//           "state": "CA",
//           "country": "USA"
//         },
//         "coordinate": {
//           "latitude": 37.7749,
//           "longitude": -122.4194
//         }
//       }
//     }
//   },