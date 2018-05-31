var db = require("../models");

module.exports = function(app) {
  app.get("/api/teamBars", function(req, res) {
    db.teamBars.findAll({
    }).then(function(dbTeamBar) {
      res.json(dbTeamBar);
    });
  });

  app.get("/api/teamBars/:id", function(req, res) {
    db.dbTeamBar.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbTeamBar) {
      res.json(dbTeambar);
    });
  });

  app.post("/api/teamBars", function(req, res) {
    db.TeamBar.create(req.body).then(function(dbTeamBar) {
      res.json(dbTeamBar);
    });
  });
};