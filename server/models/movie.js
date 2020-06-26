const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"]
  }
})

//create model for todo
const Movie = mongoose.model('user', MovieSchema);

module.exports = Movie;