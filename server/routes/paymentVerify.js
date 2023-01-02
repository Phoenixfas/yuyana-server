const express = require("express");
const router = express.Router();
const { verifyPayment } = require("../controllers/paymentController");

// @route   POST /payment/verify
router.post("/", verifyPayment);

module.exports = router;
