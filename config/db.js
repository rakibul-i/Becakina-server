require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("Database connection established");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
