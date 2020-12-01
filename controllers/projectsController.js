const db = require('../models');

const index = async (req, res) => {
    try {
        const project = await db.Project.find({});
        if (!project) res.status(404).json({ error: 'No projects found!' });
        res.json(project);
    } catch (err) {
        res.status(500).json(err);
    }
}

const show = async (req, res) => {
    try {
        const project = await db.Project.findById(req.params.id);
        if (!project) res.status(404).json({ error: 'No project found with that ID!' });
        res.json(project);
    } catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    try {
        const newProject = await db.Project.create(req.body);
        if (!newProject) res.status(404).json({ error: 'Project couldn\'t be created!' });
        res.json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try {
        const updatedProject = await db.Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) res.status(404).json({ error: 'Project couldn\'t be updated!' });
        res.json(updatedProject);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    index,
    show,
    create,
    update
}