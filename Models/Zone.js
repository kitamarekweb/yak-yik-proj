var mongoose = require('mongoose')

var ZoneSchema = new mongoose.Schema({
  name: {},
  location: {},
  timestamp: {}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)