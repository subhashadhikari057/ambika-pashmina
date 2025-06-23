// src/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✓ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("✗ MongoDB connection error:", err.message);
    process.exit(1);          // stop the server if DB fails
  }
};

module.exports = connectDB;
