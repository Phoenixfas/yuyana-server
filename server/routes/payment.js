const express = require("express");
const router = express.Router();
const { initPayment } = require("../controllers/paymentController");

// @route   POST /payment/init
router.post("/init", initPayment);

// @route   POST /payment/verify
// router.post("/verify", verifyPayment);

module.exports = router;
