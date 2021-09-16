const mongoose = require('mongoose');
const cart = require('./cart.js');


const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const Database = 
{
    deleteOne: function(model, conditions, callback) {
        model.deleteOne(conditions, function (error, result) {
            if(error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    },

    deleteCart: function(model, conditions, callback) {
        model.deleteOne(conditions, function (error, result) {
            if(error) return callback(false);
            console.log('Cart item deleted ' );
            return callback(true);
        });
    },

    insertOne: function(model, doc, callback) {
        model.create(doc, function(error, result) {
            if(error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },
    
}


module.exports = Database;