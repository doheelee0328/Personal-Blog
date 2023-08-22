const Comment = require('../models/commentModel')

const addComment = async (req, res) => {
  const { userID, title, description } = req.body

  try {
    const newComment = await Comment.create({ userID, title, description })
    res.status(201).json(newComment)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const updateComment = async (req, res) => {
  const id = req.params.id
  const { userID, title, description } = req.body
  try {
    const post = await Comment.findById(id)

    if (post.userID === userID) {
      post.title = title
      post.description = description

      await post.save()
      res.status(200).send(post)
    } else {
      res.status(403).json({ message: 'you are not authorised to post' })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const deleteComment = async (req, res) => {
  const id = req.params.id
  try {
    const post = await Comment.findById(id)
    await post.deleteOne()
    res.status(200).json({ message: 'It has been deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const likeComment = async (req, res) => {
  const id = req.params.id
  const userID = req.body.userID
  try {
    const post = await Comment.findById(id)
    if (!post.likes.includes(userID)) {
      await post.updateOne({ $push: { likes: userID } })
      res.status(200).json('The post has been liked')
    } else {
      await post.updateOne({ $pull: { likes: userID } })
      res.status(200).json('The post has been disliked')
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getComments = async (req, res) => {
  const id = req.params.id
  try {
    const post = await Comment.findById(id)
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  addComment,
  updateComment,
  deleteComment,
  likeComment,
  getComments,
}
