const User = require('../models/userModel')

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const newUser = await User.create({
      email,
      password,
    })
    res.status(201).send(newUser)
  } catch (error) {
    res.status(400).send(error)
  }
}

const signupUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    // static
    const user = await User.signup(name, email, password)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  loginUser,
  signupUser,
}
