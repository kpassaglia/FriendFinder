console.log("API Routes Loaded")

//Array of friends
var friends = require('../data/friends.js');
module.exports = function (app) {
  // ROUTE TO ALL FRIENDS
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  // POST
  app.post('/api/friends', function (req, res) {

    var newFriend = req.body;
    var bestMatch = {};

    //Converts responses back to #
    for (var i = 0; i < newFriend.scores.length; i++) {
      if (newFriend.scores[i] == "1 (Strongly Disagree)") {
        newFriend.scores[i] = 1;
      } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
        newFriend.scores[i] = 5;
      } else {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
      }
    }

    //Possible scores
    var bestMatchIndex = 0;
    var bestMatchDifference = 40;

    //Loops through array to find difference in scores
    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      for (var index = 0; index < friends[i].scores.length; index++) {
        var differenceOneScore = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
        totalDifference += differenceOneScore;
      }

      if (totalDifference < bestMatchDifference) {
        bestMatchIndex = i;
        bestMatchDifference = totalDifference;
      }
    }
    //Sets match
    bestMatch = friends[bestMatchIndex];

    //Add to array
    friends.push(newFriend);

    //Return Best match 
    res.json(bestMatch);
  });

};