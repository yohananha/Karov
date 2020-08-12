const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Points = require("../models/points");

router.get("/", (req, res) => {
  Points.find()
    .then((points) => {
      res.status(200).json({
        success: true,
        count: points.length,
        data: points,
      });
    })
    .catch((arr) => {
      console.log(arr);
      res.status(500).json({
        error: "Server error",
      });
    });
});
// , distributions.date: req.body.distributions.date
router.post("/", (req, res) => {
  Points.create({
    address: req.body.address,
    distributions: { date: req.body.distributions.date },
  })
    .then((point) => {
      res.status(200).json({ success: true, data: point });
    })
    .catch((arr) => {
      console.log(arr);
      res.status(500).json({
        error: "Server error",
      });
    });
});

module.exports = router;
