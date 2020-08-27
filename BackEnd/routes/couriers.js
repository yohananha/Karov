const express = require("express");
const router = express.Router();
const Couriers = require("../models/couriers");

router.get("/", (req, res) => {
  Couriers.find()
    .then((couriers) => {
      res.status(200).json({
        success: true,
        count: couriers.length,
        data: couriers,
      });
    })
    .catch((arr) => {
      console.log(arr);
      res.status(500).json({
        error: "Server error",
      });
    });
});

router.post("/", (req, res) => {
  Couriers.create({
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
  })
    .then((courier) => {
      res.status(200).json({ success: true, data: courier });
    })
    .catch((arr) => {
      console.log(arr);
      res.status(500).json({
        error: "Server error",
      });
    });
});

module.exports = router;
