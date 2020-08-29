const express = require("express");
const router = express.Router();
const Points = require("../models/points");

router.get("/", (req, res) => {
  console.log("GET req tp '/points' was activated!");

  Points.find()
    .then((points) => {
      console.log("ggeeeeeeeeeettttttttttt");
      res.status(200).json({ points });
    })
    .catch((arr) => {
      console.log(arr);
      res.status(500).json({
        error: "Server error",
      });
    });
});

router.post("/", (req, res) => {
  Points.create({
    address: req.body.address,
    volunteer: req.body.volunteer,
    Longitude: req.body.Longitude,
    Latitude: req.body.Latitude,
    food: req.body.food,
    drugs: req.body.drugs,
    date: new Date(req.body.date),
  })
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

  // Points.update(condition, action, { upsert: true })
  //   .then((point) => console.log(point))
  //   .catch((arr) => console.log(arr));
});

// ////// start delete /////////
// router.post("/", (req, res) => {
//   const condition = {
//     address: req.body.address,
//     distributions: { $elemMatch: { date: req.body.date } },
//   };
//   const action = { $set: { "distributions.$.courierID": req.body.courierID } };
//   Points.find(condition)
//     .then((point) => console.log(points => {
//       if(points.length > 0){
//          // update existing point with new date
//          const dist = {
//           date: new Date(req.body.distributions.date),
//         };

//       }else{}
//     }))
//     .catch((arr) => console.log(arr));

//   // Points.update(condition, action, { upsert: true })
//   //   .then((point) => console.log(point))
//   //   .catch((arr) => console.log(arr));
// });

////////// end delete //////////

// router.post("/", (req, res) => {

//   const condition = {
//     address: req.body.address,
//     distributions: { $elemMatch: { date: req.body.date } },
//   };

//   Points.find(condition)
//     .then((points) => {
//       if (points.length > 0) {
//         // update existing point with new date
//         const dist = {
//           date: new Date(req.body.distributions.date),
//           courierID: req.body.distributions.courierID
//         };

//         Points.findOneAndUpdate(
//           { address: req.body.address },
//           { $push: { distributions: dist } },
//           { upsert : true }
//         )
//           .then((point) => {
//             res.status(200).json({
//               success: true,
//               data: point,
//             });
//           })
//           .catch((arr) => {
//             console.log(arr);
//             res.status(500).json({
//               error: "Server error",
//             });
//           });
//       } else {
//         // create new point

//         Points.create({
//           address: req.body.address,
//           distributions: { date: req.body.distributions.date },
//         });
//       }
//     })
//     .then((point) => {
//       res.status(200).json({ success: true, data: point });
//     })
//     .catch((arr) => {
//       console.log(arr);
//       res.status(500).json({
//         error: "Server error",
//       });
//     });
// });

module.exports = router;

// create new object =>  { upsert : true }
//Points.update({},{ $push: { distributions: dist } },{ upsert : true})

// adding date = push
//adding man = set
