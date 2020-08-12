const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  phone: String,
  isManager: Boolean,
});

module.exports = mongoose.model("Users", usersSchema);
