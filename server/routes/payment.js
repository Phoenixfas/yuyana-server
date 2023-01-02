const express = require("express");
const router = express.Router();
const { initPayment } = require("../controllers/paymentController");

// @route   POST /payment/init
router.post("/init", initPayment);

module.exports = router;
