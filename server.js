

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const Workout=require("./models/workoutModel.js");


// Routes
// ======

//POST route to Add new exercises to a new workout plan.

app.post("/api/workouts", async ({ body }, res) => {

    const workout = body;

    try {
        const data = await Workout.create(workout);
        res.json(data);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

//GET route for a previous workout plan.

app.get("/api/workouts", async (req, res) => {

    try {
        const workouts = await Workout.find();
        return res.json(workouts);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

//PUT route to update and Add exercises to a previous workout plan.

app.put("/api/workouts/:id", async (req, res) => {

    try {
        const data = await Workout.updateOne({ _id: req.params.id }, {$push:{workouts:req.body.workout}});
        return res.json(data);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

//GET route for previous workouts range of dates

app.get("/api/workouts/range", async (req, res) => {

    try {
        const workouts = await Workout.findAll();
        return res.json(workouts);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});


// get all workout data from back-end
// View the combined weight of multiple exercises on the `stats` page.



// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });