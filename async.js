var fetch = require("node-fetch");

fetch("http://localhost:3000/").then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
});
