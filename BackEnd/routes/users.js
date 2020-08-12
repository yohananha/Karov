const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users.js");

// router.get("/", (req, res) => {
//   res.send("hello world ");
// });

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .exec()
    .then((doc) => {
      console.log("from database ", doc);
      if (doc) {
        res.status(200).json({ doc });
      } else {
        res.status(404).json({ massege: "no valid id found" });
      }
    })
    .catch((err) => {
      console.log("My error ", err);
      res.status(500).json({ error: err, koko: "my koko" });
    });
});

router.post("/", (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    isManager: req.body.isManager,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        messege: "User was added seccessfuly!",
        createdUser: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(201).json({
        messege: "User adding failure!",
        createdUser: user,
      });
    });
});

router.patch("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send("you want to update user id: " + userId);
});

router.delete("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send("you want to delete user id: " + userId);
});

module.exports = router;
