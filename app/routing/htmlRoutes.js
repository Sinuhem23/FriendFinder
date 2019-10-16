// Dependencies
var path = require('path');

// Routing

module.exports = function(app) {
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Setting home as default incase none is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
