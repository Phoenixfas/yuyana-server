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

// Routes
app.use("/blogs", require("./routes/articles"));
app.use("/payment", require("./routes/payment"));

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
