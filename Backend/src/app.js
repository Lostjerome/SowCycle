require("module-alias/register");

const express = require("express");
const requireDir = require("require-dir");
const routes = requireDir("routes");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("@config/database").connect();

const { API_PORT } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(
    cors({
        // allowed all origins for development
        origin: "*",
    })
);

Object.keys(routes).forEach((key) => {
    app.use(`/api/${key}`, routes[key]);
});

app.listen(API_PORT, () => {
    console.log("Server listening on port 3000");
});
