const mongoose = require("mongoose");
const URL = process.env.URL;

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
