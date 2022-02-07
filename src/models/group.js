const mongoose = require('mongoose')
//const validator = require('validator')

const Group = mongoose.model('group', {
       userIds : {
        type : Array    
       },
       name : {
           type : String,
           default: "urgent"
       }

})

module.exports = Group