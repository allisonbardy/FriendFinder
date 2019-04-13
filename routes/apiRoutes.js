// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information
// ===============================================================================

var surveyData = require("../data/surveyData");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array

  // ---------------------------------------------------------------------------

  app.post("/api/survey", function(req, res) {
    // console.log("in this route");
    // Note the code here. Our "server" will respond to requests
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
  
    if (surveyData.length < 2) {
      surveyData.push(req.body);
      console.log(surveyData);
      res.json(true);
      
    }
  });

  // ---------------------------------------------------------------------------


  app.post("/api/clear", function() {
    // Empty out the arrays of data
    surveyData = [];

    console.log(surveyData);
  });
};
