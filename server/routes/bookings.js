const express = require('express');
const router = express.Router();
const { getBookings, getBooking } = require('../controllers/bookingsController');

router.get('/', getBookings);
router.get('/:id', getBooking);

module.exports = router;