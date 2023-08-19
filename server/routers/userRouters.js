const express = require('express')

const {
  loginUser,
  signupUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController')

const router = express.Router()

router.post('/login', loginUser)
router.post('/register', signupUser)
router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
