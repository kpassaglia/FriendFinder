// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const htmlRoutes = require("./routing/htmlRoutes.js");
const apiRoutes = require("./routing/apiroutes.js");


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Starts the server to begin listening

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    console.log("Server listening on: http://localhost:" + PORT);
});

app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/home.html"));
      });

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"))
})