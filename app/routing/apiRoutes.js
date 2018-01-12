var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/firends', function (res, res) {
        var surveyUser = req.body;

        for (var i = 0; i < surveyUser.scores.length; i++) {
            
        }
        app.post('/api/friends', function (req, res) {
            // newFriend is the user that filled out the survey
            var userSurveyed = req.body;
      
            // compute best match from scores
            var bestMatch = {};
      
            // compare the scores of userSurveyed with the scores of each friend in the database
      
            var bestMatchIndex = 0;
            //the greatest possible diff betweeen two survey results is 40
            var bestMatchDiff = 40;
      
            for(var i = 0; i < friends.length; i++) {
              var totalDiff = 0;
      
            //   for(var index = 0; index < friends[i].scores.length; index++) {
            //     var differenceOneScore = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
            //     totalDiff += differenceOneScore;
              }
      
            // add new friend from survey array
            friends.push(newFriend);
      
            // return the best match friend
            res.json(bestMatch);
        });
    })
}