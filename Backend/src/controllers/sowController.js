const Sow = require("@models/sowModel");

module.exports.getAllSows = async (req, res) => {
    try {
        // populate histories if any
        let sows = await Sow.find().populate("stall");
        res.status(200).json(sows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.getSowById = async (req, res) => {
    const { _id } = req.params;
    try {
        let sow = await Sow.findById(_id).populate("stall");
        res.status(200).json(sow);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.addSow = async (req, res) => {
    const { name, status, stall } = req.body;
    if (!name || !status || !stall)
        return res.status(400).json({ error: "Missing sow details" });

    let sow = new Sow({ name, status, stall });

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
    const { name, status, stall, histories } = req.body;
    if (!name || !status || !stall || !histories)
        return res.status(400).json({ error: "Missing sow details" });

    try {
        let updatedSow = await Sow.findOneAndUpdate(
            { _id },
            { name, status, stall, histories },
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
