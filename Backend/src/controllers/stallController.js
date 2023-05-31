const Stall = require("@models/stallModel");

exports.getAllStalls = async (req, res) => {
    try {
        const stalls = await Stall.find();
        res.status(200).json(stalls);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.getStallById = async (req, res) => {
    const { _id } = req.params;
    try {
        const stall = await Stall.findById(_id);
        res.status(200).json(stall);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.getVacantStalls = async (req, res) => {
    try {
        const stalls = await Stall.find({ status: "vacant" });
        res.status(200).json(stalls);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.addStall = async (req, res) => {
    const { name, status, stall_type } = req.body;

    if (!name || !status || !stall_type)
        return res.status(400).json({ error: "Missing stall details" });

    let stall = new Stall({ name, status, stall_type });

    try {
        stall = await stall.save();
        res.status(201).json({ stall, message: "Stall created" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.updateStall = async (req, res) => {
    const { _id } = req.params;
    const { name, status, stall_type } = req.body;
    if (!name || !status || !stall_type)
        return res.status(400).json({ error: "Missing stall details" });

    try {
        let updatedStall = await Stall.findOneAndUpdate(
            { _id },
            { name, status, stall_type },
            { returnOriginal: false }
        );

        res.status(200).json({
            updatedStall,
            message: "Stall updated",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.deleteStall = async (req, res) => {
    const { _id } = req.params;

    try {
        await Stall.findOneAndDelete({ _id });
        res.status(200).json({ message: "Stall deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};
