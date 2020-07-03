require('dotenv').config()
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

//db
require('./db/mongoose');

//import routes 
const todoRoute = require('./routes/todo-route');
const categoryRoute = require('./routes/category-route');

//adding cors
let cors = require('cors');
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

// parse application/json
app.use(bodyParser.json())

// use routes
app.use(todoRoute);
app.use(categoryRoute);



app.set('port', process.env.PORT || 8000);

const server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = server