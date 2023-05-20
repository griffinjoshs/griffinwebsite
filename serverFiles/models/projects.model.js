const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  // CODE HERE
  projectName: {
    type: String,
    trim: true,
    required: "project name is required"
  },

  projectDescription: {
    type: String,
    trim: true,
    required: "project description is required"
  },

  topic: {
    type: Array,
    required: "topic is required"
  },

  skills: {
    type: Array,
    required: "skills is required"
  },
  
  image: {
    type: String,
    trim: true,
    // required: "image is required"
  },

  link: {
    type: String,
    trim: true,
  },
},
{ timestamps: true }
);

module.exports.Project = mongoose.model("Project", projectSchema);