const projectController = require("../controllers/projects.controller");

module.exports = function (app) {
  app.get("/api", projectController.index);
  app.get("/api/projects", projectController.allProjects);
};
