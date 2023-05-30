const Status = require("@models/statusModel");

exports.getAllStatuses = async (req, res) => {
    try {
        const statuses = await Status.find();
        res.status(200).json(statuses);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.addStatus = async (req, res) => {
    const { name } = req.body;
    let status = new Status({ name });

    if (!name) return res.status(400).json({ error: "Missing status details" });

    try {
        status = await status.save();
        res.status(201).json({ status, message: "Status created" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.updateStatus = async (req, res) => {
    const { _id } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Missing status details" });

    try {
        let updatedStatus = await Status.findOneAndUpdate(
            { _id },
            { name },
            { returnOriginal: false }
        );

        res.status(200).json({
            updatedStatus,
            message: "Status updated",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

exports.deleteStatus = async (req, res) => {
    const { _id } = req.params;

    try {
        await Status.findOneAndDelete({ _id });
        res.status(200).json({ message: "Status deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};
