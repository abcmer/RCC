const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  tmdbId: {
    type: Number,
    required: [true, "tmdbId field is required"]
  },
  title: {
    type: String,
    required: [true, "title field is required"]
  },
  awardShowIndex: {
    type: Number,
    required: [true, "awardShowIndex is requireed"]
  },
  awardShowYear: {
    type: Number,
    required: [true, "awardShowYear is required"]
  }
})

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;