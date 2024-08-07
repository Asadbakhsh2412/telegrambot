const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    tgId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isBot: {
      type: Boolean,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    promptToken: {
      type: Number,
      required: false,
    },
    completionToken: {
      type: Number,
      required: false,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
