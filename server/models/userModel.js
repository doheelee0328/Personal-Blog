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
    throw new Error(
      'Password not strong enough! Must either contain special characters, capital letters or numbers '
    )
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

// to see if the password matches the hash password stored in the database

userSchema.methods.matchPassword = async function (confirmPassword) {
  return await bcrpyt.compare(confirmPassword, this.password)
}

// static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error('All fields must be filled')
  }
  const user = await this.findOne({ email })
  // if this exists
  if (!user) {
    throw new Error('Email does not exist')
  }
  // to check if it exists

  const match = await bcrpyt.compare(password, user.password)
  if (!match) {
    throw new Error('Incorrect Password')
  }

  return user
}

userSchema.statics.update = async function (id, name, email, password) {
  if (!email || !password || !name) {
    throw new Error('All fields must be filled')
  }
  if (!name || !email || !password) {
    throw new Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw new Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error(
      'Password not strong enough! Must either contain special characters, capital letters or numbers '
    )
  }
  const user = await this.findById(id)
  // if this exists
  if (!user) {
    throw new Error('Cannot find the user')
  }
  // to check if it exists
  const salt = await bcrpyt.genSalt(10)
  // generate into a salt
  const hashPassword = await bcrpyt.hash(password, salt)
  // hash the password that user created

  // update user information

  user.name = name
  user.email = email
  user.password = hashPassword

  await user.save()

  return user
}

module.exports = mongoose.model('User', userSchema)
