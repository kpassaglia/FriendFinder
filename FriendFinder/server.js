// Dependencies
const express = require("express");
const path = require("path")


// Sets up the Express App
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






// Starts the server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("Server listening on: http://localhost:" + PORT);
  });

  //test

//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });