const Comment = require('../models/Comment')

const addComment = async (req, res) => {
  const { userID, title, description } = req.body
  try {
    const newComment = await Comment.create({ userID, title, description })
    res.status(201).send(newComment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateComment = async (req, res) => {
  const id = req.params.id
  const { userID, title, description } = req.body

  try {
    const updateComment = await Comment.findByIdAndUpdate(
      id,
      {
        userID,
        title,
        description,
      },
      { new: true }
    )

    if (!updateComment) {
      throw new Error('Cannot find the User ')
    }
    res.status(200).json(updateComment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  addComment,
  updateComment,
}
