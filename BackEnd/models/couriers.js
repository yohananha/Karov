const mongoose = require("mongoose");

const couriersSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  fullName: String,
  phone: String,
  email: String,
});

const Couriers = mongoose.model("Couriers", couriersSchema);
module.exports = Couriers;
