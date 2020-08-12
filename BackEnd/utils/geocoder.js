const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "locationiq",
  httpAdapter: "https",
  apiKey: "pk.83e5c222a89678c137e04f5483a4328d",
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
