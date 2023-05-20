const { Project } = require("../models/projects.model");

module.exports = {
  index: (req, res) => {
    res.json({ message: "Backend Server Running" });
  },
  allProjects: (req, res) => {
    Project.find({})
      .then((projects) => res.json({ message: "success", results: projects }))
      .catch((err) => res.json({ message: "error", results: err }));
  },
  getProjectById: (req, res) => {
    console.log("new project", req.body);
    Project.findById({ _id: req.params.id })
      .then((proj) => res.json({ message: "success", results: proj }))
      .catch((error) => res.json({ message: "error", results: error }));
  }
};
