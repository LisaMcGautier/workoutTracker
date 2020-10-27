// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Creating express app
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


// Routes -- Requiring our routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);







// get all workout data from back-end
// View the combined weight of multiple exercises on the `stats` page.



// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });