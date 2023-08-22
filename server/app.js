const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger') // Importing logger middleware
const userRouter = require('./routers/userRouters')
const connectDB = require('./database/setup')

require('dotenv').config()

const app = express()

connectDB() // to create connection

app.use(express.json())
app.use(cors())
app.use(logger) // Using the logger middleware

app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

module.exports = app
