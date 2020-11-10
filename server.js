//--------------------- Requirements
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//--------------------- Cors
const corsOptions = {
    origin: 'http://localhost:3000'
}
const PORT = process.env.PORT || 4000;

//--------------------- Database
const db = require('./models');

//--------------------- Routes
const routes = require('./routes');

//--------------------- Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', routes.views);
app.use('/api/v1', routes.api);
app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`);
});

//--------------------- Start Server
app.listen(PORT, () => console.log(`Express server is up and running on http://localhost:${PORT}`));