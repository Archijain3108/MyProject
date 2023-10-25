var mongoose = require('mongoose')

//class==schema
var orderSchema = module.exports = mongoose.Schema({
    Restaurant: {
        type:String,
        required:true
    },
    Name: {
        type: String,
        required: true
    },
    DishName: {
        type: String,
        required: true
    },
    ContactNo: {
        type: Number,
        required: true
    },
    DishQuantity: {
        type: Number,
        required: true
    }
});

//object==model
var orderModel123 = module.exports = mongoose.model('orderMod321', orderSchema);