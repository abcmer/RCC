const express = require ('express');
const router = express.Router();
const getAllMovies = require('../queries/get-all-movies')
const getUsers = require('../queries/get-users')


router.get('/', (req, res, next) => {
  res.json({"msg": "Hello World"})
});

router.get('/movies', async (req, res, next) => {
  const {userId} = req.query;
  const data = await getAllMovies(userId)
  res.json(data)
})

router.get('/users/', async (req, res, next) => {
  const {userId} = req.query;
  const data = await getUsers(userId)

  res.json(data)  
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