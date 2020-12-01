//--------------------- Requirements
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

//--------------------- (Optional? Verify) TODO
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//--------------------- Cors
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 200
}

//--------------------- Database
const db = require('./models');

//--------------------- Routes
const routes = require('./routes');

//--------------------- Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(
    session({
        store: new MongoStore({url: process.env.MONGODB_URI}),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2
        }
    })
);


app.use('/', routes.index);
app.use('/users', routes.users);
app.use('/api/v1', routes.api);
app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`);
});


//--------------------- 404 & Error Management
const createError = require('http-errors');

app.use(function(req, res, next){
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
});

//--------------------- Start Server
app.listen(PORT, () => console.log(`Express server for 3DCW is up and running on http://localhost:${PORT}`));