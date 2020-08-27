const mongoose = require("mongoose");
//const geocoder = require("../utils/geocoder");

const pointsSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  drugs: Boolean,
  food: Boolean,
  date: Date,
  volunteer: String,
  Longitude: Number,
  Latitude: Number,
  // location: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //   },
  //   coordinates: {
  //     type: [Number],
  //     index: "2dsphere",
  //   },
  // },
});

// const pointsSchema = mongoose.Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     default: new mongoose.Types.ObjectId(),
//   },
//   address: String,
//   location: {
//     type: {
//       type: String,
//       enum: ["Point"],
//     },
//     coordinates: {
//       type: [Number],
//       index: "2dsphere",
//     },
//     formattedAdress: String,
//   },
//   distributions: [
//     {
//       date: {
//         type: Date,
//         default: null,
//       },
//       delivered: {
//         type: Boolean,
//         default: false,
//       },
//       courierID: {
//         type: String,
//         default: null,
//       },
//     },
//   ],
// });

// //adding midelwere to mongoose
// pointsSchema.pre("save", async function (next) {
//   const point = await Points.find({ address: this.address });
//   const loc = await geocoder.geocode(this.address);
//   this.location = {
//     type: "Point",
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAdress: loc[0].formattedAdress,
//   };

//   next();
// });

const Points = mongoose.model("Points", pointsSchema);
module.exports = Points;
