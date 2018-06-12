const mongoose = require('mongoose');
const Point = require('./points');


const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    lowercase: true, // Always converts to lowercase
    unique: true,
    dropDups: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
})

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserByName = (name, callback) => {
  const query = {
    name: name
  };
  User.find(query, callback);
}

module.exports.addUser = (newUser, callback) => {
  newUser.save(callback);
}

module.exports.getUsersWithPoints = (callback) => {

}