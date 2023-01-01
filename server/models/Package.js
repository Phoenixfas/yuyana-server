const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourIdSchemaType = {
  type: Schema.Types.ObjectId,
  ref: "Tour",
  required: true,
};

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tour_ids: [tourIdSchemaType],
  total_no_of_days: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  keywords: Array,
});

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;
