const subscribeController = require("../controllers/subscribe.controller");

module.exports = function (app) {
    app.get('/api', subscribeController.index)
    app.post('/api/subscribe', subscribeController.newSubscriber)
}