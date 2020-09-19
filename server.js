const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// const Excercise = require("./models/Excercise_model");


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });


require("./public/html-routes")(app);


// create workouts
db.Exercise.create({})
    .then(dbexcercise => {
        console.log(dbexcercise)
    }) 
    .catch(({ message }) => {
        console.log(message);
      });

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
app.post("/api/workouts/:id", (req, res) => {
    db.Exercise.create(body)
    .then(({id}) => db.findOneAndUpdate({}))
    .then(dbexcercise => {
        res.json(dbexcercise)
    })
    .catch(err => {
        res.json(err);
    })
})


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
  
