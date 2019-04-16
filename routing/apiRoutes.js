// data
var surveyData = require("../data/surveyData");

// Routing
module.exports = function(app) {
  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });

  // API POST Requests
  app.post("/api/survey", function(req, res) {

    var userData = req.body;
    console.log('userData', userData)
    var userScores = userData.scores;

    var bestMatch = {
      name: "",
      link: "",
      friendDiff: 1000,
    }

    for (var i = 0; i < surveyData.length; i++) {
      var totalDiff = 0;
      var currentSurvey = surveyData[i];

      for (var j = 0; j < currentSurvey.scores.length; j++) {
        var currentSurveyScore = currentSurvey.scores[j];
        var currentUserScore = userScores[j];

        totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentSurveyScore));
      }
      console.log('totalDiff', typeof totalDiff, typeof bestMatch.friendDiff)
      if (totalDiff <= bestMatch.friendDiff) {
        
        bestMatch.name = currentSurvey.name;
        bestMatch.link = currentSurvey.link;
        bestMatch.friendDiff = totalDiff;
      }
    }

    surveyData.push(req.body);
    res.json(bestMatch);
    });
  }
