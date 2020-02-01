// requirements
const express = require("express");

// open port
const PORT = process.env.PORT || 8080;

// declare express as app
const app = express();

// hook up express with "public"
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give express server access
const routes = require("./controllers/burgers_controllers.js");
app.use(routes);

// Start server
app.listen(PORT, function() {
  // console.log listen port
  console.log("Server listening on: http://localhost:" + PORT);
});