// html routes
const path = require("path");

// ROUTES

module.exports = function (app) {
    // INDEX HTML
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    });
};
