const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

// app.get("/", (req, res) => {
//     db.Note.find({})
//       .then(dbNote => {
//         res.json(dbNote);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
});




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
