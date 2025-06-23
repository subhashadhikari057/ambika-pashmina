// src/middleware/errorHandler.js
const CustomError = require("../utils/customError");

const errorHandler = (err, req, res, next) => {
  console.error("⛔️ Error:", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    type: err.type || "GENERAL_ERROR",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
