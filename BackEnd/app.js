const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

//routes
const usersRoutes = require("./routes/users");
const pointsRoutes = require("./routes/points");
const couriersRoutes = require("./routes/couriers");
const matchCourierToPointRoutes = require("./routes/matchCourierToPoint");

//config
const conectDB = require("./config/db");
conectDB();
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
//app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, Accept"
  );
  next();
});

app.use("/users", usersRoutes);
app.use("/points", pointsRoutes);
app.use("/couriers", couriersRoutes);
app.use("/matchCourierToPoint", matchCourierToPointRoutes);

//catch errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log("server is listening on port " + process.env.PORT + "!");
});
