const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: String,
        default: "not completed"
    },
    date: {
        type: Date,
        required : true
    }
    // typeOfTask:{
    //     type: String,
    //     default: "normal"
    // }
})

module.exports = Task