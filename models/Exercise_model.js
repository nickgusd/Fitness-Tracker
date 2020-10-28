const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String
          },
          name: {
            type: String
          },
          duration: {
            type: Number,
            default: 0
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          }, 
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ], 
    //   totalDuration: Number

    
    // workoutType:  String,
    // workoutName: String,
    // workoutDistance: Number,
    // duration: Number,
    // weight: Number,
    // sets: Number,
    // reps: Number,

});

// excerciseSchema.methods.setTotalDuration = function() {
  
//     this.totalDuration = 0;
//     console.log(this.exercises);
//     this.exercises.forEach(exercise => {
//       this.totalDuration += exercise.duration
//     });
//     return this.totalDuration;
//   }


excerciseSchema.virtual("totalDuration").get(function () {  
  return this.exercises.reduce((total, exercise) => { 
    
    return total + exercise.duration; }, 0); 

});

// excerciseSchema.virtual("totalDuration").get(function () {
//     // "reduce" array of exercises down to just the sum of their durations
//     return this.exercises.reduce((total, exercise) => {
//       return total + exercise.duration;
//     }, 0);
//   });




const Exercise = mongoose.model("Exercise", excerciseSchema);

module.exports = Exercise;

