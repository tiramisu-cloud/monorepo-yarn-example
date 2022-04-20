var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.json({
    healthy: true,
  });
});

module.exports = app;
