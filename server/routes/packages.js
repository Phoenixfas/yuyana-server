const express = require("express");
const router = express.Router();
const {
  getPackageById,
  getPackages,
  createPackage,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController");

// get all packages
router.get("/", getPackages);

// get package by id
router.get("/:id", getPackageById);

// create package
router.post("/", createPackage);

// update package
router.put("/:id", updatePackage);

// delete package
router.delete("/:id", deletePackage);

module.exports = router;
