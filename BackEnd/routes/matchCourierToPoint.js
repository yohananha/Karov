const express = require("express");
const router = express.Router();
const Points = require("../models/points");

router.post("/", (req, res) => {
  const condition = {
    address: req.body.address,
    distributions: { $elemMatch: { date: req.body.date } },
  };
  const action = { $set: { "distributions.$.courierID": req.body.courierID } };

  Points.findOneAndUpdate(condition, action)
    .then((point) => {
      res.status(200).json({
        success: true,
        data: point,
      });
    })
    .catch((arr) => {
      console.log(arr);
      res.status(500).json({
        error: "Server error",
      });
    });
});

module.exports = router;
