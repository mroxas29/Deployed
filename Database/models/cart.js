const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({  
    
    item: String,
    quantity: String,
    price: String,
    code:String,   
});

const cart = mongoose.model('cart', cartSchema);

module.exports = cart;