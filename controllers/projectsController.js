const db = require('../models');

const index = (req, res) => {
    db.Project.find({})
        .populate('projectName _id')
        .exec((err, foundProjects) => {
            if (err) return res.status(404).json({ status: 404, error: 'Projects could not be found' });
            res.json(foundProjects);
        });
};

const show = (req, res) => {
    db.Project.findById(req.params.id, (err, foundProject) => {
        if (err) return res.status(400).json({ status: 400, error: 'Project could not be found' });
        res.json(foundProject);
    });
};

const create = (req, res) => {
    console.log(req.body);
    db.Project.create(req.body, (err, newProject) => {
        if (err) return res.status(500).json({ status: 500, error: 'Project could not be created' });
        res.json(newProject);
    });
};

const update = (req, res) => {
    db.Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProject) => {
        if (err) return res.status(400).json({ status: 400, error: 'Project could not be updated' });
        res.json(updatedProject);
    });
};

const destroy = (req, res) => {
    db.Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
        if (err) return res.status(400).json({ status: 400, error: 'Project could not be deleted' });
        res.json(deletedProject);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}