'use strict';

const dotenv = require('dotenv');
dotenv.config();

// Imports dependencies and set up http server
const
  express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json());

var server = require('http').createServer(app);

const filmRoutes = require('./src/routes/films');
const peopleRoutes = require('./src/routes/people');

function logResponseBody(req, res, next) {
  var oldWrite = res.write,
    oldEnd = res.end;

  var chunks = [];

  res.write = function (chunk) {
    chunks.push(new Buffer(chunk));

    oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk)
      chunks.push(new Buffer(chunk));

    var body = Buffer.concat(chunks).toString('utf8');
    console.log(req.path, body);

    oldEnd.apply(res, arguments);
  };

  next();
}


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Add this
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Max-Age', 120);
    return res.status(200).json({});
  }

  next();

});
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(logResponseBody); // Log all endpoints
// Add Routes
app.use('/', filmRoutes);
app.use('/', peopleRoutes);


app.use(cors({ credentials: false }));
app.options('*', cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
server.listen(port, async() =>{
  console.log(`api is listening on port: ${port}`)
});