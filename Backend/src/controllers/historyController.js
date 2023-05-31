const History = require("@models/historyModel");
// const sowController = require("@controllers/sowController");

module.exports.getAllHistories = async (req, res) => {
    try {
        let histories = await History.find().populate("sow_id");

        res.status(200).json(histories);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.getHistoryById = async (req, res) => {
    const { _id } = req.params;
    try {
        let history = await History.findById(_id).populate("sow_id");
        res.status(200).json(history);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.getSowHistories = async (req, res) => {
    const { _id } = req.params;
    try {
        let histories = await History.find({ sow_id: _id });
        res.status(200).json(histories);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.getCompletedHistories = async (req, res) => {
    try {
        let histories = await History.find({ farrowDate: { $ne: null } });
        res.status(200).json(histories);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.addHistory = async (req, res) => {
    const { sow_id, breedDate, farrowDate } = req.body;

    if (!sow_id)
        return res.status(400).json({ error: "Missing history details" });

    let history = new History({ sow_id, breedDate, farrowDate });

    try {
        history = await history.save();
        res.status(201).json({ history, message: "History created" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.updateHistory = async (req, res) => {
    const { _id } = req.params;
    const { breedDate, farrowDate } = req.body;
    if (!breedDate)
        return res.status(400).json({ error: "Missing history details" });

    try {
        let updatedHistory = await History.findOneAndUpdate(
            { _id },
            { breedDate, farrowDate },
            { returnOriginal: false }
        );

        res.status(200).json({
            updatedHistory,
            message: "History updated",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.deleteHistory = async (req, res) => {
    const { _id } = req.params;
    try {
        await History.findByIdAndDelete(_id);
        res.status(200).json({ message: "History deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};
