const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    sow_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sow",
    },
    breedDate: {
        type: Date,
        required: true,
    },
    farrowDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("History", historySchema);
