var mongoose = require('mongoose')

//class==schema
var personSchema = module.exports = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    }
});

//object==model
var personModel123 = module.exports = mongoose.model('personMod321', personSchema);