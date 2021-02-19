var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
      res.json({ burgers: data });
    });
  });

  router.post("/burgers", function(req, res) {
    burger.create([
      "name", "sleepy"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
     });
  });





// Export routes for server.js to use.
module.exports = router;