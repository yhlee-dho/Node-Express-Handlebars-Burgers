// requirements
const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();


// Create routes
    // get
router.get("/", function(req, res) {
        // selectAll hamburgers
  burger.selectAll(function(data) {
    const hamburgerObj = {
      burgers: data
    };
            // render
    // console.log(hamburgerObj);
    res.render("index", hamburgerObj);
  });
});
    // post
router.post("/api/burgers", function(req, res) {
        // insertOne burger_name
  burger.insertOne(
    {
      burger_name: req.body.burger_name
    },
            // send json of id: body?.insertId
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});
    // put
router.put("/api/burgers/:id", function(req, res) {
  const condition = {id: req.params.id};
        // updateOne devoured
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
            // check if any rows were changed. if not id is null, 404
    condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// export router
module.exports = router;