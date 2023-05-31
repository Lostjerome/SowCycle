const mongoose = require("mongoose");

const stallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["vacant", "occupied"],
        default: "vacant",
    },
    stall_type: {
        type: String,
        enum: ["breeding", "farrowing"],
        required: true,
    },
});

module.exports = mongoose.model("Stall", stallSchema);
