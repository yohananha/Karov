const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const pointsSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  address: String,
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAdress: String,
  },
  distributions: [
    {
      date: {
        type: Date,
        default: null,
      },
      delivered: {
        type: Boolean,
        default: false,
      },
      courierID: {
        type: String,
        default: null,
      },
    },
  ],
});

//adding midelwere to mongoose
pointsSchema.pre("save", async function (next) {
  console.log("THIS2 => " + this);
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAdress: loc[0].formattedAdress,
  };
  this.distributions.push({
    date: new Date(this.date),
  });
  this.address = undefined;
  next();
});

// pointsSchema.pre("save", function (next) {
//     geocoder.geocode(this.address).then((location) => console.log(location));
//   });

module.exports = mongoose.model("Points", pointsSchema);
