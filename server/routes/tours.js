const express = require("express");
const router = express.Router();
const {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

// get all tours
router.get("/", getTours);

// get tour by id
router.get("/:id", getTourById);

// create tour
router.post("/", createTour);

// update tour
router.put("/:id", updateTour);

// delete tour
router.delete("/:id", deleteTour);

module.exports = router;
