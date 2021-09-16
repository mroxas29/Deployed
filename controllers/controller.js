const db = require('../Database/models/db');
const cartSchema = require('../Database/models/cart.js');
const orderSchema = require('../Database/models/order.js');
const reviewSchema = require('../Database/models/review.js');
const controller = {

    getDelete: function (req, res) {
        let cart = req.query;
        
        db.deleteOne(cartSchema, cart, function(result) {
            res.send();
        });
    },

    getAdd: function(req, res) {
        // your code here
        let cart = {
            
            item: req.query.item,
            quantity: req.query.quantity,
            price: req.query.price,
            code: req.query.code
        };

        db.insertOne(cartSchema, cart, (result) => {
            res.send();
        });
    },

    
    getAddOrder: function(req, res) {
        // your code here
        let order = {
            
            fName: req.query.fName,
            mName: req.query.mName,
            lName: req.query.lName,

            cNum: req.query.cNum,
            emailAdd: req.query.emailAdd,
            address: req.query.address,

            mop: req.query.mop
        };

        db.insertOne(orderSchema, order, (result) => {
            res.send();
            
        });

        

        
    },

    getAddReview: function(req, res) {
        // your code here
        let review = {
            
            rating: req.query.rating,
            fullName: req.query.fullName,
            msg: req.query.msg,
            date: req.query.date
        };

        db.insertOne(reviewSchema, review, (result) => {
            res.send();
        });
    },


}

module.exports = controller;