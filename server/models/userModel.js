const mongoose = require('mongoose')
const bcrpyt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// static signup method
// can use this instead of the model

userSchema.statics.signup = async function (name, email, password) {
  if (!name || !email || !password) {
    throw new Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw new Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error('Password not strong enough')
  }
  // must use function as you are using the this keyword
  const exists = await this.findOne({ email })
  // if this exists
  if (exists) {
    throw new Error('Email already exists')
  }

  // use bcrpyt to store the password in bycrypt to provide the level of protection
  // generate into salt to give extra layer of security

  const salt = await bcrpyt.genSalt(10)
  // generate into a salt
  const hash = await bcrpyt.hash(password, salt)
  // hash the password that user created

  const user = await this.create({ name, email, password: hash })

  return user
}

// static login method

userSchema.statics.login = async function (req, res) {}

module.exports = mongoose.model('User', userSchema)
