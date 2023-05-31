const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    sow_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sow",
    },
    breedDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    farrowDate: {
        type: Date,
    },
});

module.exports = mongoose.model("History", historySchema);
