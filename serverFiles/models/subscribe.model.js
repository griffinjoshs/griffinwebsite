const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
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
},
{ timestamps: true }
);

module.exports.Subscriber = mongoose.model("Subscriber", subscriberSchema);
