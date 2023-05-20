const { Inquiry } = require("../models/hire.model");

module.exports = {
  index: (request, response) => {
    response.json({ message: "Backend Server Running" });
  },
  newClient: (request, response) => {
      console.log("new client", request.body)
      Inquiry.create(
      request.body)
      .then((newCli) =>
        response.json({ message: "success", results: newCli })
      )
      .catch((error) => response.json({ message: "error", results: error }));
  },
};
