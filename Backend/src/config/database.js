// const mysql = require("mysql2");
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to database");
        })
        .catch((err) => {
            console.log(err);
            console.log("Failed to connect to database");
            process.exit(1);
        });
};
