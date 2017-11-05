const express = require('express')
const path = require('path')
const routes = require('./routes')
const PORT = process.env.PORT || 3001
const app = express()
const mongoose = require('mongoose')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Set up promises with mongoose
mongoose.Promise = global.Promise
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/nytreact',
  {
    useMongoClient: true
  }
)

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})
