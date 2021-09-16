const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    price: String,
    pcs: Number,
    name: String,
    size: String, 
    category: String,
    code: String

});

const templates = mongoose.model('templates', templateSchema);

module.exports = templates;