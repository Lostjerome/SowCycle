const sowModel = require("../models/sowModel");

module.exports.getAllSows = async (req, res) => {
    try {
        const sows = await sowModel.getAll();
        res.status(200).json(sows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.getSowsByPage = async (req, res) => {
    let { pageSize, page } = req.query;
    pageSize = parseInt(pageSize);
    page = parseInt(page);
    const offset = pageSize * page;

    try {
        if (!page && !pageSize) {
            const sows = await sowModel.getAll();
            return res.status(200).json(sows);
        }
        const sows = await sowModel.getByPaginated(pageSize, offset);
        res.status(200).json(sows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.getSowById = async (req, res) => {
    try {
        const sow = await sowModel.getById(req.params.id);
        res.status(200).json(sow);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.addSow = async (req, res) => {
    const { id, name } = req.body;
    if (!id || !name)
        return res.status(400).json({ error: "Missing sow ID or name" });
    try {
        sowModel.create(id, name);
        // return the newly created sow in the response
        const newSow = await sowModel.getById(id);
        res.status(201).json(newSow[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.updateSow = async (req, res) => {
    const { id, name } = req.body;
    if (!id || !name)
        return res.status(400).json({ error: "Missing sow ID or name" });
    try {
        sowModel.update(id, name);
        const newSow = await sowModel.getById(id);
        res.status(201).json(newSow[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports.deleteSow = async (req, res) => {
    try {
        const sow = await sowModel.remove(req.params.id);
        res.status(200).json(sow);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};
