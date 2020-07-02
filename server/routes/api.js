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

router.put('/users/:userId', async (req, res, next) => {
  const {userId} = req.params;
  const filter = { _id: userId };
  const update = req.body;
  try {
    let doc = await User.findOneAndUpdate(filter, update);
    res.json(doc)
  } catch (error) {
    next(error)
  }
})

router.get('/users', (req, res, next) => {
  const filter = req.query;
  User.find(filter)
    .then(data => res.json(data))
    .catch(next)
})



module.exports = router;