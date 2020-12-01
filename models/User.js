const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//--------------------- Email validation
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength:2, maxlength: 30},
    lastName: {type: String, required: true, minlength:2, maxlength: 30},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email is required',
        validate: [validateEmail, 'Please enter a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    password: {type:String, required: true, minlength: 8, maxlength: 30},
});

module.exports = mongoose.model('User', UserSchema);