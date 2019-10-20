// Dependencies
var express = require("express");


// Server
var app = express();

// PORT
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Routers
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

