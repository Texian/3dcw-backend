const db = require('../models');

const index = async (req, res) => {
    try {
        const user = await db.User.find({});
        if (!user) res.status(404).json({error: 'No users found!'});
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

const show = async (req, res) => {
    try {
        const user = await db.User.findById(req.params.id);
        if (!user) res.status(404).json({error: 'No user found with that ID!'});
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    try {
        const newUser = await db.User.create(req.body);
        if (!newUser) res.status(404).json({error: 'User couldn\'t be created!'});
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try {
        const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedUser) res.status(404).json({error: 'User couldn\'t be updated!'});
        res.json(updatedUser);
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