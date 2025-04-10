const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  date: Date,
  link: String,
});

module.exports = mongoose.model('Job', JobSchema);
