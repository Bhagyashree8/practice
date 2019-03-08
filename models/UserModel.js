const mongoose = require('mongoose');
const db = require('../models/db');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    }
});

module.exports=mongoose.model('User', userSchema);
