const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        //default: Date.now
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: "Please select workout type",
            trim: true
        },
        name: {
            type: String,
            required: "Enter exercise name",
            trim: true
        },
        duration: {
            type: Number,
            required: "Enter duration in minutes",
            trim: true
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;