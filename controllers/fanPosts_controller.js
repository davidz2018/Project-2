var express = require("express");
var router = express.Router();
var db = require("../models");

// app.use(express.static("..public/assets/images/logos")); 

router.get("/", function(req, res) {
  res.redirect("/posts");
});

// ROUTER GET - to pull previous POSTS
    router.get("/posts", function(req, res) {
      db.Post.findAll({
        include: [db.Fan],
          title: [
            ["post_title", "ASC"]
        ]
        }) .then(function(dbPost) {
          var hbsObject = {
              post: dbPost,
          };
          return res.render("index", hbsObject);
        });
    });

    router.get("/posts", function(req, res) {
      db.Fan.findAll({
        include: [db.Post],
          title: [
            ["fan_name", "ASC"]
        ]
        }) .then(function(dbFan) {
          var hbsObject = {
               fan: dbFan
          };
          return res.render("index", hbsObject);
        });
    });



// ROUTER POST
    router.post("/posts/create", function(req, res) {
      db.Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        fan_name: req.body.fan_name,
      })
        .then(function(dbPost) {
          console.log("testing" + dbPost);
          res.redirect("/");
        });
    });

   router.post("/fans/create", function(req, res) {
      db.Fan.create({
      fan: req.body.fan_name,
      PostId: req.body.post_id,
    })
      .then(function(dbFan) {
        console.log("testing" + dbFan);
        res.redirect("/");
      });
  });
  
module.exports = router;