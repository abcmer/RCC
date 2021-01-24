const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieCheckSchema = new Schema({
  tmdbId: {
    type: Number,
    unique: true,
    required: [true, "tmdbId field is required"]
  },
  dateChecked: {
    type: Date,
    required: [true, "date field is required"]
  }
})

const MovieCheck = mongoose.model('MovieCheck', MovieCheckSchema);

module.exports = {MovieCheck, MovieCheckSchema};