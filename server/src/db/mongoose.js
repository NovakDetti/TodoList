const mongoose = require('mongoose');
const connectionURL = 'mongodb://127.0.0.1:27017/';
const database = 'todo-db';

mongoose.connect(`${connectionURL}+${database}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

