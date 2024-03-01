const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, "Please add a text value"] },
  },
  {
    timestamps: true,
  }
);

mongoose.exports = mongoose.model("Task", taskSchema);
