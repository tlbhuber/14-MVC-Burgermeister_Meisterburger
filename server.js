var express = require("express");

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(process.env.PORT || 8080, function() {
  // Log (server-side) when our server has started
  console.log(`Server listening`);
});