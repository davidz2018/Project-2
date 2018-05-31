var db = require("../models");

module.exports = function(app) {
    app.post("/api/fan", function(req, res) {
        console.log(req.body);
        db.Fan.create(req.body).then(function(dbFan) {
            res.json(dbFan);
        });
    });
};