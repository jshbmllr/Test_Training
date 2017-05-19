var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static(__dirname + "/build/"));

app.listen(PORT, function() {
  console.log("Node Server listening on PORT: " + PORT + ".");
});
