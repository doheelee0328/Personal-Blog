import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useToastMessage } from '../context/Toast'

export const useDeleteComments = () => {
  const [deleteSpinner, setDeleteSpinner] = useState(false)
  const [userData, setUserData] = useState(null)
  const { successMessage, errorMessage } = useToastMessage()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'))

    if (token) {
      try {
        const decodedToken = jwtDecode(token.token)
        console.log('Decoded Token:', decodedToken._id) // Add this line
        setUserData(decodedToken._id)
      } catch (error) {}
    }
  }, [])

  const deleteComments = async (id) => {
    const url = `https://backend-personalblog.onrender.com/comment/${id}`
    const data = {
      userID: userData,
    }

    console.log('UserID:', data.userID)
    try {
      const response = await axios.delete(url, {
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`,
        },
      })
      console.log('hello', response.status)

      if (response.status === 200) {
        setDeleteSpinner(true)
        successMessage('Post has been deleted successfully')
      }
    } catch (error) {
      errorMessage(error.response.data.message)
    }
  }

  return { deleteComments, deleteSpinner }
}
