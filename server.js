const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const { Exercise } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });


require("./public/html-routes")(app);


// create workouts


app.post("/api/workouts", (req, res) => {
db.Exercise.create({})
    .then(data => {
        res.json(data)
        console.log(data)
    }) 
    .catch(err => {
        console.log(err);
      })
    })


//get last workout
app.get("/api/workouts" , (req, res) => {
    db.Exercise.find({})
    .then(dblastworkout => {
        res.json(dblastworkout)
    })
    .catch(error => {
        res.json(error)
    })
})

//add/insert excercise need to modify later
app.put("/api/workouts/:id", ({body, params}, res) => {
    // console.log(req.body)
//    Exercise.setTotalDuration();
    db.Exercise.update(
        { _id: params.id },
        { $push: { exercises: body }}
      )
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
    .catch(err => {
        res.json(err);
    })
})


// app.put("/api/workouts/:id", ({body, params}, res) => {
//     const workout = new Workout(body)
//     workout.setTotalDuration();
//     Workout.update(
//       { _id: params.id },
//       { $push: { exercises: body }}
//     )
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
//   });


// { _id: params.id },
// { $push: { exercises: body }}
// .then((_id) => db.findOneAndUpdate({_id: req.params._id}, { $push: { exercises: req.body } }, { new: true }))
// .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))


//get workouts in Range, need to modify later
app.get("/api/workouts/range" , (req, res) => {
    db.Exercise.find({})
    .then(dblastworkout => {
        res.json(dblastworkout)
    })
    .catch(error => {
        res.json(error)
    })
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
