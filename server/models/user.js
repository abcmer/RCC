const mongoose = require('mongoose');
const Movie = require('./movie').Movie
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: [true, "userId field is required"]
  },
  moviesWatched: [
    {type: Schema.Types.ObjectId, ref: 'Movie'}
],
})

const User = mongoose.model('User', UserSchema);

module.exports = User;