const express = require ('express');
const router = express.Router();
const Joint = require('../models/joint')

router.get('/', (req, res, next) => {
  res.json({"msg": "Hello World"})
});

router.post('/joints', (req, res, next) => {
  Joint.create(req.body)
    .then(data => res.json(data))
    .catch(next)
})

router.get('/joints', (req, res, next) => {
  Joint.find({})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;