const Tour = require("../models/Tour");

// @desc    Get all tours
// @route   GET /tours
// @access  Public
exports.getTours = async (req, res, next) => {
  try {
    const tours = await Tour.find();

    return res.status(200).json({
      success: true,
      count: tours.length,
      data: tours,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get single tour
// @route   GET /tours/:id
// @access  Public
exports.getTourById = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        error: "No tour found",
      });
    }

    return res.status(200).json({
      success: true,
      data: tour,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Create new tour
// @route   POST /tours
// @access  Private
exports.createTour = async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);

    return res.status(201).json({
      success: true,
      data: tour,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Update tour
// @route   PUT /tours/:id
// @access  Private
exports.updateTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!tour) {
      return res.status(404).json({
        success: false,
        error: "No tour found",
      });
    }

    return res.status(200).json({
      success: true,
      data: tour,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete tour
// @route   DELETE /tours/:id
// @access  Private
exports.deleteTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        error: "No tour found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
