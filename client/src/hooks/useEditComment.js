import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useToastMessage } from '../context/Toast'

export const useEditComments = () => {
  const [editSpinner, setEditSpinner] = useState(false)
  const [userData, setUserData] = useState(null)

  const { successMessage, errorMessage } = useToastMessage()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'))

    if (token) {
      try {
        const decodedToken = jwtDecode(token.token)
        setUserData(decodedToken._id)
      } catch (error) {
        console.log('Error decoding token:', error)
      }
    }
  }, [])

  const editComments = async (description, id) => {
    setEditSpinner(false)

    const url = `https://backend-personalblog.onrender.com/comment/${id}`
    const data = {
      userID: userData,
      description: description,
    }

    if (description) {
      try {
        const response = await axios.patch(url, data)
        if (response.status === 200) {
          successMessage('Post has been edited successfully')
          setEditSpinner(false)
        }
      } catch (error) {
        setEditSpinner(false)
        errorMessage(error.response.data.message)
      }
    } else {
      errorMessage('Please write a comment')
    }
  }
  return { editComments, editSpinner }
}
