const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: String,
    manufacturer: String,
    stock: Number,
    expiryDate: Date,
    price: Number,          
});

module.exports = mongoose.model('Medicine', medicineSchema);
