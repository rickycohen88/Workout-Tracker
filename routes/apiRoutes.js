//dependecies
const mongoose = require("mongoose");
const Workout = require("../models/schema.js");

module.exports = function(app) {
    //create connection to db
    mongoose.connect(
        process.env.MONGODB_URI || 'mongodb://localhost/fitnessTracker',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    );
        // error or sucess logging
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected to DB");
    });
        //  Routes
    app.get("/api/workouts", async (req, res) => {
        try {
            const data = await Workout.find({});
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    app.post("/api/workouts", async (req, res) => {
        try {
            const data = await Workout.create(req.body);
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    app.put("/api/workouts/:id", async (req, res) => {
        try {
            const data = await Workout.updateOne(
                {
                    _id: req.params.id
                }, 
                { 
                    $push: {exercises: req.body} 
                });
        } catch (err) {
            console.log(err);
        }
    });

    app.get("/api/workouts/range", async (req, res) => {
        try {
            const data = await Workout.find({});
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

}