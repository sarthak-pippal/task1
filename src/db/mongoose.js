const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sarthak:9J5LPUhSHY0bXx35@cluster0.xlevh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
const db=mongoose.connection;
module.exports = db;