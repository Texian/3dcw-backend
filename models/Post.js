const mongoose = require('mongoose');
const Schmea = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    name: String,
    body: String,
    image: String
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);