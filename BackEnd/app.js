const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const usersRoutes = require("./routes/users");
const pointsRoutes = require("./routes/points");
const conectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 5000;

conectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/points", pointsRoutes);

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

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
