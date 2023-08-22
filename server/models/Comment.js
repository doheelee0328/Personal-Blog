const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      max: 400,
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

module.exports = mongoose.model('Comment', CommentSchema)
