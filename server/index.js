const port = process.env.PORT || 5000;
require("dotenv").config();
const express = require("express");
const app = express();
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("server/public"));

// Routes
app.use("/blogs", require("./routes/articles"));
app.use("/payment", require("./routes/payment"));
app.use("/paymentVerify", require("./routes/paymentVerify"));
app.use("/tours", require("./routes/tours"));
app.use("/packages", require("./routes/packages"));
app.use("/bookings", require("./routes/bookings"));

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
