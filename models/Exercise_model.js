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

const Exercise = mongoose.model("Exercise", excerciseSchema);

module.exports = Exercise;

