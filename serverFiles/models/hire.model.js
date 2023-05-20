const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hireSchema = new Schema({
    // CODE HERE
    firstName: {
      type: String,
      trim: true,
      required: "first name is required"
    },
  
    lastName: {
      type: String,
      trim: true,
      required: "last name is required"
    },
  
    email: {
      type: String,
      trim: true,
      required: "email is required"
    },

    subject: {
      type: String,
      trim: true,
      default: ""
    },
  
    message: {
      type: String,
      trim: true,
      default: ""
    },

    skill: {
      type: String,
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports.Inquiry = mongoose.model("Inquiry", hireSchema);