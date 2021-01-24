const mongoose = require('mongoose');
const Movie = require('./movie').Movie
const MovieCheckSchema = require('./movieCheck').MovieCheckSchema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: [true, "userId field is required"]
  },
  moviesWatched: [MovieCheckSchema]
})

const User = mongoose.model('User', UserSchema);

module.exports = User;