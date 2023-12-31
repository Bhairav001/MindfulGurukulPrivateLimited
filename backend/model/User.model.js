const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]*$/, // Alphabets only
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Alphanumeric only
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]+$/, // Number only
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: true,
  },
  howDidYouHear: {
    type: [String],
    enum: ["LinkedIn", "Friends", "Job Portal", "Others"],
  },
  city: {
    type: String,
    enum: ["Mumbai", "Pune", "Ahmedabad"],
  },
  state: {
    type: String,
    required: true,
    enum: ["Gujarat", "Maharashtra", "Karnataka"],
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
