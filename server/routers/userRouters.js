const express = require('express')
const router = express.Router()

const {
  loginUser,
  signupUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController')

router.post('/login', loginUser)
router.post('/register', signupUser)
router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
