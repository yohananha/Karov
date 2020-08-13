const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Points = require("../models/points");

////// delete ////////////
router.get("/test", (req, res) => {
  //Points.find({ location: { coordinates: [35.1657572, 31.8009876] } })
  Points.find({ address: "11 shoshana st jerusalem" })

    .then((point) => {
      console.log("point: " + point);
      res.status(200).json({
        success: true,
        count: point.length,
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
////////////////////
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
// router.post("/", (req, res) => {
//   Points.find({ address: this.address })
//     .then((res) => {
//       if (res.length > 0) {
//         // pushe new intry in distributions arry
//         // find and update
//       } else {
//         // pushe new point to DB

//         Points.create({
//           address: req.body.address,
//           distributions: { date: req.body.distributions.date },
//         }).then((point) => {
//           res.status(200).json({ success: true, data: point });
//         });
//       }
//     })

//     .catch((arr) => {
//       console.log(arr);
//       res.status(500).json({
//         error: "Server error",
//       });
//     });
// });

router.post("/", (req, res) => {
  Points.find({ address: req.body.address })
    .exec()
    .then((res) => {
      if (res.length > 0) {
        // find and update
        const dist = {
          date: new Date(req.body.distributions.date),
        };
        console.log(dist);

        Points.findOneAndUpdate(
          { address: req.body.address },
          { $push: { distributions: dist } }
        ).then((ans) => console.log(ans));

        //Points.update({address: req.body.address  }, { $push: { 'rating.usersRated': data.userId }}, callback);

        console.log("inside THEN! ");
      } else {
        console.log("inside ELSE! ");

        Points.create({
          address: req.body.address,
          distributions: { date: req.body.distributions.date },
        });
      }
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
