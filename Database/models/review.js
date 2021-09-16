const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({  
    
    rating: Number,
    fullName: String,
    msg: String,
    date: Date

});

const review = mongoose.model('review', reviewSchema);

module.exports = review;