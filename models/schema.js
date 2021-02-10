//dependencies
const mongoose = require('mongoose');
const {Schema} = mongoose;

const workoutSchema = new Schema({
    day:{
            Type:Date,
            Default: Date.now
        },
    exercises:[
        {
        type :{type: String, trim: true, required: true},
        name :{type: String, trim: true, required: true},
        duration :{type: Number},
        weight : {type: Number},
        reps : {type: Number},
        sets : {type: Number},
        distance : {type: Number}
        }
    ]
})

const workoutRoutine = mongoose.model('workout',workoutSchema);

module.exports = workoutRoutine;