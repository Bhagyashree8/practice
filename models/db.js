const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/practice', (err, db) => {
    if(err)
        console.log("error in connecting:" +JSON.stringify(err, undefined,2));
    else  {
        console.log('connected');
    }
});

require('../models/UserModel');
 


