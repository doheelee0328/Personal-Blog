const express = require('express')
const router = express.Router()

const {
  addComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController')

router.post('/', addComment)
router.patch('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router
