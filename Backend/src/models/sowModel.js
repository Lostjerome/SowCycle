const mongoose = require("mongoose");

const sowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Status",
    },
    stall: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stall",
    },
    histories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "History",
        },
    ],
});

module.exports = mongoose.model("Sow", sowSchema);
