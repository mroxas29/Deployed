const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({  
    
    fName:String,
    mName: String,
    lName: String,

    cNum: Number,
    emailAdd: String,
    address: String,

    mop: String 
});

const order = mongoose.model('order', orderSchema);

module.exports = order;