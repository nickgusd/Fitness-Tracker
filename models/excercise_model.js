const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({

    workoutType:  String,
    workoutName: String,
    workoutDistance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number,

});

const Excercise = mongoose.model("Excercise", excerciseSchema);

module.export = Excercise;

