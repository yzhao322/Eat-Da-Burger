const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name"], [req.body.name], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.update(
    [`devoured= ${req.body.devoured}`]
    , condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export routes for server.js to use.
module.exports = router;
