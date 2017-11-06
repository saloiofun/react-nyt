const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SaveSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  datePub: {
    type: Date,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    required: true
  }
})

var Save = mongoose.model('Save', SaveSchema)

module.exports = Save
