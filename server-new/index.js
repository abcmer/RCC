const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const path = require('path');
require('dotenv').config();
var cors = require('cors')
const {seedDatabase} = require('./seed-data/seed-data')
const app = express();

// Seed database
seedDatabase()

app.use(cors())

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});