require("module-alias/register");

const express = require("express");

const requireDir = require("require-dir");
const routes = requireDir("routes");

const bodyParser = require("body-parser");

require("dotenv").config();
require("@config/database").connect();

const { API_PORT } = process.env;

const app = express();

app.use(bodyParser.json());

Object.keys(routes).forEach((key) => {
    app.use(`/api/${key}`, routes[key]);
});

app.listen(API_PORT, () => {
    console.log("Server listening on port 3000");
});
