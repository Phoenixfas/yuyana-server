const express = require("express");
const router = express.Router();
const { initPayment } = require("../controllers/paymentController");

router.post("/init", initPayment);

module.exports = router;
