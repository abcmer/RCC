const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JointSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"]
  }
})

//create model for todo
const Joint = mongoose.model('user', JointSchema);

module.exports = Joint;