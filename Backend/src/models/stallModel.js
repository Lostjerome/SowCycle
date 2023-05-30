const mongoose = require("mongoose");

const stallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stall_type: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Stall", stallSchema);
