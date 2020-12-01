const db = require('../models');

const index = (req, res) => {
    db.User.find({})
        .populate('firstName lastName _id')
        .exec((err, foundUsers) => {
            if (err) return res.status(404).json({status: 404, error: 'Users could not be found'});
            res.json(foundUsers);
        });
};

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(400).json({status: 400, error: 'User could not be found'});
        res.json(foundUser);
    });
};

const create = (req, res) => {
    console.log(req.body);
    db.User.create(req.body, (err, newUser) => {
        if (err) return res.status(500).json({status: 500, error: 'User could not be created'});
        res.json(newUser);
    });
};

const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) return res.status(400).json({status: 400, error: 'User could not be updated'});
        res.json(updatedUser);
    });
};

const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) return res.status(400).json({status: 400, error: 'User could not be deleted'});
        res.json(deletedUser);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}