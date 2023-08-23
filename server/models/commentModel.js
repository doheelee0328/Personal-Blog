const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
      max: 800,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)
