const mongoose = require("mongoose");

const sowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["normal", "pregnant"],
        default: "normal",
    },
    stall: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stall",
    },
});

module.exports = mongoose.model("Sow", sowSchema);
