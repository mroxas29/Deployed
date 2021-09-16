const mongoose = require('mongoose');
const url = 'mongodb+srv://SuperHot2101:SuperHot2101@printpaddb.h1lxu.mongodb.net/PrintPadDB?retryWrites=true&w=majority';

module.exports = mongoose;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};


mongoose.connect(url, options)
module.exports = mongoose;

