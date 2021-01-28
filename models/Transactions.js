const mongoose = require("mongoose");

const TransctionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add Some Text"],
  },
  amount: {
    type: Number,
    required: [true, "Please Enter a valid amount"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransctionSchema);
