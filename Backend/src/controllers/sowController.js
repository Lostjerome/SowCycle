const Sow = require("@models/sowModel");
const History = require("@models/historyModel");

module.exports.getAllSows = async (req, res) => {
    try {
        // populate histories if any
        let sows = await Sow.find()
            .populate("status")
            .populate("stall")
            .populate("histories");
        let histories = await History.find();

        sows = sows.map((sow) => {
            let sowHistories = histories.filter(
                (history) => history.sow_id === sow._id
            );
            return { ...sow._doc, histories: sowHistories };
        });

        res.status(200).json(sows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.getSowById = async (req, res) => {
    const { _id } = req.params;
    try {
        let sow = await Sow.findById(_id).populate("status").populate("stall");
        let histories = await History.find({ sow_id: _id });

        res.status(200).json({ ...sow._doc, histories });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.addSow = async (req, res) => {
    const { name, status } = req.body;

    if (!name || status === undefined)
        return res.status(400).json({ error: "Missing sow details" });

    let sow = new Sow({ name, status });

    try {
        sow = await sow.save();
        res.status(201).json({ sow, message: "Sow created" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.updateSow = async (req, res) => {
    const { _id } = req.params;
    const { name, status_id } = req.body;
    if (!name || status_id === undefined)
        return res.status(400).json({ error: "Missing sow details" });

    try {
        let updatedSow = await Sow.findOneAndUpdate(
            { _id },
            { name, status_id },
            { returnOriginal: false }
        );

        res.status(200).json({
            updatedSow,
            message: "Sow updated",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.deleteSow = async (req, res) => {
    const { _id } = req.params;
    try {
        await Sow.deleteOne({ _id });
        res.status(200).json({ message: "Sow deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

// module.exports.getSowsByPage = async (req, res) => {};
