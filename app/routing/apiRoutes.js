// Dependencies
var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.join(friendsData);
    });
    app.post('/api/friends', function(req, res){
        if (friendsData.length < 5){
            friendsData.push(req.body);
            res.json(true);
        }
    });

    // clear out the table while working with the functionality.
    app.post("/api/clear", function(req, res){
        friendsData.length = 0;

        res.json({ ok: true });
    });
};