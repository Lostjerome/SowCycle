const express = require("express");
const app = express();
const requireDir = require("require-dir");
const routes = requireDir("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

Object.keys(routes).forEach(function (key) {
  app.use(`/api/${key}`, routes[key]);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
