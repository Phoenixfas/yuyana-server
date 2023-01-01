const Package = require("../models/Package");

// @desc    Get all packages
// @route   GET tours/packages
// @access  Public
exports.getPackages = async (req, res, next) => {
  try {
    const packages = await Package.find();

    return res.status(200).json({
      success: true,
      count: packages.length,
      data: packages,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get single package
// @route   GET tours/packages/:id
// @access  Public
exports.getPackageById = async (req, res, next) => {
  try {
    const package = await Package.findById(req.params.id);

    if (!package) {
      return res.status(404).json({
        success: false,
        error: "No package found",
      });
    }

    return res.status(200).json({
      success: true,
      data: package,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Create new package
// @route   POST tours/packages
// @access  Private
exports.createPackage = async (req, res, next) => {
  try {
    const package = await Package.create(req.body);

    return res.status(201).json({
      success: true,
      data: package,
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

// @desc    Update package
// @route   PUT tours/packages/:id
// @access  Private
exports.updatePackage = async (req, res, next) => {
  try {
    const package = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!package) {
      return res.status(404).json({
        success: false,
        error: "No package found",
      });
    }

    return res.status(200).json({
      success: true,
      data: package,
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

// @desc    Delete package
// @route   DELETE tours/packages/:id
// @access  Private
exports.deletePackage = async (req, res, next) => {
  try {
    const package = await Package.findByIdAndDelete(req.params.id);

    if (!package) {
      return res.status(404).json({
        success: false,
        error: "No package found",
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
