const mongoose = require('mongoose');

mongoose.connect(`${process.env.connectionURL}+${process.env.database}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

