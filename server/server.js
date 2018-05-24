const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

const port = process.env.PORT || 8081;

var app = express();

// View Engine
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// CORs
app.use(cors());

// routes
app.use('/', index);
app.use('/api', tasks);

app.listen(port, () => {
    console.log('server started on port ' + port);
})

// open connection to the database
mongoose.connect('mongodb://mdevey:mdevey@ds121960.mlab.com:21960/ddos_point_tracker');

// check connection
mongoose.connection.on('connected', () => {
    console.log("connected to the database!");
});
mongoose.connection.on('error', (err) => {
    console.log('error: ', err);
});