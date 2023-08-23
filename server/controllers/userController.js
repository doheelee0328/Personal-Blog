const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id, name) => {
  // underscore id to be part of the payload of the token
  // first argument is the id
  // second argument is secret
  // third argument is when the token expires which will be expired in 3 days
  return jwt.sign({ _id: _id, name: name }, process.env.SECRET, {
    expiresIn: '3d',
  })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.login(email, password)
    const token = createToken(user._id, user.name)
    res.status(201).send({ name: user.name, email, token })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

const signupUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    // static
    const user = await User.signup(name, email, password)
    if (user && (await user.matchPassword(password))) {
      // create token and pass the user id as an argument

      const token = createToken(user._id, user.name)
      res.status(200).json({ name, email, token })
    } else {
      throw new Error('Password do not match')
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  const id = req.params.id
  const { name, email, password } = req.body

  try {
    const updateUser = await User.update(id, name, email, password)
    const token = createToken(updateUser._id, updateUser.name)

    res.status(200).send({ name: updateUser.name, email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  const id = req.params.id
  try {
    const deleteUser = await User.findByIdAndDelete(id)

    if (!deleteUser) {
      throw new Error('Cannot find the User')
    }

    res.status(200).json({ message: 'It has been delete successfully' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  loginUser,
  signupUser,
  updateUser,
  deleteUser,
}
