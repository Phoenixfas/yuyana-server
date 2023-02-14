const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        tour: {
            type: Boolean,
            required: false,
        },
        tour_id: {
            type: Schema.Types.ObjectId,
            ref: "Tour",
            required: false,
        },
        package: {
            type: Boolean,
            required: false,
        },
        package_id: {
            type: Schema.Types.ObjectId,
            ref: "Package",
            required: false,
        },
    }, 
    { 
        timestamps: true 
    }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;