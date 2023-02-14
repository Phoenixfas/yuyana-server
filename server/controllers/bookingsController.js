const Booking = require('../models/Booking');

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({bookings});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const booking = await Booking.findById(id);
        res.status(200).json(booking);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}