const express = require ('express');
const router = express.Router();
const Movie = require('../models/movie').Movie
const User = require('../models/user')

router.get('/', (req, res, next) => {
  res.json({"msg": "Hello World"})
});

router.post('/movies', (req, res, next) => {
  Movie.create(req.body)
    .then(data => res.json(data))
    .catch(next)
})

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(data => res.json(data))
    .catch(next)
})

router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then(data => res.json(data))
    .catch(next)
})

router.get('/users', (req, res, next) => {
  User.find({})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;