const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
var cors = require('cors')
const movieSeedData = require('./seed-data/movies.json')
const Movie = require('./models/movie').Movie

const app = express();

app.use(cors())

const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully`)
    console.log('seeding database with movies')
    movieSeedData.forEach(movie => {
      Movie.findOneAndUpdate(movie, movie, {
        new: true,
        upsert: true
      })
      .then(data => console.log(`seeded ${data}`))
      .catch(error => console.log(error))
    })
  })
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

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