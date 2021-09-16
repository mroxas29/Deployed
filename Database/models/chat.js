const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    msg:String,
    reply: String

});

const chats = mongoose.model('chats', chatSchema);

module.exports = chats;