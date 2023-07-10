const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger)

app.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = app
