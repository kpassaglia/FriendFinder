// GET route
app.get('/survey', function (req, res) {
    res.send('GET request to the survey')
  })

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });