const db = require('../models');

const index = (req, res) => {
    db.Post.find({})
        .populate('postName _id')
        .exec((err, foundPosts) => {
            if (err) return res.status(404).json({ status: 404, error: 'Posts could not be found' });
            res.json(foundPosts);
        });
};

const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) return res.status(400).json({ status: 400, error: 'Post could not be found' });
        res.json(foundPost);
    });
};

const create = (req, res) => {
    console.log(req.body);
    db.Post.create(req.body, (err, newPost) => {
        if (err) return res.status(500).json({ status: 500, error: 'Post could not be created' });
        res.json(newPost);
    });
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
        if (err) return res.status(400).json({ status: 400, error: 'Post could not be updated' });
        res.json(updatedPost);
    });
};

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) return res.status(400).json({ status: 400, error: 'Post could not be deleted' });
        res.json(deletedPost);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}