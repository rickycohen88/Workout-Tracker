//dependencies
const mongoose = require('mongoose');
const {cShema} = mongoose;

const workout = new Schema({
    day:{Type:Date,
         Default: Date.now
        },
    
})