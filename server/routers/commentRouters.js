const express = require('express')
const router = express.Router()

const {
  addComment,
  updateComment,
  deleteComment,
  likeComment,
  getComments,
} = require('../controllers/commentController')

router.post('/', addComment)
router.patch('/:id', updateComment)
router.delete('/:id', deleteComment)
router.patch('/:id/like', likeComment)
router.get('/', getComments)

module.exports = router
