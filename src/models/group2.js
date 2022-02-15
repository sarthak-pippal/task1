const mongoose = require('mongoose')
//const validator = require('validator')

const Group2 = mongoose.model('group', {
       userIds : {
        type : Array    
       }
})

module.exports = Group2