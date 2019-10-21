// Dependencies
var friendsArray = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res){
            

// User Data
    var user = req.body
// ParseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    // Friend is set to 0 as default
    // MinDiff is the result of the one with the most minimum difference in scores
    var friendDefault = 0;
    var minDiff = 40;
    
   

    

    // A for loop to individually compare the users new array input with friend scores.
    for(var i = 0; i < friendsArray.length; i++) {
        
        var totalDifference = 0;
        
        for (var j = 0; j < friendsArray[i].scores.length; j++){
           
            var difference = Math.abs(user.scores[j] - friendsArray[i].scores[j]);
            totalDifference += difference;
        }
        // For new minimums. friendDefault is changed to new minimum for next iteration comparisons.
        if(totalDifference < minDiff) {
        
        friendDefault = i;
        minDiff = totalDifference;
    }
}
// Once match is found, user is added to friend array.
    friendsArray.push(user);

// Browser receives best match
res.json(friendsArray[friendDefault]);

    });
};