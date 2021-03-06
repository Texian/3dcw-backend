const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || `mongodb.localhost:27017/3dcw-backend`;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
    }).then(() => console.log(`MongoDB connected`))
    .catch((err) => console.log(`Caught error: ${err}`));

module.exports ={
    User: require('./User'),
    Project: require('./Project'),
    Post: require('./Post')
};