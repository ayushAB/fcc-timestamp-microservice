// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
require('dotenv').config()
const timeParser = require('./time.js');

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api", function (req, res) {
      res.json({
        'unix': new Date().getTime(),
        'utc': new Date().toUTCString()
    })
 });

// your first API endpoint... 
app.get("/api/:time", function (req, res) {
 //let date =  (req.params.time/1000) ? (req.params.time/1000) : req.params.time
 res.json(timeParser(req.params.time));
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
