// Imports express into our app and sets it up for use
const express = require('express');
const app = express();

// Defines a PORT for the server to listen for requests
const PORT = 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// -----------------

require('./routing/apiRoutes.js')(app);


// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})