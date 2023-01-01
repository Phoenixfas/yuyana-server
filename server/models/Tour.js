const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourProgramSchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const tourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  titleMotto: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tour_program: [tourProgramSchema],
  no_of_days: {
    type: Number,
    required: true,
  },
  included: Array,
  not_included: Array,
  price: {
    type: Number,
    required: true,
  },
  keywords: Array,
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
