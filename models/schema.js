//define a model of a mongoose schema
const {model, Schema} = require("mongoose");

//define the schema- how the data will  be stored
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                    type: String,
                    trim: true,
                    required: true
                  },
            type: {
                    type: String,
                    trim: true,
                    required : true 
                  },
          weight: {
                type: Number
                  },
        
            sets: {
                type: Number
                  },
        
            reps: {
                type: Number
                  },
        duration: {
                type: Number,
                  },
        distance: {
                type: Number,
                  }
        }
    ]
}, 
{
    toJSON: {virtuals: true} 
});
//code to export a module
const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;