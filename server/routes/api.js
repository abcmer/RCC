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

router.get('/movies', async (req, res, next) => {
  // Get User Data if userId provided as filter
  const {userId} = req.query;
  let userData
  try {
    let userData = User.find({userId})
    console.log('userData', userData.moviesWatched)
    res.json({})

  } catch (error) {
    console.log(error)
  }
  // User.find({userId})
  //   .then(userData => {
  //     Movie.find({})
  //     .then(movieData => {
  //       userData.moviesWatched.forEach(mw => {
  //         movieData.find(m => {
  //           m.checked == true
  //         })
  //       })
  //       res.json(movieData)
  //     })
  //     .catch(next)
  //   })
  //   .catch(next)
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
    console.log('doc', doc)
    res.json(await User.findOneAndUpdate(filter, update))
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